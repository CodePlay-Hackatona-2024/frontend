import { useState } from "react";
import CardComponent from "../components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import { api } from "../lib/api/axios";
import { eventModel } from "../models/event.model";

type Props = {};

const MyEventsPage = (props: Props) => {
  const [events, setEvents] = useState<(eventModel & { imageUrl: string })[]>(
    []
  );

  const getEvents = async () => {
    const response: { events: eventModel[] } = await api
      .get(
        "https://backend-wheat-alpha-40.vercel.app/event/cm0i89f540002bch62xpvp5pc"
      )
      .then((response: { data: { events: eventModel[] } }) => response.data);

    const eventsWithImage = response.events.map((event) => ({
      ...event,
      imageUrl:
        "https://images02.brasildefato.com.br/33d86c68d6650b75f7537502fa6981fa.webp",
    }));

    setEvents(eventsWithImage);
    console.log(response);
  };

  useState;

  return (
    <main className="px-4 gap-4 flex flex-col mb-24">
      <h1 className="text-3xl font-bold">Meus Eventos</h1>
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          {events.map((eventData) => (
            <CarouselItem className="basis-3/5 lg:basis-1/3">
              <CardComponent buttonType="knowMore" data={eventData} />
            </CarouselItem>
          ))}
          <CarouselItem className="basis-3/5 lg:basis-1/3">
            <CardComponent buttonType="knowMore"></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/3">
            <CardComponent buttonType="knowMore"></CardComponent>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <h2 className="text-xl font-semibold">Eventos Anteriores</h2>
      <CardComponent buttonType="knowMore"></CardComponent>
      <CardComponent buttonType="knowMore"></CardComponent>
      <CardComponent buttonType="knowMore"></CardComponent>
      <CardComponent buttonType="knowMore"></CardComponent>
    </main>
  );
};

export default MyEventsPage;
