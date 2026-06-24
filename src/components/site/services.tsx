"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Server,
  Users,
  Megaphone,
  LineChart,
  Check,
  ArrowRight,
} from "lucide-react";

const PILLARS = [
  {
    id: 1,
    icon: Building2,
    title: "Healthcare Setup & Operational Infrastructure",
    coreValue: "Transform raw vision into compliant, operational facilities.",
    keyDeliverables: [
      "Hospital registration & licensing",
      "Regulatory compliance frameworks",
      "Interior branding & spatial design",
      "Asset management protocols",
      "Vendor onboarding & governance",
    ],
    businessImpact:
      "Faster Market Entry — Eliminate setup delays; launch compliant from day one with every operational prerequisite already in place.",
  },
  {
    id: 2,
    icon: Server,
    title: "IT & SaaS Implementation",
    coreValue: "Unified software backbone powers all daily operations.",
    keyDeliverables: [
      "All-in-one platform (appointments, billing, orders, returns)",
      "Clinical & pharmacy modules",
      "Internal chat & collaboration",
      "Ticket management system",
      "Email infrastructure",
    ],
    businessImpact:
      "Operational Lock-In — Your business runs on our integrated system; we become indispensable to your day-to-day execution.",
  },
  {
    id: 3,
    icon: Users,
    title: "HR, Payroll & Financial Compliance",
    coreValue: "Remove administrative burden from leadership.",
    keyDeliverables: [
      "Talent acquisition & onboarding",
      "HR compliance management",
      "Automated payroll processing",
      "Attendance tracking systems",
      "TDS / PT / ESI / Gratuity filing",
    ],
    businessImpact:
      "Leadership Focus — Free executives to grow the business, not manage admin. Every statutory obligation handled end-to-end.",
  },
  {
    id: 4,
    icon: Megaphone,
    title: "Digital Marketing & Brand Identity",
    coreValue: "Drive top-of-funnel growth and brand authority.",
    keyDeliverables: [
      "Logo design & visual identity",
      "Collateral (pamphlets, calendars, books)",
      "Website design & SEO",
      "Organic + paid marketing campaigns",
      "WhatsApp campaigns & lead management",
    ],
    businessImpact:
      "Revenue Acceleration — A consistent, predictable client acquisition pipeline engineered for measurable ROI.",
  },
  {
    id: 5,
    icon: LineChart,
    title: "Strategic Advisory & Process Optimization",
    coreValue: "Executive-level insights for continuous improvement.",
    keyDeliverables: [
      "Business intelligence dashboards",
      "Operational efficiency audits",
      "Master reporting frameworks",
      "Strategic growth planning",
      "Continuous process refinement",
    ],
    businessImpact:
      "Competitive Edge — Data-driven decisions and optimized workflows that compound advantage over time.",
  },
];

export default function Services() {
  const [active, setActive] = useState(1);
  const activePillar = PILLARS.find((p) => p.id === active)!;

  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-30" />
      <div className="aurora bg-silver-deep/20 w-[500px] h-[500px] top-1/4 -left-40" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-silver/20 bg-white/5">
            <span className="text-xs font-medium tracking-wider uppercase text-silver">
              The Five Pillars
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
            One partner. <span className="text-silver-shine">Five disciplines.</span>
            <br />
            Total operational coverage.
          </h2>

          <p className="text-lg text-silver-bright/70 leading-relaxed">
            Each pillar is a complete vertical — staffed by specialists, integrated with
            the others, and accountable for measurable business outcomes. Select any
            pillar to explore its scope, deliverables, and the impact it creates.
          </p>
        </motion.div>

        {/* Pillar selector tabs */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = pillar.id === active;
            return (
              <button
                key={pillar.id}
                onClick={() => setActive(pillar.id)}
                className={`group relative p-4 rounded-xl text-left transition-all duration-300 border ${
                  isActive
                    ? "border-silver/40 bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 glow-silver"
                    : "border-white/5 bg-white/[0.02] hover:border-silver/20 hover:bg-white/[0.04]"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all ${
                    isActive
                      ? "bg-gradient-to-br from-silver to-zinc-500 text-black"
                      : "bg-white/5 text-silver-bright group-hover:bg-white/10"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-xs font-mono text-silver-dim mb-1">
                  PILLAR {String(pillar.id).padStart(2, "0")}
                </div>
                <div
                  className={`text-sm font-semibold leading-snug ${
                    isActive ? "text-white" : "text-silver-bright/80"
                  }`}
                >
                  {pillar.title.split(" & ")[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active pillar detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 glass-card rounded-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-12 gap-0">
              {/* Left visual panel */}
              <div className="lg:col-span-5 relative p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-silver/5 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-silver to-zinc-600 flex items-center justify-center">
                      <activePillar.icon className="h-7 w-7 text-black" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-silver-dim">
                        PILLAR {String(activePillar.id).padStart(2, "0")} / 05
                      </div>
                      <div className="text-sm text-silver-bright/70 uppercase tracking-wider">
                        Service Vertical
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                    {activePillar.title}
                  </h3>

                  <div className="mt-6 p-4 rounded-xl bg-black/40 border border-silver/10">
                    <div className="text-xs uppercase tracking-wider text-silver-dim mb-2">
                      Core Value
                    </div>
                    <p className="text-silver-bright/90 text-base italic leading-relaxed">
                      &ldquo;{activePillar.coreValue}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Right content panel */}
              <div className="lg:col-span-7 p-8 sm:p-10 space-y-8">
                <div>
                  <div className="text-xs uppercase tracking-wider text-silver-dim mb-4 flex items-center gap-2">
                    <ArrowRight className="h-3 w-3" />
                    Key Deliverables
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {activePillar.keyDeliverables.map((item, idx) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-silver/20 hover:bg-white/[0.04] transition-all"
                      >
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-silver/20 border border-silver/30 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-silver-bright" />
                        </div>
                        <span className="text-sm text-silver-bright/85 leading-relaxed">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-gradient-to-br from-silver/10 via-white/[0.03] to-transparent border border-silver/20">
                  <div className="text-xs uppercase tracking-wider text-silver mb-2 flex items-center gap-2">
                    <TrendingUpMini />
                    Business Impact
                  </div>
                  <p className="text-white text-base leading-relaxed">
                    {activePillar.businessImpact}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function TrendingUpMini() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-silver">
      <path
        d="M3 17l6-6 4 4 8-8M14 7h7v7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
