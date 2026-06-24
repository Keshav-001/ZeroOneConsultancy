"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  LayoutGrid,
  FileCheck,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Check,
} from "lucide-react";

const CTAS = [
  {
    icon: Calendar,
    label: "Primary CTA",
    title: "Ready to Transform Your Healthcare Business?",
    body: "Schedule a strategic consultation with our leadership team. We'll audit your current operation, identify quick wins, and outline a phased transformation roadmap tailored to your specific context — at no cost.",
    button: "Schedule a Strategic Consultation",
    href: "#contact",
    variant: "primary",
  },
  {
    icon: LayoutGrid,
    label: "Secondary CTA",
    title: "Explore Our Service Verticals in Detail",
    body: "Each pillar is a complete vertical with dedicated specialists. Review the scope, deliverables, and impact of each — and decide which combination fits your current priorities.",
    button: "View Detailed Service Offerings",
    href: "#services",
    variant: "secondary",
  },
  {
    icon: FileCheck,
    label: "Tertiary CTA",
    title: "Download: Healthcare Business Transformation Checklist",
    body: "A free 24-point checklist covering every operational, regulatory, technological, and marketing dimension you need to validate before scaling your healthcare business.",
    button: "Get Your Free Checklist",
    href: "#contact",
    variant: "tertiary",
  },
];

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-25" />
      <div className="aurora bg-silver-deep/30 w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center space-y-6 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-silver/20 bg-white/5">
            <span className="text-xs font-medium tracking-wider uppercase text-silver">
              Take the Next Step
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            <span className="text-white">Let&apos;s Accelerate Your</span>{" "}
            <span className="text-silver-shine">Business Growth</span>
          </h2>

          <p className="text-lg text-silver-bright/70 leading-relaxed">
            Three ways to engage, depending on where you are in your journey. Pick the
            one that fits — or reach out directly and we&apos;ll guide you to the right
            starting point.
          </p>
        </motion.div>

        {/* CTA cards */}
        <div className="grid lg:grid-cols-3 gap-5 mb-20">
          {CTAS.map((cta, idx) => {
            const Icon = cta.icon;
            return (
              <motion.div
                key={cta.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group relative p-7 rounded-2xl overflow-hidden transition-all duration-500 ${
                  cta.variant === "primary"
                    ? "bg-gradient-to-br from-zinc-100 via-silver to-zinc-400 text-black"
                    : cta.variant === "secondary"
                    ? "glass-card glass-card-hover"
                    : "border-2 border-silver/30 bg-transparent hover:bg-white/[0.03]"
                }`}
              >
                {/* Decorative element for primary */}
                {cta.variant === "primary" && (
                  <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/20 blur-2xl" />
                )}

                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        cta.variant === "primary"
                          ? "bg-black/10 border border-black/20"
                          : "bg-gradient-to-br from-zinc-700 to-zinc-900 border border-silver/20"
                      }`}
                    >
                      <Icon
                        className={`h-6 w-6 ${
                          cta.variant === "primary" ? "text-black" : "text-silver-bright"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider ${
                        cta.variant === "primary" ? "text-black/60" : "text-silver-dim"
                      }`}
                    >
                      {cta.label}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-semibold mb-3 leading-tight ${
                      cta.variant === "primary" ? "text-black" : "text-white"
                    }`}
                  >
                    {cta.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      cta.variant === "primary" ? "text-black/70" : "text-silver-bright/60"
                    }`}
                  >
                    {cta.body}
                  </p>

                  <a
                    href={cta.href}
                    className={`group/btn inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-all btn-shimmer ${
                      cta.variant === "primary"
                        ? "bg-black text-white hover:bg-zinc-800"
                        : cta.variant === "secondary"
                        ? "bg-gradient-to-r from-zinc-700 to-zinc-800 text-white hover:from-zinc-600 hover:to-zinc-700 border border-white/10"
                        : "border border-silver/40 text-white hover:bg-silver/10"
                    }`}
                  >
                    {cta.button}
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact form section */}
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build a mailto link so the user's mail client handles the message.
    const subject = encodeURIComponent(
      `Strategic Consultation Request — ${form.name || "New Inquiry"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:Keshav@ZeroOneConsultancy.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="grid lg:grid-cols-12 gap-8 glass-card rounded-3xl p-8 sm:p-12"
    >
      {/* Left: contact info */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-silver/20 bg-white/5 mb-4">
            <span className="text-xs font-medium tracking-wider uppercase text-silver">
              Direct Contact
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            Let&apos;s discuss how we can accelerate your business growth.
          </h3>
          <p className="mt-4 text-silver-bright/70 leading-relaxed">
            One partner. Complete transformation. From facility setup to financial
            compliance to revenue growth — we handle it all. Reach out and we&apos;ll
            respond within one business day.
          </p>
        </div>

        <div className="space-y-3">
          <a
            href="mailto:Keshav@ZeroOneConsultancy.com"
            className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-silver/20 hover:bg-white/[0.04] transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-900 border border-silver/20 flex items-center justify-center group-hover:border-silver/40 transition-colors">
              <Mail className="h-5 w-5 text-silver-bright" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-silver-dim">Email</div>
              <div className="text-sm font-medium text-white">
                Keshav@ZeroOneConsultancy.com
              </div>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-900 border border-silver/20 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-silver-bright" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-silver-dim">
                Coverage
              </div>
              <div className="text-sm font-medium text-white">Pan-India Healthcare</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-900 border border-silver/20 flex items-center justify-center">
              <Phone className="h-5 w-5 text-silver-bright" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-silver-dim">
                Response Time
              </div>
              <div className="text-sm font-medium text-white">Within 1 Business Day</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: form */}
      <div className="lg:col-span-7">
        {submitted ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-gradient-to-br from-silver/10 to-transparent border border-silver/20">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-silver to-zinc-500 flex items-center justify-center mb-5 glow-silver">
              <Check className="h-8 w-8 text-black" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">Thank You</h4>
            <p className="text-silver-bright/70 max-w-sm">
              Your email client should now be open with your message pre-filled. If it
              didn&apos;t open, please email us directly at{" "}
              <a
                href="mailto:Keshav@ZeroOneConsultancy.com"
                className="text-silver-bright underline"
              >
                Keshav@ZeroOneConsultancy.com
              </a>
              .
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm text-silver-dim hover:text-silver-bright transition-colors"
            >
              ← Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-silver-dim mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-silver-dim focus:border-silver/40 focus:outline-none focus:ring-1 focus:ring-silver/30 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-silver-dim mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-silver-dim focus:border-silver/40 focus:outline-none focus:ring-1 focus:ring-silver/30 transition-all"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-silver-dim mb-2">
                Company / Organization
              </label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-silver-dim focus:border-silver/40 focus:outline-none focus:ring-1 focus:ring-silver/30 transition-all"
                placeholder="Your healthcare organization"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-silver-dim mb-2">
                Message *
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-silver-dim focus:border-silver/40 focus:outline-none focus:ring-1 focus:ring-silver/30 transition-all resize-none"
                placeholder="Tell us about your operation, your goals, and where you'd like to start..."
              />
            </div>

            <button
              type="submit"
              className="w-full group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-gradient-to-r from-zinc-100 via-silver to-zinc-400 text-black font-semibold btn-shimmer hover:glow-silver-strong transition-all"
            >
              Send Message
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-xs text-silver-dim text-center">
              By submitting, you agree to be contacted by Zero One Consultancy regarding
              your inquiry. We respect your privacy and never share your information.
            </p>
          </form>
        )}
      </div>
    </motion.div>
  );
}
