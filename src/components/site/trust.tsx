"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Building2, Server, ShieldCheck, Users } from "lucide-react";

const STATS = [
  {
    icon: Award,
    value: 20,
    suffix: "+",
    label: "Years of Industry Experience",
    description:
      "Two decades of healthcare-specific implementation across India — covering every regulatory regime, every operational model, every growth stage.",
  },
  {
    icon: Building2,
    value: 100,
    suffix: "+",
    label: "Healthcare Facilities Implemented",
    description:
      "Hospitals, clinics, pharmacies, and diagnostic chains — from greenfield setups to multi-location operational rollouts.",
  },
  {
    icon: Server,
    value: 1,
    suffix: "",
    label: "Unified Software Platform",
    description:
      "Running daily operations for enterprise clients — a single SaaS backbone handling appointments, billing, clinical, pharmacy, and communication.",
  },
  {
    icon: ShieldCheck,
    value: 0,
    suffix: "",
    label: "Compliance Failures",
    description:
      "Zero compliance failures across all implementations — every regulatory filing, every audit, every certification, on time and on spec.",
  },
  {
    icon: Users,
    value: 100,
    suffix: "%",
    label: "Dedicated Implementation Teams",
    description:
      "Not outsourced. Your success is our focus — every engagement is staffed by full-time Zero One Consultancy experts, accountable end-to-end.",
  },
];

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) frame = requestAnimationFrame(animate);
      else setCount(end);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, end]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Trust() {
  return (
    <section id="trust" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-25" />
      <div className="aurora bg-zinc-500/20 w-[500px] h-[500px] top-1/4 left-1/4" />

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
              Trust Signals & Credibility
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            <span className="text-white">Trusted by</span>{" "}
            <span className="text-silver-shine">Healthcare Leaders</span>
          </h2>

          <p className="text-lg text-silver-bright/70 leading-relaxed">
            Two decades of execution. Hundreds of implementations. A compliance record
            without blemish. These are not aspirations — they are the earned credentials of
            a partner who has been doing this longer than most healthcare operators have
            been in business.
          </p>

          <div className="metallic-divider w-32 mx-auto" />
        </motion.div>

        {/* Stats grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative p-6 rounded-2xl glass-card glass-card-hover text-center overflow-hidden"
              >
                {/* Decorative number */}
                <div className="absolute -top-6 -right-2 text-7xl font-bold font-mono text-silver/5 group-hover:text-silver/10 transition-colors">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div className="relative">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 border border-silver/20 flex items-center justify-center mb-4 group-hover:border-silver/40 transition-colors">
                    <Icon className="h-6 w-6 text-silver-bright" />
                  </div>

                  <div className="text-4xl sm:text-5xl font-bold text-silver-shine counter-glow mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>

                  <h3 className="text-sm font-semibold text-white mb-3 leading-snug min-h-[2.5rem] flex items-center justify-center">
                    {stat.label}
                  </h3>

                  <p className="text-xs text-silver-bright/60 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom credibility strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-6 p-5 rounded-2xl border border-silver/10 bg-white/[0.02]"
        >
          {[
            "Hospital Registration Certified",
            "Healthcare Compliance Specialist",
            "Data Security Certified",
            "TDS / PT / ESI / Gratuity Filing",
            "Unified SaaS Provider",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-silver/10"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-silver-bright glow-silver" />
              <span className="text-xs text-silver-bright/70 font-medium">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
