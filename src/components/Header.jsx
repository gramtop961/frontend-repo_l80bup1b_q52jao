import { ShoppingCart, Users } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <ShoppingCart className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-900">GroupBuy</h1>
            <p className="text-xs text-slate-500">Совместные покупки у поставщиков</p>
          </div>
        </div>
        <div className="hidden items-center gap-2 text-slate-600 sm:flex">
          <Users className="h-4 w-4" />
          <span className="text-sm">Объединяйтесь, чтобы экономить</span>
        </div>
      </div>
    </header>
  );
}
