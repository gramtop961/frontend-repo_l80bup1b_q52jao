import { useState } from "react";
import Header from "./components/Header";
import CreateCampaign from "./components/CreateCampaign";
import CampaignCard from "./components/CampaignCard";
import HowItWorks from "./components/HowItWorks";

function App() {
  const [campaigns, setCampaigns] = useState([
    { id: 1, title: "Мед в банках 0.5л", price: 700, minQty: 1000, committedQty: 420 },
    { id: 2, title: "Хлопковые носки (пара)", price: 450, minQty: 2000, committedQty: 1480 },
  ]);

  const handleCreate = (data) => {
    setCampaigns((prev) => [
      { id: Date.now(), ...data, committedQty: 0 },
      ...prev,
    ]);
  };

  const handleJoin = (id, qty) => {
    setCampaigns((prev) => prev.map((c) => (c.id === id ? { ...c, committedQty: c.committedQty + qty } : c)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <section className="rounded-2xl bg-indigo-600 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight">Экономьте вместе с групповой покупкой</h2>
          <p className="mt-2 text-white/90">
            Поставщик задаёт оптовую цену и минимальный объём. Участвуйте, вносите свой заказ и помогайте достичь цели.
          </p>
        </section>

        <div className="mt-8 space-y-6">
          <CreateCampaign onCreate={handleCreate} />

          <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {campaigns.map((c) => (
              <CampaignCard
                key={c.id}
                title={c.title}
                price={c.price}
                minQty={c.minQty}
                committedQty={c.committedQty}
                onJoin={(qty) => handleJoin(c.id, qty)}
              />
            ))}
          </section>
        </div>

        <HowItWorks />
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} GroupBuy — совместные покупки с выгодой
      </footer>
    </div>
  );
}

export default App;
