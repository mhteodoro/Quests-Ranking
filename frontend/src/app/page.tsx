import { AuthPanel } from '@/components/AuthPanel';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-md">
        <header className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            Quests Ranking
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Missões e ranking
          </h1>

          <p className="mt-3 text-slate-600">
            Complete desafios, acumule pontos e suba no ranking.
          </p>
        </header>

        <AuthPanel />
      </div>
    </main>
  );
}