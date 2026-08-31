'use client';

import { useState } from 'react';
import { AuthPanel } from '@/components/AuthPanel';
import { MissionsPanel } from '@/components/MissionsPanel';
import { RankingPanel } from '@/components/RankingPanel';

export function Dashboard() {
    const [rankingRefreshKey, setRankingRefreshKey] = useState(0);

    function handleMissionCompleted() {
        setRankingRefreshKey((currentKey) => currentKey + 1);
    }

    return (
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <MissionsPanel
                onMissionCompleted={handleMissionCompleted}
            />

            <aside className="flex flex-col gap-6 lg:sticky lg:top-8">
                <AuthPanel />

                <RankingPanel refreshKey={rankingRefreshKey} />
            </aside>
        </div>
    );
}