import { useEffect, useState } from "react";
import CardComponent from "../components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import { api } from "../lib/api/axios";
import { eventModel } from "../models/event.model";

type Props = {};

// const events: eventModel[] = [
//   {
//     imageUrl: "https://cdn.evg.gov.br/cursos/697_EVG/imagem_curso_697.png",
//     title: "Proteção e Defesa Civil: Atuação no Âmbito Municipal - Curso 2",
//     location: "Online",
//     date: "31/08/2024",
//     type: "treinamento",
//   },
//   {
//     imageUrl: "https://cdn.evg.gov.br/cursos/842_EVG/imagem_curso_842.jpg",
//     title: "GIRD+10: Gestão Integrada de Riscos e Desastres",
//     location: "Online",
//     date: "31/08/2024",
//     type: "treinamento",
//   },
//   {
//     imageUrl: "https://cdn.evg.gov.br/cursos/505_EVG/imagem_curso_505.png",
//     title: " Proteção e Defesa Civil: introdução à Política Nacional - Curso 1",
//     location: "Online",
//     date: "31/08/2024",
//     type: "treinamento",
//   },
//   {
//     imageUrl:
//       "https://images02.brasildefato.com.br/33d86c68d6650b75f7537502fa6981fa.webp",
//     title: " Voluntariado em cozinha solidária",
//     location: " Porto Alegre",
//     date: "04/09/2024",
//     type: "multirao",
//   },
// ];

const EventsPage = (props: Props) => {
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
      <Carousel className="w-full">
        <CarouselContent>
          {events.map((eventData) => (
            <CarouselItem className="basis-3/5 lg:basis-1/5">
              <CardComponent
                buttonType="knowMore"
                data={eventData}
              ></CardComponent>
            </CarouselItem>
          ))}
          <CarouselItem className="basis-3/5 lg:basis-1/5">
            <CardComponent buttonType="knowMore"></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/5">
            <CardComponent buttonType="knowMore"></CardComponent>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <h2 className="text-xl w-full font-semibold">Doações</h2>
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem className="basis-3/5 lg:basis-1/5">
            <CardComponent buttonType="knowMore"></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/5">
            <CardComponent buttonType="knowMore"></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/5">
            <CardComponent buttonType="knowMore"></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/5">
            <CardComponent buttonType="knowMore"></CardComponent>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <h2 className="text-xl font-semibold">Simulações</h2>
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          <CarouselItem className="basis-3/5 lg:basis-1/5">
            <CardComponent buttonType="knowMore"></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/5">
            <CardComponent buttonType="knowMore"></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/5">
            <CardComponent buttonType="knowMore"></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/5">
            <CardComponent buttonType="knowMore"></CardComponent>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <h2 className="text-xl font-semibold">Multirão</h2>
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          <CarouselItem className="basis-3/5 lg:basis-1/5">
            <CardComponent buttonType="knowMore"></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/5">
            <CardComponent buttonType="knowMore"></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/5">
            <CardComponent buttonType="knowMore"></CardComponent>
          </CarouselItem>
          <CarouselItem className="basis-3/5 lg:basis-1/5">
            <CardComponent buttonType="knowMore"></CardComponent>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </main>
  );
};

export default EventsPage;
