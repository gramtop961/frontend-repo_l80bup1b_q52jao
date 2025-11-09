import { Target, Users, ShieldCheck } from "lucide-react";

export default function HowItWorks() {
  const items = [
    {
      icon: Target,
      title: "Цель",
      desc: "Поставщик задаёт цену и минимальное количество, например 700 тг за 1 000 шт.",
    },
    {
      icon: Users,
      title: "Сбор",
      desc: "Покупатели объединяются и бронируют нужное количество. Как только порог достигнут — заказ подтверждается.",
    },
    {
      icon: ShieldCheck,
      title: "Оплата",
      desc: "Оплата списывается только при достижении цели и отправляется поставщику. Каждый получает свой объём.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-center text-xl font-semibold text-slate-900">Как это работает</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
            <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="font-medium text-slate-900">{it.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
