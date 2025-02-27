"use client"

import { Button } from "@/components/ui/button"
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CTA() {
  useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"15-min-intro-call"});
		cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
  return (
    <section id="cta" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-r from-primary to-primary-foreground rounded-lg shadow-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Build the Future?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join Nexverse today and start creating intelligent AI agents that will shape tomorrow's technology.
          </p>
          <Button data-cal-namespace="15-min-intro-call"
	  data-cal-link="rio-waec3n/15-min-intro-call"
    
	  data-cal-config='{"layout":"month_view"}' size="lg" variant="secondary" className="font-semibold">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  )
}