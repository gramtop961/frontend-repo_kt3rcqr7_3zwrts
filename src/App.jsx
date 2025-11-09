import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Panels from "./components/Panels";
import Contact from "./components/Contact";

function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} RadiantAgency. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Status</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Panels />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
