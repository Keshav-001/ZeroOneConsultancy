"use client";

import { motion } from "framer-motion";
import { Layers, Cpu, Workflow, TrendingUp } from "lucide-react";

const PILLARS = [
  {
    icon: Layers,
    title: "Specialized Implementation",
    description:
      "Deep healthcare domain expertise applied across every operational layer — from facility licensing to clinical workflow design and physical infrastructure deployment.",
  },
  {
    icon: Cpu,
    title: "Unified Software Solutions",
    description:
      "One integrated SaaS backbone powers appointments, billing, clinical modules, pharmacy, internal chat, ticket management, and email infrastructure — no integrations to maintain.",
  },
  {
    icon: Workflow,
    title: "Operational Automation",
    description:
      "HR, payroll, attendance tracking, TDS/PT/ESI/gratuity filing, and financial compliance — fully automated and continuously monitored by dedicated teams that own the outcome.",
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description:
      "Brand identity, website SEO, organic + paid campaigns, WhatsApp outreach, and lead management — engineered as a consistent client acquisition pipeline that scales predictably.",
  },
];

export default function ValueProposition() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-silver/20 bg-white/5">
            <span className="text-xs font-medium tracking-wider uppercase text-silver">
              Value Proposition
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            <span className="block text-white">We Transform Healthcare Businesses</span>
            <span className="block text-silver-shine mt-2">
              Into High-Performing Enterprises
            </span>
          </h2>

          <p className="text-lg text-silver-bright/70 leading-relaxed">
            By integrating specialized implementation, unified software solutions,
            operational automation, and growth marketing into a single, seamless
            partnership — eliminating complexity, reducing costs, and accelerating revenue.
          </p>

          <div className="metallic-divider w-32 mx-auto" />
        </motion.div>

        {/* Pillars grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-6 group relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-silver/5 group-hover:bg-silver/10 transition-colors" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 border border-silver/20 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-silver-bright" />
                  </div>

                  <div className="text-xs text-silver-dim mb-2 font-mono">
                    0{idx + 1} / 04
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-silver-shine transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-silver-bright/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
