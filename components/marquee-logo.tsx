import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";
import Image from "next/image";

const reviews = [
  {
   
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
  },
  {
    
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  },
  {
   
    img: "https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg",
  },
  {
    
    img: "https://images.seeklogo.com/logo-png/31/1/amazon-web-services-aws-logo-png_seeklogo-319188.png",
  },
  {
    
    img: "https://img.icons8.com/?size=512&id=17949&format=png",
  },
  {
    
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png",
  },
  {
    
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1z0LC70CF3lPE1Xe-Uka4Y5sSlLzrAVHCQg&s",
  },
  {
    
    img: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Google_Ads_icon.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
}: {
  img: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-60 cursor-pointer overflow-hidden ",
        // light styles
    
      )}
    >
      <div className="flex flex-row items-center ">
        <Image src={img} alt="" width={72} height={72} />
      </div>
      
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full py-20 gap-10 flex-col items-center justify-center overflow-hidden">
      <Marquee  className="[--duration:10s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      <Marquee reverse  className="[--duration:10s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      
    </div>
  );
}
