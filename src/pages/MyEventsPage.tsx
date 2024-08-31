import { useState, useEffect } from "react";
import CardComponent from "../components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import { api } from "../lib/api/axios";
import { eventModel } from "../models/event.model";

const MyEventsPage = () => {
  const [events, setEvents] = useState<(eventModel & { imageUrl: string })[]>(
    []
  );

  useEffect(() => {
    const getEvents = async () => {
      try {
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
      } catch (error) {
        console.error("Erro ao carregar os eventos", error);
      }
    };

    getEvents();
  }, []);

  return (
    <main className="px-4 gap-4 flex flex-col mb-24">
      <h1 className="text-3xl font-bold">Meus Eventos</h1>
      <Carousel className="w-full min-h-72 max-w-sm">
        <CarouselContent>
          {events.map((eventData) => {
            if (!eventData.isRegistered) return null;
            if (eventData.done) return null;
            return (
              <CarouselItem key={eventData.event_id} className="basis-3/5 lg:basis-1/3">
                <CardComponent buttonType="knowMore" data={eventData} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <h2 className="text-xl font-semibold">Eventos Anteriores</h2>
      {events.map((eventData) => {
        if (!eventData.isRegistered) return null;
        if (!eventData.done) return null;
        return <CardComponent key={eventData.event_id} buttonType="knowMore" data={eventData} />;
      })}
    </main>
  );
};

export default MyEventsPage;
