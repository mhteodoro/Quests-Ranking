import { Dashboard } from '@/components/Dashboard';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            Quests Ranking
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900 sm:text-5xl">
            Missões e ranking
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Complete desafios, acumule pontos e dispute as
            primeiras posições.
          </p>
        </header>

        <Dashboard />
      </div>
    </main>
  );
}