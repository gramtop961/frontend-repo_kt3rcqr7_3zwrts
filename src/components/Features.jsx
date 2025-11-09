import { ShieldCheck, Rocket, ChartBar, Palette } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Conversion-first landing pages",
    desc: "Prebuilt, reactive layouts with A/B-ready sections, blazing fast by default.",
  },
  {
    icon: ChartBar,
    title: "Meta & Google integrations",
    desc: "Pixel + Conversions API, Google Ads & Analytics with server-side events.",
  },
  {
    icon: ShieldCheck,
    title: "Role-based admin and user panels",
    desc: "Manage clients, themes, billing, and permissions from a clean console.",
  },
  {
    icon: Palette,
    title: "Radiant theme system",
    desc: "Color radiance palette generator with brand-safe presets for instant polish.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-rose-50/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need to ship faster</h2>
          <p className="mt-3 text-gray-700">From optimized landing phases to analytics-ready funnels, we built the stack agencies actually use.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm hover:shadow-md transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-amber-400 via-rose-400 to-fuchsia-500 ring-1 ring-black/10 grid place-items-center">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
