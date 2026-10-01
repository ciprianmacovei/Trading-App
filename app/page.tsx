import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <h2 className="text-base font-medium">Dashboard</h2>
          <p className="mt-2 text-sm text-white/60">
            Placeholder dashboard. Watchlist, chart and portfolio views are not
            built yet.
          </p>
        </main>
      </div>
    </div>
  );
}
