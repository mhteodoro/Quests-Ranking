'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import {
    completeMission,
    getMissions,
    getMyCompletions,
} from '@/services/missions';
import type { Mission } from '@/types/mission';

export function MissionsPanel() {
    const { token, isAuthenticated, isLoading: isAuthLoading } =
        useAuth();

    const [missions, setMissions] = useState<Mission[]>([]);
    const [completedMissionIds, setCompletedMissionIds] = useState<
        number[]
    >([]);
    const [submittingMissionId, setSubmittingMissionId] = useState<
        number | null
    >(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<
        string | null
    >(null);

    useEffect(() => {
        let cancelled = false;

        async function loadData() {
            try {
                const missionsResponse = await getMissions();

                if (cancelled) {
                    return;
                }

                setMissions(missionsResponse);

                if (token) {
                    const completionsResponse =
                        await getMyCompletions(token);

                    if (cancelled) {
                        return;
                    }

                    setCompletedMissionIds(
                        completionsResponse.map(
                            (completion) => completion.missionId,
                        ),
                    );
                }
            } catch (caughtError) {
                if (!cancelled) {
                    setError(
                        caughtError instanceof Error
                            ? caughtError.message
                            : 'Não foi possível carregar as missões.',
                    );
                }
            } finally {
                if (!cancelled) {
                    setIsLoading(false);
                }
            }
        }

        if (!isAuthLoading) {
            void loadData();
        }

        return () => {
            cancelled = true;
        };
    }, [token, isAuthLoading]);

    async function handleComplete(mission: Mission) {
        if (!token) {
            setError(
                'Entre ou crie uma conta para completar missões.',
            );
            return;
        }

        setSubmittingMissionId(mission.id);
        setError(null);
        setSuccessMessage(null);

        try {
            const response = await completeMission(mission.id, token);

            setCompletedMissionIds((currentIds) => [
                ...new Set([...currentIds, mission.id]),
            ]);

            setSuccessMessage(response.message);
        } catch (caughtError) {
            setError(
                caughtError instanceof Error
                    ? caughtError.message
                    : 'Não foi possível completar a missão.',
            );
        } finally {
            setSubmittingMissionId(null);
        }
    }

    if (isAuthLoading || isLoading) {
        return (
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">
                    Carregando missões...
                </p>
            </section>
        );
    }

    return (
        <section>
            <div className="mb-5">
                <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                    Desafios
                </p>

                <h2 className="mt-1 text-3xl font-bold text-slate-900">
                    Missões disponíveis
                </h2>

                <p className="mt-2 text-slate-600">
                    Cada missão pode ser concluída apenas uma vez.
                </p>
            </div>

            {!isAuthenticated && (
                <p className="mb-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                    Entre ou crie uma conta para completar as missões.
                </p>
            )}

            {error && (
                <p
                    role="alert"
                    className="mb-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                    {error}
                </p>
            )}

            {successMessage && (
                <p
                    role="status"
                    className="mb-5 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
                >
                    {successMessage}
                </p>
            )}

            <div className="grid gap-4">
                {missions.map((mission) => {
                    const isCompleted = isAuthenticated
                        ? completedMissionIds.includes(mission.id)
                        : false;

                    const isSubmitting =
                        submittingMissionId === mission.id;

                    return (
                        <article
                            key={mission.id}
                            className={`rounded-2xl border p-5 shadow-sm transition ${isCompleted
                                ? 'border-emerald-200 bg-emerald-50'
                                : 'border-slate-200 bg-white hover:border-indigo-200'
                                }`}
                        >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="min-w-0">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-lg font-bold text-slate-900">
                                            {mission.title}
                                        </h3>

                                        {isCompleted && (
                                            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">
                                                Concluída
                                            </span>
                                        )}
                                    </div>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        {mission.description}
                                    </p>
                                </div>

                                <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end">
                                    <span className="whitespace-nowrap text-lg font-bold text-indigo-600">
                                        {mission.points} pontos
                                    </span>

                                    <button
                                        type="button"
                                        disabled={
                                            !isAuthenticated ||
                                            isCompleted ||
                                            isSubmitting
                                        }
                                        onClick={() => void handleComplete(mission)}
                                        className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                                    >
                                        {isSubmitting
                                            ? 'Concluindo...'
                                            : isCompleted
                                                ? 'Concluída'
                                                : 'Completar'}
                                    </button>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            {missions.length === 0 && !error && (
                <p className="rounded-xl border border-slate-200 bg-white p-6 text-center text-slate-500">
                    Nenhuma missão disponível.
                </p>
            )}
        </section>
    );
}