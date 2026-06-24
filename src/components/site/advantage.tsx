"use client";

import { motion } from "framer-motion";
import {
  Network,
  PiggyBank,
  Handshake,
  Stethoscope,
  Maximize2,
} from "lucide-react";

const ADVANTAGES = [
  {
    id: "01",
    icon: Network,
    title: "Elimination of Coordination Chaos",
    body: "You don't manage 5 vendors arguing with each other. You have one strategic partner who owns your entire operational ecosystem. Your infrastructure talks to your software, which connects to your marketing, which feeds your financial compliance — seamlessly. Every dependency is internal, every interface is pre-built, every handoff is invisible to you.",
    metric: "5 vendors → 1 partner",
  },
  {
    id: "02",
    icon: PiggyBank,
    title: "Cost Efficiency Through Integration",
    body: "No redundant overlaps. No miscommunication between teams. No duplicated effort across disconnected vendors. Our unified approach reduces costs by 30–40% compared to piecing together separate vendors — and that figure compounds as your operations scale and the integration advantage widens.",
    metric: "30–40% cost reduction",
  },
  {
    id: "03",
    icon: Handshake,
    title: "Long-Term Revenue Partnership",
    body: "We succeed when you succeed. Because our software, infrastructure, and services are integrated, we're incentivized to optimize your entire business — not just extract consulting fees. Our revenue is tied to your operational continuity, which fundamentally aligns incentives toward durable value creation rather than short-term engagements.",
    metric: "Aligned incentives",
  },
  {
    id: "04",
    icon: Stethoscope,
    title: "Healthcare Specialization",
    body: "20 years of experience navigating India's healthcare regulations, licensing requirements, and operational complexities. We've done this hundreds of times across clinics, hospitals, pharmacies, and diagnostic chains. You won't discover surprises mid-implementation — every regulatory curveball is already mapped to a pre-tested playbook.",
    metric: "20+ years deep expertise",
  },
  {
    id: "05",
    icon: Maximize2,
    title: "Scalability Built-In",
    body: "As your business grows from 1 clinic to 10, our unified systems scale with you. No rip-and-replace. No vendor shopping. No retraining. Just seamless growth — the same platform, the same compliance engine, the same marketing infrastructure, all designed from day one to absorb expansion without operational disruption.",
    metric: "1 → 10+ locations",
  },
];

export default function Advantage() {
  return (
    <section id="advantage" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-20" />
      <div className="aurora bg-zinc-500/20 w-[600px] h-[600px] -bottom-40 -right-40 float-slow" />

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
              The Integrated Advantage
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            <span className="text-white">Most agencies do one thing.</span>
            <br />
            <span className="text-silver-shine">We do everything.</span>
          </h2>

          <p className="text-lg text-silver-bright/70 leading-relaxed">
            Here&apos;s why that matters: when a single partner owns your entire operational
            ecosystem, the friction between functions disappears. Decisions move faster,
            costs shrink, and the system becomes greater than the sum of its parts.
          </p>
        </motion.div>

        {/* Advantages list */}
        <div className="mt-16 space-y-4">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group relative grid lg:grid-cols-12 gap-6 p-6 sm:p-8 rounded-2xl glass-card glass-card-hover overflow-hidden"
              >
                {/* Index + Icon column */}
                <div className="lg:col-span-3 flex lg:flex-col items-start gap-4">
                  <div className="text-5xl sm:text-6xl font-bold font-mono text-silver/20 group-hover:text-silver/40 transition-colors leading-none">
                    {adv.id}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 border border-silver/20 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-silver-bright" />
                  </div>
                </div>

                {/* Content column */}
                <div className="lg:col-span-7 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-silver-shine transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-silver-bright/70 leading-relaxed text-[15px]">
                    {adv.body}
                  </p>
                </div>

                {/* Metric column */}
                <div className="lg:col-span-2 flex lg:flex-col items-start lg:items-end justify-start gap-2">
                  <div className="px-3 py-2 rounded-lg bg-silver/10 border border-silver/20">
                    <div className="text-xs uppercase tracking-wider text-silver-dim mb-0.5">
                      Impact
                    </div>
                    <div className="text-sm font-semibold text-white whitespace-nowrap">
                      {adv.metric}
                    </div>
                  </div>
                </div>

                {/* Bottom border accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
