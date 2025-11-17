export default function Footer(){
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 shadow-[0_0_18px_rgba(251,146,60,0.55)]" />
            <span className="text-zinc-400 text-sm">Authority</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a className="text-zinc-400 hover:text-white transition" href="#">Company</a>
            <a className="text-zinc-400 hover:text-white transition" href="#">Help</a>
            <a className="text-zinc-400 hover:text-white transition" href="#">Social</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
