import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";

const reviews = [
  {
    name: "AI Automation",
    username: "@tech",
    body: "Transform your business with intelligent process automation",
    img: "./images/img1.png",
  },
  {
    name: "AR Experience",
    username: "@innovation",
    body: "Immersive augmented reality solutions for modern businesses",
    img: "./images/img2.png",
  },
  {
    name: "Data Insights",
    username: "@analytics",
    body: "AI-driven analytics for real-time business intelligence",
    img: "./images/img3.png",
  },
  {
    name: "Data Insights",
    username: "@analytics",
    body: "AI-driven analytics for real-time business intelligence",
    img: "./images/img4.png",
  },
  {
    name: "Data Insights",
    username: "@analytics",
    body: "AI-driven analytics for real-time business intelligence",
    img: "./images/img5.png",
  },
  {
    name: "Data Insights",
    username: "@analytics",
    body: "AI-driven analytics for real-time business intelligence",
    img: "./images/img6.png",
  },
];

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s] w-full px-0">
        {reviews.map((review, index) => (
          // ... existing code ...
          <div key={index} className="relative mx-4 h-[250px] w-[400px] overflow-hidden rounded-xl">
            <img
              src={review.img}
              alt={review.name}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    
    </div>
  );
}