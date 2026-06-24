"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Advantage", href: "#advantage" },
  { label: "Journey", href: "#journey" },
  { label: "Expertise", href: "#expertise" },
  { label: "Trust", href: "#trust" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-black/60 backdrop-blur-xl border-b border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
        {/* Logo + Brand */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md group-hover:bg-white/40 transition-all" />
            <img
              src="/logo.png"
              alt="Zero One Consultancy Logo"
              className="relative h-11 w-11 object-contain rounded-full ring-1 ring-white/10"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-white tracking-tight text-[15px]">
              Zero One
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-silver-dim">
              Consultancy
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-silver-bright/80 hover:text-white transition-colors group"
            >
              {link.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-silver to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:Keshav@ZeroOneConsultancy.com"
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white btn-shimmer bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-700 hover:to-zinc-600 border border-white/10 rounded-lg transition-all"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden md:inline">Get in Touch</span>
          </a>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-white/5 bg-black/80 backdrop-blur-xl"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-silver-bright/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:Keshav@ZeroOneConsultancy.com"
                className="mt-2 px-3 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-zinc-800 to-zinc-700 border border-white/10 rounded-lg text-center"
              >
                Get in Touch
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
