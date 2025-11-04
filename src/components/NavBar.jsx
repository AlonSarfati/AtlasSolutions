// src/components/NavBar.jsx
import { ArrowRight } from "lucide-react";
import { scrollToSection } from "../utils/scrollToSection";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 grid place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-slate-950 font-black">
              AS
            </div>
            <div className="leading-tight">
              <p className="text-lg sm:text-xl font-semibold">Atlas Solutions</p>
              <p className="text-xs sm:text-sm text-slate-300">International Trade & Materials</p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services"  onClick={(e)=>scrollToSection(e,"services")}  className="hover:text-cyan-300 transition">Services</a>
            <a href="#materials" onClick={(e)=>scrollToSection(e,"materials")} className="hover:text-cyan-300 transition">Materials</a>
            <a href="#process"   onClick={(e)=>scrollToSection(e,"process")}   className="hover:text-cyan-300 transition">Process</a>
            <a href="#about"     onClick={(e)=>scrollToSection(e,"about")}     className="hover:text-cyan-300 transition">About</a>
            <a href="#contact"   onClick={(e)=>scrollToSection(e,"contact")}   className="hover:text-cyan-300 transition">Contact</a>
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e)=>scrollToSection(e,"contact")}
            className="inline-flex items-center gap-2 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 px-4 py-2 text-sm"
          >
            Get a Quote <ArrowRight className="h-4 w-4"/>
          </a>
        </div>
      </div>
    </header>
  );
}
