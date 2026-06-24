"use client";

import { motion } from "framer-motion";
import {
  Search,
  Building,
  Cpu,
  Users,
  Rocket,
  Infinity as InfinityIcon,
} from "lucide-react";

const PHASES = [
  {
    id: 1,
    icon: Search,
    title: "Discovery & Strategy",
    body: "We audit your vision, regulatory requirements, and operational needs. Every engagement begins with a deep diagnostic that surfaces constraints, opportunities, and the optimal sequencing of work — before any commitment is made.",
    accent: "silver",
  },
  {
    id: 2,
    icon: Building,
    title: "Healthcare Setup & Infrastructure",
    body: "Facility registration, compliance, branding, and physical infrastructure deployment. We handle every tangible prerequisite — from licensing paperwork to interior branding to asset onboarding — so your facility is ready to operate from day one.",
    accent: "white",
  },
  {
    id: 3,
    icon: Cpu,
    title: "Technology Implementation",
    body: "Deploy our unified SaaS platform, integrate modules, and train your team. The software backbone goes live with appointments, billing, clinical, pharmacy, communication, and ticketing all connected to a single source of truth.",
    accent: "silver",
  },
  {
    id: 4,
    icon: Users,
    title: "Operations Handover",
    body: "HR onboarding, payroll automation, and financial systems go live. Talent acquisition completes, statutory compliance frameworks activate, and leadership is freed from administrative overhead — ready to focus on growth.",
    accent: "white",
  },
  {
    id: 5,
    icon: Rocket,
    title: "Growth Activation",
    body: "Digital presence launch, marketing campaigns, and lead management infrastructure activate. Brand identity goes public, SEO begins compounding, paid acquisition channels open, and the client pipeline starts filling predictably.",
    accent: "silver",
  },
  {
    id: 6,
    icon: InfinityIcon,
    title: "Continuous Optimization",
    body: "Ongoing BI dashboards, process improvements, and strategic advisory. The partnership continues indefinitely — every metric is monitored, every workflow is refined, and every decision is informed by accumulated operational data.",
    accent: "white",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-20" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-silver/20 bg-white/5">
            <span className="text-xs font-medium tracking-wider uppercase text-silver">
              The Implementation Journey
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            <span className="text-white">How We Work —</span>{" "}
            <span className="text-silver-shine">Six Phases to Transformation</span>
          </h2>

          <p className="text-lg text-silver-bright/70 leading-relaxed">
            A structured, repeatable engagement model that takes you from raw vision to
            continuously optimized operation. Each phase has clear inputs, deliverables,
            and exit criteria — no ambiguity, no scope drift.
          </p>

          <div className="metallic-divider w-32 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="mt-20 relative">
          {/* Vertical line for mobile / horizontal for desktop */}
          <div className="hidden lg:block absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent" />

          <div className="grid lg:grid-cols-6 gap-8 lg:gap-4">
            {PHASES.map((phase, idx) => {
              const Icon = phase.icon;
              const isSilver = phase.accent === "silver";
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Node */}
                  <div className="relative flex items-center justify-center mb-6">
                    <div
                      className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                        isSilver
                          ? "bg-gradient-to-br from-zinc-800 to-zinc-950 border border-silver/30"
                          : "bg-gradient-to-br from-silver via-zinc-300 to-zinc-500 border border-white/30"
                      }`}
                    >
                      <div
                        className={`absolute inset-0 rounded-full blur-xl opacity-50 ${
                          isSilver ? "bg-silver/20" : "bg-white/20"
                        }`}
                      />
                      <Icon
                        className={`relative h-9 w-9 ${
                          isSilver ? "text-silver-bright" : "text-black"
                        }`}
                      />
                      {/* Phase number badge */}
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-black border border-silver/40 flex items-center justify-center">
                        <span className="text-xs font-mono font-bold text-silver-bright">
                          {phase.id}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center px-2">
                    <h3
                      className={`text-base sm:text-lg font-semibold mb-3 leading-tight ${
                        isSilver ? "text-silver-bright" : "text-white"
                      }`}
                    >
                      {phase.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-silver-bright/60 leading-relaxed">
                      {phase.body}
                    </p>
                  </div>

                  {/* Connector arrow (desktop) */}
                  {idx < PHASES.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-2 w-4 h-4 z-10">
                      <div className="w-2 h-2 rounded-full bg-silver-bright glow-silver" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-silver-dim">
            <span className="text-silver-bright/80 font-medium">Phase 6 never ends.</span>{" "}
            Continuous optimization is a perpetual engagement — we keep refining your
            operation as long as we&apos;re your partner.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
