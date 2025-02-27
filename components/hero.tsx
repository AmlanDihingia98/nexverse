import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { ShimmerButton } from "./ui/shimmer-button"
import { MarqueeDemo } from "./marquee-list"


export default function Hero() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="container mx-auto pt-4 max-w-4xl text-center">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
          
          </span>
          Let's Talk About 
          <br />
          Your Next Project
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
        Ready to take your business to the next level? Whether you need a new website, AI automation, or a custom chatbot solution, we're here to help. Get in touch with us to discuss your project today!
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-base font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
              Schedule a call
            </span>
          </ShimmerButton>
        </div>
       
      </div>
      <div className="mt-40 flex justify-center w-full">
          <div className="relative w-full ">
            <MarqueeDemo />
          </div>
        </div>
    </section>
  )
}