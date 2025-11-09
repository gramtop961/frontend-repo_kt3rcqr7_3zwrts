import { Rocket, Settings, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-amber-400 via-rose-400 to-fuchsia-500 shadow ring-1 ring-black/10 grid place-items-center">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">RadiantAgency</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#panels" className="hover:text-gray-900 transition">Panels</a>
          <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            <User className="h-4 w-4" /> Sign in
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 via-rose-500 to-fuchsia-500 shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30">
            <Settings className="h-4 w-4" /> Start free trial
          </button>
        </div>
      </div>
    </header>
  );
}
