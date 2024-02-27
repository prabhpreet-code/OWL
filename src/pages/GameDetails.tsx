import React, { useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import GameDetails from "@/components/Detailpanel/GameDetails";
import TextSection from "@/components/Detailpanel/TextSection";
import Footer from "@/components/Home/Footer";
import { SkeletonCard } from "@/components/common/SkeletonCard";
import { getRecommendations } from "@/api/getRecommendations";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useGetVideos } from "@/hooks/useGetVideos";
import Games from "@/components/Marketplace/Games";
import { useGetDetails } from "@/hooks/useGetDetails";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export type DetailType = {
  id: number;
  name: string;
  similar_games: number[];
  screenshots: [
    {
      id: number;
      url: string;
    }
  ];
  cover: {
    id: number;
    url: string;
  };
  videos: number;
  summary: string;
  release_dates: [
    {
      date: number;
      id: number;
    }
  ];
  rating: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
};

export function GameDetailsPage() {
  const { id } = useParams();

  const detailsResponse = useGetDetails(id);
  console.log(detailsResponse);

  const videoResponse = useGetVideos(id);

  const { data: similarGames } = useQuery(
    ["similar-game", { gameId: id }],
    () => getRecommendations(detailsResponse?.data[0].similar_games),
    {
      enabled: !detailsResponse?.isLoading,
    }
  );
  const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));

  // for (let i = 0; i < similarGames?.length; i++) {
  //   const newArray = [...group, similarGames.slice(i, 4)];
  //   setGroup(newArray);
  //   console.log(group);
  // }

  return (
    <section className="flex flex-col mb-20">
      <div className="px-2 py-4 flex mb-5 justify-center flex-col sm:px-30 md:px-10">
        <Navbar />
        {detailsResponse?.isLoading || videoResponse?.isLoading ? (
          <SkeletonCard />
        ) : (
          <div>
            <GameDetails
              data={detailsResponse?.data[0]}
              video={videoResponse?.videoRef}
            />
            <TextSection summary={detailsResponse?.data[0].summary} />
          </div>
        )}
      </div>

      <div className="px-2 flex mb-20 justify-center overflow-hidden flex-col sm:px-60 ">
        <div className=" gap-5 ">
          <Carousel
            plugins={[plugin.current]}
            className=" bg-inherit text-primary overflow-hidden"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className={`flex flex-1 gap-x-20 h-96`}>
              {similarGames?.map(
                (
                  element: {
                    id: number;
                    cover: { url: string };
                    name: string;
                    rating: number;
                    genres: { name: any }[];
                    release_dates: { date: number }[];
                    summary: string;
                  },
                  index: React.Key | null | undefined
                ) => (
                  
                    <Games
                      key={index}
                      index={element.id}
                      url={element.cover.url}
                      name={element.name}
                      rating={element.rating}
                      genres={element?.genres
                        .map((genre: { name: any }) => genre.name)
                        .join(", ")}
                      releaseDate={element.release_dates[0].date}
                      summary={element.summary}
                      className={"w-[300px]"}
                    />
                
                )
              )}
            </CarouselContent>
            <CarouselPrevious className="bg-inherit" variant="default" />
            <CarouselNext className="bg-inherit" variant="default" />
          </Carousel>
        </div>
      </div>
      <Footer />
    </section>
  );
}
