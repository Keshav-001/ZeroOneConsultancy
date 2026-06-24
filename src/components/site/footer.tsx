"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUp, Building2, Server, Users, Megaphone, LineChart } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Service Pillars",
    links: [
      { label: "Healthcare Setup", href: "#services" },
      { label: "IT & SaaS Implementation", href: "#services" },
      { label: "HR & Financial Compliance", href: "#services" },
      { label: "Digital Marketing", href: "#services" },
      { label: "Strategic Advisory", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Advantage", href: "#advantage" },
      { label: "Implementation Journey", href: "#journey" },
      { label: "Differentiators", href: "#expertise" },
      { label: "Trust & Credibility", href: "#trust" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Engage",
    links: [
      { label: "Schedule Consultation", href: "#contact" },
      { label: "View Service Offerings", href: "#services" },
      { label: "Download Checklist", href: "#contact" },
      { label: "Email Us Directly", href: "mailto:Keshav@ZeroOneConsultancy.com" },
    ],
  },
];

const PILLAR_ICONS = [Building2, Server, Users, Megaphone, LineChart];

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="aurora bg-silver-deep/20 w-[700px] h-[400px] -top-32 left-1/2 -translate-x-1/2" />

      <div className="relative">
        {/* Top CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-b border-white/5"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider text-silver">
                One Partner. Complete Transformation.
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                From facility setup to financial compliance to revenue growth —{" "}
                <span className="text-silver-shine">we handle it all.</span>
              </h3>
              <p className="text-silver-bright/60 leading-relaxed">
                Let&apos;s discuss how we can accelerate your business growth.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <a
                href="mailto:Keshav@ZeroOneConsultancy.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-zinc-100 via-silver to-zinc-400 text-black font-semibold btn-shimmer hover:glow-silver-strong transition-all"
              >
                <Mail className="h-4 w-4" />
                Keshav@ZeroOneConsultancy.com
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-silver/30 text-white font-medium hover:bg-white/5 hover:border-silver/50 transition-all"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </motion.div>

        {/* Main footer */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Brand column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Zero One Consultancy"
                  className="h-12 w-12 object-contain rounded-full ring-1 ring-white/10"
                />
                <div>
                  <div className="font-semibold text-white text-lg">Zero One</div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-silver-dim">
                    Consultancy
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-silver/20 bg-white/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-silver opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-silver-bright" />
                </span>
                <span className="text-xs font-medium tracking-wider uppercase text-silver-bright">
                  Always On.
                </span>
              </div>

              <p className="text-sm text-silver-bright/60 leading-relaxed max-w-sm">
                End-to-end business solutions for healthcare enterprises. From regulatory
                compliance to revenue growth — your complete implementation partner. Two
                decades of expertise, unified under one strategic partnership.
              </p>

              {/* Pillar icons strip */}
              <div className="flex items-center gap-2 pt-2">
                {PILLAR_ICONS.map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-silver-dim hover:text-silver-bright hover:border-silver/20 transition-colors"
                    title={`Pillar ${idx + 1}`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {FOOTER_LINKS.map((col) => (
              <div key={col.title} className="lg:col-span-2 space-y-4">
                <h4 className="text-xs uppercase tracking-wider text-silver font-semibold">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-silver-bright/60 hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                      >
                        <span className="w-0 h-px bg-silver group-hover:w-3 transition-all" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact column */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-silver font-semibold">
                Get in Touch
              </h4>
              <a
                href="mailto:Keshav@ZeroOneConsultancy.com"
                className="block text-sm text-silver-bright/60 hover:text-white transition-colors break-all"
              >
                Keshav@ZeroOneConsultancy.com
              </a>
              <div className="text-sm text-silver-bright/60">
                <div className="text-silver-dim text-xs uppercase tracking-wider mb-1">
                  Coverage
                </div>
                Pan-India Healthcare
              </div>
              <div className="text-sm text-silver-bright/60">
                <div className="text-silver-dim text-xs uppercase tracking-wider mb-1">
                  Response
                </div>
                Within 1 Business Day
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-silver-dim">
              © {new Date().getFullYear()} Zero One Consultancy. All rights reserved.
              <span className="mx-2 text-silver/40">|</span>
              <span className="text-silver-bright/70">Always On.</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-xs text-silver-dim">
                Black & Silver — Engineered for Healthcare
              </div>
              <a
                href="#top"
                className="w-9 h-9 rounded-lg border border-silver/20 flex items-center justify-center text-silver-bright hover:bg-silver/10 hover:border-silver/40 transition-all"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
