import { Menu, LogIn } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 shadow-[0_0_24px_rgba(251,146,60,0.55)]" />
              <span className="text-white font-semibold tracking-wide">Authority</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#home" className="text-zinc-300 hover:text-white transition">Home</a>
              <a href="#features" className="text-zinc-300 hover:text-white transition">Features</a>
              <a href="#updates" className="text-zinc-300 hover:text-white transition">Update</a>
              <a href="#pricing" className="text-zinc-300 hover:text-white transition">Pricing</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-orange-500 to-amber-600 text-white px-4 py-2 shadow-[0_0_24px_rgba(251,146,60,0.6)] hover:shadow-[0_0_36px_rgba(251,146,60,0.8)] transition">
                <LogIn size={16} />
                <span>Login</span>
              </a>
            </nav>
            <button className="md:hidden text-zinc-300" aria-label="Open menu">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
