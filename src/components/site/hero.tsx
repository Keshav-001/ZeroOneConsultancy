"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Activity, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Animated background layers */}
      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-60" />
      <div className="aurora bg-silver-deep/40 w-[600px] h-[600px] -top-40 -left-40 float-slow" />
      <div className="aurora bg-zinc-500/30 w-[500px] h-[500px] top-1/3 right-0 float-medium" />
      <div className="aurora bg-silver/20 w-[400px] h-[400px] bottom-0 left-1/3 float-slow" />

      {/* Corner accent lines */}
      <div className="absolute top-24 left-0 w-px h-32 bg-gradient-to-b from-transparent via-silver/40 to-transparent" />
      <div className="absolute top-24 right-0 w-px h-32 bg-gradient-to-b from-transparent via-silver/40 to-transparent" />
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-silver/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-silver/20 bg-white/5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-silver opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-silver-bright" />
              </span>
              <span className="text-xs font-medium tracking-wider uppercase text-silver-bright/90">
                Always On — Healthcare Enterprise Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              <span className="block text-white">End-to-End</span>
              <span className="block text-silver-shine">Business Solutions</span>
              <span className="block text-white/90 text-3xl sm:text-4xl lg:text-5xl mt-3 font-semibold">
                for Healthcare Enterprises
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg sm:text-xl text-silver-bright/80 leading-relaxed max-w-2xl"
            >
              From regulatory compliance to revenue growth — we&apos;re your complete
              implementation partner.
              <span className="block mt-2 text-silver-dim text-base">
                We don&apos;t just advise. We execute. Over 20 years of expertise across
                healthcare setup, IT infrastructure, financial compliance, digital marketing,
                and strategic optimization.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-zinc-100 via-silver to-zinc-400 text-black font-semibold btn-shimmer hover:glow-silver-strong transition-all"
              >
                Schedule a Strategic Consultation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-silver/30 text-white font-medium hover:bg-white/5 hover:border-silver/50 transition-all"
              >
                Explore Service Verticals
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t border-white/5"
            >
              {[
                { icon: Activity, label: "One Partner" },
                { icon: Sparkles, label: "Complete Transformation" },
                { icon: ShieldCheck, label: "Zero Compliance Failures" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-silver-bright/70">
                  <Icon className="h-4 w-4 text-silver" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual - animated orbital graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <HeroOrbital />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroOrbital() {
  return (
    <div className="relative aspect-square max-w-md mx-auto">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-silver/5 blur-3xl" />

      {/* Concentric rings */}
      <div className="absolute inset-0 rounded-full border border-silver/15" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border border-silver/20"
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-silver-bright glow-silver" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10 rounded-full border border-silver/25"
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-silver" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-silver-dim" />
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-20 rounded-full border border-silver/30 border-dashed"
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-silver-bright" />
      </motion.div>

      {/* Central core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-28 h-28 rounded-full bg-gradient-to-br from-white via-silver to-zinc-600 flex items-center justify-center glow-silver-strong"
        >
          <img
            src="/logo.png"
            alt="Zero One Consultancy"
            className="w-20 h-20 object-contain rounded-full"
          />
          <div className="absolute inset-0 rounded-full ring-1 ring-white/20" />
        </motion.div>
      </div>

      {/* Floating service tags */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 -left-4 px-3 py-1.5 rounded-lg glass-card text-xs text-silver-bright/90 font-medium"
      >
        IT & SaaS
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 -right-4 px-3 py-1.5 rounded-lg glass-card text-xs text-silver-bright/90 font-medium"
      >
        Compliance
      </motion.div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/2 -right-8 px-3 py-1.5 rounded-lg glass-card text-xs text-silver-bright/90 font-medium"
      >
        Marketing
      </motion.div>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute -bottom-2 left-8 px-3 py-1.5 rounded-lg glass-card text-xs text-silver-bright/90 font-medium"
      >
        Healthcare Setup
      </motion.div>
    </div>
  );
}
