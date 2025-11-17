import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(251,146,60,0.12),transparent)]" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="py-6"><Showcase /></div>
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-orange-500/30 via-orange-400/10 to-transparent blur-3xl" />
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950 to-zinc-900 p-10 text-center">
                <h3 className="text-3xl font-extrabold tracking-tight">GET YOUR AUTHORITY</h3>
                <p className="mt-3 text-zinc-300">Take control of your teams files with effortless organization and powerful collaboration.</p>
                <div className="mt-6">
                  <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-orange-500 to-amber-600 px-6 py-3 font-semibold text-white shadow-[0_0_40px_rgba(251,146,60,0.55)] hover:shadow-[0_0_56px_rgba(251,146,60,0.75)] transition">Start 7-Day Trial</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
