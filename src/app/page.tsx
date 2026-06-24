"use client";

import Navigation from "@/components/site/navigation";
import Hero from "@/components/site/hero";
import MarqueeStrip from "@/components/site/marquee-strip";
import ValueProposition from "@/components/site/value-proposition";
import Services from "@/components/site/services";
import Advantage from "@/components/site/advantage";
import Journey from "@/components/site/journey";
import Differentiators from "@/components/site/differentiators";
import Trust from "@/components/site/trust";
import CTA from "@/components/site/cta";
import Footer from "@/components/site/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <MarqueeStrip />
        <ValueProposition />
        <Services />
        <Advantage />
        <Journey />
        <Differentiators />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
