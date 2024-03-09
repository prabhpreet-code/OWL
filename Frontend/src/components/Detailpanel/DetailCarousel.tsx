import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import ReactPlayer from "react-player";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin({ array, link }: { array: any[]; link: any[] }) {
  const plugin = useRef(Autoplay({ delay: 20000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full bg-inherit text-primary"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {link?.map((element, index) => (
          <CarouselItem key={index}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${element.video_id}`}
              controls={true}
              playing={index == 0 ? true : false}
              muted={true}
              style={{ objectFit: "fill", width: "100%", height: "500px" }}
            />
          </CarouselItem>
        ))}
        {array?.map(
          (element: { url: string }, index: React.Key | null | undefined) => (
            <CarouselItem key={index} className="pl-6 text-white">
              <img
                src={`${element.url.replace("thumb", "1080p")}`}
                className="object-cover aspect-video"
              />
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselPrevious className="bg-inherit" variant="default" />
      <CarouselNext className="bg-inherit" variant="default" />
    </Carousel>
  );
}
