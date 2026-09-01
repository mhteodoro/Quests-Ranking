'use client';

import { AuthPanel } from '@/components/AuthPanel';
import { MissionsPanel } from '@/components/MissionsPanel';
import { RankingPanel } from '@/components/RankingPanel';

export function Dashboard() {
    return (
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <MissionsPanel />

            <aside className="flex flex-col gap-6 lg:sticky lg:top-8">
                <AuthPanel />
                <RankingPanel />
            </aside>
        </div>
    );
}