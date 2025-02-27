import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
import { RetroGrid } from '@/components/ui/retro-grid'
import { AnimatedBeamMultipleOutputDemo } from '@/components/animated-beams'
import { ParticlesDemo } from '@/components/particlesb'
import { AnimatedListDemo } from '@/components/animated-list-demo'
import { Marquee3D } from '@/components/test-marquee'
import {MarqueeDemo} from "@/components/marquee-logo"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <Header />
      <main className="flex-grow">
        <RetroGrid />
        <Hero />
        <ParticlesDemo/>
        <div className="flex flex-col md:flex-row gap-4">
          <AnimatedListDemo />
          <AnimatedBeamMultipleOutputDemo/>
        </div>
        <MarqueeDemo/>
        <Features />
        <Marquee3D/>
        <CTA />
      </main>
      <Footer />
    </div>
  )
}