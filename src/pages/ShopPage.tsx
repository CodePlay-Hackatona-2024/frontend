import React from "react";
import CardComponent from "../components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";

type Props = {};

const ShopPage = (props: Props) => {
  return (
    <main className="px-4 gap-4 flex flex-col mb-24">
      <h1 className="text-3xl font-bold">Loja</h1>
      <h2 className="text-xl font-semibold">Produtos</h2>
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
        </CarouselContent>
      </Carousel>
      <h2 className="text-xl font-semibold">Cupons</h2>

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

export default ShopPage;
