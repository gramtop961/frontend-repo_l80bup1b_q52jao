import { useMemo } from "react";
import { Users, Target } from "lucide-react";

export default function CampaignCard({ title, price, minQty, committedQty, onJoin }) {
  const progress = useMemo(() => {
    const pct = Math.min(100, Math.round((committedQty / minQty) * 100));
    return isFinite(pct) ? pct : 0;
  }, [committedQty, minQty]);

  const remaining = Math.max(0, minQty - committedQty);

  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">
            Цена поставщика: <span className="font-medium text-slate-900">{price.toLocaleString()} тг</span> за шт
          </p>
          <p className="mt-1 text-sm text-slate-600">Минимальный заказ: {minQty.toLocaleString()} шт</p>
        </div>
        <div className="rounded-lg bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
          <div className="flex items-center gap-1">
            <Target className="h-3.5 w-3.5" />
            {progress}%
          </div>
        </div>
      </div>

      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-indigo-600 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-slate-500" />
          <span>
            Участвуют: {committedQty.toLocaleString()} / {minQty.toLocaleString()} шт
          </span>
        </div>
        {remaining > 0 ? (
          <span className="rounded-md bg-amber-50 px-2 py-1 text-amber-700">Не хватает {remaining.toLocaleString()} шт</span>
        ) : (
          <span className="rounded-md bg-emerald-50 px-2 py-1 text-emerald-700">Готово к покупке</span>
        )}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <input
          type="number"
          min={1}
          defaultValue={1}
          className="h-10 w-24 rounded-md border border-slate-300 px-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          id={`qty-${title}`}
        />
        <button
          onClick={() => {
            const input = document.getElementById(`qty-${title}`);
            const val = Number(input?.value || 1);
            onJoin?.(Math.max(1, Math.floor(val)));
          }}
          className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-600 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400"
        >
          Присоединиться
        </button>
      </div>
    </div>
  );
}
