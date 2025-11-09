import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      {/* Reliable, GPU-friendly gradient background (no external embeds) */}
      <div
        className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(255,200,150,0.35),transparent),radial-gradient(900px_500px_at_90%_10%,rgba(255,120,180,0.35),transparent),linear-gradient(to_bottom,white,white)]"
        aria-hidden
      />
      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white" aria-hidden />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
          <Star className="h-3.5 w-3.5 text-amber-500" />
          Trusted by modern agencies
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-amber-700 to-fuchsia-700 bg-clip-text text-transparent">
          Launch radiant agency sites in minutes
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-700">
          A SaaS platform for agency owners with ready-to-use themes, SEO-optimized landing pages, and deep integrations with Meta/Facebook and Google Ads.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#features" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold text-white bg-gray-900 hover:bg-gray-800">
            Explore features
          </a>
          <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold text-gray-900 bg-white ring-1 ring-black/10 hover:bg-gray-50">
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
}
