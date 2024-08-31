import { useEffect, useState } from "react";
import CardComponent from "../components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import { api } from "../lib/api/axios";
import { eventModel } from "../models/event.model";

const EventsPage = () => {
  const getEvents = async () => {
    const response: { events: eventModel[] } = await api
      .get(
        "https://backend-wheat-alpha-40.vercel.app/event/cm0id8ri30000jw23bip7y6tu"
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

  const [events, setEvents] = useState<(eventModel & { imageUrl: string })[]>(
    []
  );

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <main className="px-4 gap-4 flex flex-col mb-24 w-full">
      <h1 className="text-3xl font-bold">Eventos Disponíveis</h1>
      <h2 className="text-xl font-semibold">Treinamento</h2>
      <Carousel className="w-full min-h-72">
        <CarouselContent>
          {events.map((eventData) => {
            if (!(eventData.type === "treinamento")) return;
            return (
              <CarouselItem className="basis-3/5 lg:basis-1/5">
                <CardComponent buttonType="knowMore" data={eventData} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <h2 className="text-xl w-full font-semibold">Doações</h2>
      <Carousel className="w-full min-h-72">
        <CarouselContent>
          {events.map((eventData) => {
            if (!(eventData.type === "doação")) return;
            return (
              <CarouselItem className="basis-3/5 lg:basis-1/5">
                <CardComponent buttonType="knowMore" data={eventData} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <h2 className="text-xl font-semibold">Simulações</h2>
      <Carousel className="w-full  min-h-72">
        <CarouselContent>
          {events.map((eventData) => {
            if (!(eventData.type === "simulação")) return;
            return (
              <CarouselItem className="basis-3/5 lg:basis-1/3">
                <CardComponent buttonType="knowMore" data={eventData} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <h2 className="text-xl font-semibold">Multirão</h2>
      <Carousel className="w-full min-h-72">
        <CarouselContent>
          {events.map((eventData) => {
            if (!(eventData.type === "mutirão")) return;
            return (
              <CarouselItem className="basis-3/5 lg:basis-1/3">
                <CardComponent buttonType="knowMore" data={eventData} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </main>
  );
};

export default EventsPage;
