import { useState } from "react";
import { PlusCircle } from "lucide-react";

export default function CreateCampaign({ onCreate }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(700);
  const [minQty, setMinQty] = useState(1000);

  const canCreate = title.trim() && price > 0 && minQty > 0;

  const handleCreate = () => {
    if (!canCreate) return;
    onCreate?.({ title: title.trim(), price: Number(price), minQty: Number(minQty) });
    setTitle("");
    setPrice(700);
    setMinQty(1000);
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <PlusCircle className="h-5 w-5 text-indigo-600" />
        <h3 className="font-semibold text-slate-900">Создать новую кампанию</h3>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название товара"
          className="h-10 w-full rounded-md border border-slate-300 px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          min={1}
          className="h-10 w-full rounded-md border border-slate-300 px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          placeholder="Цена за шт"
        />
        <input
          type="number"
          value={minQty}
          onChange={(e) => setMinQty(Number(e.target.value))}
          min={1}
          className="h-10 w-full rounded-md border border-slate-300 px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          placeholder="Минимальный заказ (шт)"
        />
      </div>
      <div className="mt-3">
        <button
          disabled={!canCreate}
          onClick={handleCreate}
          className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-600 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Создать кампанию
        </button>
      </div>
    </div>
  );
}
