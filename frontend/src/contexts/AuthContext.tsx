'use client';

import {
    createContext,
    useContext,
    useMemo,
    useSyncExternalStore,
    type ReactNode,
} from 'react';
import {
    login as loginRequest,
    registerPlayer,
} from '@/services/auth';
import type {
    LoginData,
    Player,
    RegisterPlayerData,
} from '@/types/auth';

interface AuthSession {
    accessToken: string;
    player: Player;
}

interface AuthContextValue {
    player: Player | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (data: LoginData) => Promise<void>;
    register: (data: RegisterPlayerData) => Promise<void>;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const SESSION_STORAGE_KEY = 'quests-ranking-session';
const SESSION_CHANGE_EVENT = 'quests-ranking-session-change';

const AuthContext = createContext<AuthContextValue | undefined>(
    undefined,
);

function subscribeToSession(callback: () => void) {
    window.addEventListener('storage', callback);
    window.addEventListener(SESSION_CHANGE_EVENT, callback);

    return () => {
        window.removeEventListener('storage', callback);
        window.removeEventListener(SESSION_CHANGE_EVENT, callback);
    };
}

function getSessionSnapshot() {
    return localStorage.getItem(SESSION_STORAGE_KEY);
}

function getServerSessionSnapshot() {
    return null;
}

function subscribeToClient() {
    return () => { };
}

function getClientSnapshot() {
    return true;
}

function getServerClientSnapshot() {
    return false;
}

function notifySessionChange() {
    window.dispatchEvent(new Event(SESSION_CHANGE_EVENT));
}

function saveSession(session: AuthSession) {
    localStorage.setItem(
        SESSION_STORAGE_KEY,
        JSON.stringify(session),
    );

    notifySessionChange();
}

function removeSession() {
    localStorage.removeItem(SESSION_STORAGE_KEY);

    notifySessionChange();
}

export function AuthProvider({ children }: AuthProviderProps) {
    const storedSession = useSyncExternalStore(
        subscribeToSession,
        getSessionSnapshot,
        getServerSessionSnapshot,
    );

    const isClient = useSyncExternalStore(
        subscribeToClient,
        getClientSnapshot,
        getServerClientSnapshot,
    );

    const session = useMemo<AuthSession | null>(() => {
        if (!storedSession) {
            return null;
        }

        try {
            return JSON.parse(storedSession) as AuthSession;
        } catch {
            return null;
        }
    }, [storedSession]);

    async function login(data: LoginData) {
        const response = await loginRequest(data);

        saveSession({
            accessToken: response.accessToken,
            player: response.player,
        });
    }

    async function register(data: RegisterPlayerData) {
        await registerPlayer(data);

        await login({
            email: data.email,
            password: data.password,
        });
    }

    function logout() {
        removeSession();
    }

    return (
        <AuthContext.Provider
            value={{
                player: session?.player ?? null,
                token: session?.accessToken ?? null,
                isAuthenticated: Boolean(session),
                isLoading: !isClient,
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            'useAuth must be used within an AuthProvider',
        );
    }

    return context;
}