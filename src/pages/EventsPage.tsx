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
        `https://backend-wheat-alpha-40.vercel.app/event/${localStorage.getItem(
          "id"
        )}`
      )
      .then((response: { data: { events: eventModel[] } }) => response.data);

    const eventsWithImage = response.events;

    setEvents(eventsWithImage);
    console.log(response);
  };

  const [events, setEvents] = useState<eventModel[]>([]);

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
            if (eventData.done) return;
            if (eventData.isRegistered) return;
            return (
              <CarouselItem className="basis-3/5 lg:basis-1/5">
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
            if (eventData.done) return;
            if (eventData.isRegistered) return;
            return (
              <CarouselItem className="basis-3/5 lg:basis-1/3">
                <CardComponent buttonType="knowMore" data={eventData} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      {/* <h2 className="text-xl w-full font-semibold">Doações</h2>
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
      </Carousel> */}
    </main>
  );
};

export default EventsPage;
