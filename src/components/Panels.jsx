import { LayoutDashboard, Users, Settings } from "lucide-react";

export default function Panels() {
  return (
    <section id="panels" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Admin & user panels that feel effortless</h2>
            <p className="mt-3 text-gray-700">A focused command center for operators and a clean client portal. Track leads, manage campaigns, and launch pages without touching code.</p>
            <ul className="mt-6 space-y-3 text-gray-800">
              <li className="flex items-center gap-2"><LayoutDashboard className="h-4 w-4 text-rose-500"/> Unified dashboard</li>
              <li className="flex items-center gap-2"><Users className="h-4 w-4 text-rose-500"/> Roles & permissions</li>
              <li className="flex items-center gap-2"><Settings className="h-4 w-4 text-rose-500"/> Theme presets & branding</li>
            </ul>
          </div>
          <div>
            <div className="relative rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
              <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-tr from-gray-900 via-slate-800 to-gray-700 text-white grid place-items-center">
                <div className="text-center">
                  <p className="text-sm text-white/80">Preview</p>
                  <p className="mt-1 text-lg font-semibold">Panel mock</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
