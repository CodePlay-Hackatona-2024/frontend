import React from "react";
import CardComponent from "../components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Card, CardContent } from "../components/ui/card";

type Props = {};

const EventsPage = (props: Props) => {
  return (
    <main className="px-4 gap-4 flex flex-col mb-24">
      <h1 className="text-3xl font-bold">Eventos Disponíveis</h1>
      <h2 className="text-xl font-semibold">Treinamento</h2>
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          <CarouselItem className="basis-3/5 lg:basis-1/3">
            <CardComponent></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/3">
            <CardComponent></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/3">
            <CardComponent></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/3">
            <CardComponent></CardComponent>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <h2 className="text-xl font-semibold">Doações</h2>
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          <CarouselItem className="basis-3/5 lg:basis-1/3">
            <CardComponent></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/3">
            <CardComponent></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/3">
            <CardComponent></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/3">
            <CardComponent></CardComponent>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <h2 className="text-xl font-semibold">Simulações</h2>
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          <CarouselItem className="basis-3/5 lg:basis-1/3">
            <CardComponent></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/3">
            <CardComponent></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/3">
            <CardComponent></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/3">
            <CardComponent></CardComponent>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <h2 className="text-xl font-semibold">Multirão</h2>
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          <CarouselItem className="basis-3/5 lg:basis-1/3">
            <CardComponent></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/3">
            <CardComponent></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/3">
            <CardComponent></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/3">
            <CardComponent></CardComponent>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </main>
  );
};

export default EventsPage;
