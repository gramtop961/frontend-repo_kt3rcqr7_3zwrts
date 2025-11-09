import Spline from "@splinetool/react-spline";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        {/* Safe Spline embed with full size, no negative z-index */}
        <Spline
          scene="https://prod.spline.design/5JHc6k6m9b6bS9qB/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Gradient veil with pointer-events-none so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white"></div>

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
