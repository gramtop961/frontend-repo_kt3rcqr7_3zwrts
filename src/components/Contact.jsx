import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-rose-50/50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Talk to a strategist</h2>
            <p className="mt-3 text-gray-700">Get a personalized walkthrough and learn how to connect Meta/Facebook and Google for measurable results.</p>
            <div className="mt-6 space-y-3 text-gray-800">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-rose-500"/> hello@radiantagency.app</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-rose-500"/> +1 (555) 012-3456</p>
            </div>
          </div>
          <form className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-800">First name</label>
                <input className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" placeholder="Jane"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800">Last name</label>
                <input className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" placeholder="Doe"/>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-800">Work email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" placeholder="you@company.com"/>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-800">What do you want to achieve?</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" placeholder="Launch a new funnel, migrate clients, set up tracking..."/>
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold text-white bg-gradient-to-r from-amber-500 via-rose-500 to-fuchsia-500 shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 w-full">
              Request demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
