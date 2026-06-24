"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Scale,
  Link2,
  BrainCircuit,
  Target,
} from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: Code2,
    title: "Unified Software Ownership",
    description:
      "We built it. We maintain it. We optimize it. The SaaS platform powering your daily operations is not a third-party tool we resell — it is our own product, evolved over years of healthcare-specific deployment, continuously updated based on operational data from every client we serve. Every feature request, every bug, every optimization is handled by the same team that owns your implementation.",
  },
  {
    icon: Scale,
    title: "Regulatory Deep Expertise",
    description:
      "Hospital registration, healthcare compliance, and data security certifications are not peripheral offerings — they are core competencies built across two decades of India-specific healthcare deployments. We maintain active relationships with licensing authorities, track regulatory changes in real time, and translate every new requirement into updated compliance protocols before they affect your operation.",
  },
  {
    icon: Link2,
    title: "Operational Lock-In Model",
    description:
      "Long-term retainer relationships based on genuine value creation, not vendor dependency. Our contracts are structured so that the more value we deliver, the more we earn — and the more efficient your operation becomes, the lower your effective cost. This is the opposite of the typical agency model: we want you to succeed so thoroughly that you would never consider replacing us.",
  },
  {
    icon: BrainCircuit,
    title: "Executive-Level Advisory",
    description:
      "Not just implementation; strategic guidance from seasoned experts. Our leadership team has built, scaled, and exited healthcare businesses — they bring pattern recognition from hundreds of engagements to every strategic decision you face. You are not just buying execution capacity; you are buying access to a brain trust that has navigated every growth stage you will encounter.",
  },
  {
    icon: Target,
    title: "End-to-End Accountability",
    description:
      "One partner responsible for your entire operational transformation. When something breaks at the intersection of infrastructure and software, or between HR compliance and payroll, there is no finger-pointing across vendors. We own the entire stack, end to end, and the resolution path is always internal. This single-throat-to-choke model is the structural advantage that makes true integration possible.",
  },
];

export default function Differentiators() {
  return (
    <section id="expertise" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="aurora bg-silver-deep/20 w-[500px] h-[500px] top-1/3 -right-40 float-medium" />

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
              Our Expertise Differentiators
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            <span className="text-white">What Sets Us Apart</span>
          </h2>

          <p className="text-lg text-silver-bright/70 leading-relaxed">
            Many consultancies can implement pieces. Few can own the whole. These five
            differentiators explain why healthcare enterprises trust us with their
            complete operational transformation — and why that trust compounds over time.
          </p>
        </motion.div>

        {/* Differentiators grid */}
        <div className="mt-16 grid lg:grid-cols-2 gap-5">
          {DIFFERENTIATORS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`group relative p-8 rounded-2xl glass-card glass-card-hover overflow-hidden ${
                  idx === 0 ? "lg:col-span-2" : ""
                }`}
              >
                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-silver/5 rounded-bl-[100px] opacity-50 group-hover:opacity-100 transition-opacity" />

                <div className="relative flex flex-col sm:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 border border-silver/20 flex items-center justify-center group-hover:border-silver/40 transition-colors">
                      <Icon className="h-7 w-7 text-silver-bright" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-mono text-silver-dim">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-xl font-semibold text-white group-hover:text-silver-shine transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-silver-bright/70 leading-relaxed text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
