'use client';

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { getRanking } from '@/services/ranking';
import type { RankingEntry } from '@/types/ranking';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

if (!apiUrl) {
    throw new Error('NEXT_PUBLIC_API_URL is not defined');
}

export function RankingPanel() {
    const [ranking, setRanking] = useState<RankingEntry[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function loadRanking() {
            try {
                const response = await getRanking();

                if (!cancelled) {
                    setRanking(response);
                    setError(null);
                }
            } catch (caughtError) {
                if (!cancelled) {
                    setError(
                        caughtError instanceof Error
                            ? caughtError.message
                            : 'Não foi possível carregar o ranking.',
                    );
                }
            } finally {
                if (!cancelled) {
                    setIsLoading(false);
                }
            }
        }

        const socket = io(apiUrl);

        socket.on('ranking:updated', () => {
            void loadRanking();
        });

        void loadRanking();

        return () => {
            cancelled = true;
            socket.disconnect();
        };
    }, []);

    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5">
                <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
                    Classificação
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                    Ranking
                </h2>
            </div>

            {isLoading && (
                <p className="text-sm text-slate-500">
                    Carregando ranking...
                </p>
            )}

            {error && (
                <p
                    role="alert"
                    className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700"
                >
                    {error}
                </p>
            )}

            {!isLoading && !error && ranking.length === 0 && (
                <p className="text-sm text-slate-500">
                    Nenhum jogador pontuou ainda.
                </p>
            )}

            {!isLoading && !error && ranking.length > 0 && (
                <ol className="flex flex-col gap-3">
                    {ranking.map((entry) => (
                        <li
                            key={entry.id}
                            className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"
                        >
                            <span
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold ${entry.position === 1
                                        ? 'bg-amber-100 text-amber-700'
                                        : entry.position === 2
                                            ? 'bg-slate-200 text-slate-700'
                                            : entry.position === 3
                                                ? 'bg-orange-100 text-orange-700'
                                                : 'bg-white text-slate-500'
                                    }`}
                            >
                                {entry.position}º
                            </span>

                            <div className="min-w-0 flex-1">
                                <p className="truncate font-semibold text-slate-900">
                                    {entry.name}
                                </p>

                                <p className="text-xs text-slate-500">
                                    {entry.completedMissions}{' '}
                                    {entry.completedMissions === 1
                                        ? 'missão concluída'
                                        : 'missões concluídas'}
                                </p>
                            </div>

                            <span className="shrink-0 font-bold text-indigo-600">
                                {entry.totalPoints} pts
                            </span>
                        </li>
                    ))}
                </ol>
            )}
        </section>
    );
}