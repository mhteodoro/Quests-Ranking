'use client';

import { useState, type FormEventHandler } from 'react';
import { useAuth } from '@/contexts/AuthContext';

type AuthMode = 'login' | 'register';

export function AuthPanel() {
    const {
        player,
        isAuthenticated,
        isLoading,
        login,
        register,
        logout,
    } = useAuth();

    const [mode, setMode] = useState<AuthMode>('login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (
        event,
    ) => {
        event.preventDefault();

        setError(null);
        setIsSubmitting(true);

        try {
            if (mode === 'register') {
                await register({
                    name,
                    email,
                    password,
                });
            } else {
                await login({
                    email,
                    password,
                });
            }

            setName('');
            setEmail('');
            setPassword('');
        } catch (caughtError) {
            setError(
                caughtError instanceof Error
                    ? caughtError.message
                    : 'Não foi possível concluir a autenticação.',
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    function changeMode(newMode: AuthMode) {
        setMode(newMode);
        setError(null);
    }

    if (isLoading) {
        return (
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">
                    Carregando sessão...
                </p>
            </section>
        );
    }

    if (isAuthenticated && player) {
        return (
            <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <p className="text-sm font-medium text-emerald-700">
                    Jogador autenticado
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                    Olá, {player.name}!
                </h2>

                <p className="mt-1 text-sm text-slate-600">
                    {player.email}
                </p>

                <button
                    type="button"
                    onClick={logout}
                    className="mt-5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                    Sair
                </button>
            </section>
        );
    }

    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 grid grid-cols-2 rounded-xl bg-slate-100 p-1">
                <button
                    type="button"
                    onClick={() => changeMode('login')}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${mode === 'login'
                            ? 'bg-white text-slate-900 shadow-sm'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                >
                    Entrar
                </button>

                <button
                    type="button"
                    onClick={() => changeMode('register')}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${mode === 'register'
                            ? 'bg-white text-slate-900 shadow-sm'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                >
                    Cadastrar
                </button>
            </div>

            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900">
                    {mode === 'login'
                        ? 'Entre na sua conta'
                        : 'Crie seu jogador'}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    {mode === 'login'
                        ? 'Acesse suas missões e continue pontuando.'
                        : 'Cadastre-se para completar missões e entrar no ranking.'}
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
            >
                {mode === 'register' && (
                    <label className="flex flex-col gap-1.5">
                        <span className="text-sm font-medium text-slate-700">
                            Nome
                        </span>

                        <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            autoComplete="name"
                            required
                            minLength={2}
                            className="rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        />
                    </label>
                )}

                <label className="flex flex-col gap-1.5">
                    <span className="text-sm font-medium text-slate-700">
                        E-mail
                    </span>

                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        autoComplete="email"
                        required
                        className="rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    />
                </label>

                <label className="flex flex-col gap-1.5">
                    <span className="text-sm font-medium text-slate-700">
                        Senha
                    </span>

                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        autoComplete={
                            mode === 'login'
                                ? 'current-password'
                                : 'new-password'
                        }
                        required
                        minLength={8}
                        className="rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    />
                </label>

                {error && (
                    <p
                        role="alert"
                        className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700"
                    >
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-1 rounded-lg bg-indigo-600 px-4 py-2.5 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isSubmitting
                        ? 'Aguarde...'
                        : mode === 'login'
                            ? 'Entrar'
                            : 'Criar conta'}
                </button>
            </form>
        </section>
    );
}