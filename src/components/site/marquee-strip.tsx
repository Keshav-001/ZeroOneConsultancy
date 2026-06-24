"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "Hospital Registration",
  "Regulatory Compliance",
  "Unified SaaS Platform",
  "HR & Payroll Automation",
  "TDS / PT / ESI / Gratuity",
  "Brand Identity & Design",
  "SEO & Digital Marketing",
  "WhatsApp Campaigns",
  "BI Dashboards",
  "Operational Audits",
  "Vendor Protocols",
  "Asset Management",
  "Clinical Modules",
  "Pharmacy Systems",
  "Ticket Management",
  "Email Infrastructure",
];

export default function MarqueeStrip() {
  return (
    <div className="relative py-6 border-y border-white/5 overflow-hidden bg-black/40">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...ITEMS, ...ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-sm font-medium text-silver-bright/40 hover:text-silver-bright transition-colors">
              {item}
            </span>
            <span className="text-silver/30">◆</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
