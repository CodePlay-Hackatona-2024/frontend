import CardComponent from "../components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import { eventModel } from "../models/event.model";

type Props = {};

const events: eventModel[] = [
  {
    imageUrl: "https://cdn.evg.gov.br/cursos/697_EVG/imagem_curso_697.png",
    title: "Proteção e Defesa Civil: Atuação no Âmbito Municipal - Curso 2",
    location: "Online",
    date: "31/08/2024",
    type: "treinamento",
  },
  {
    imageUrl: "https://cdn.evg.gov.br/cursos/842_EVG/imagem_curso_842.jpg",
    title: "GIRD+10: Gestão Integrada de Riscos e Desastres",
    location: "Online",
    date: "31/08/2024",
    type: "treinamento",
  },
  {
    imageUrl: "https://cdn.evg.gov.br/cursos/505_EVG/imagem_curso_505.png",
    title: " Proteção e Defesa Civil: introdução à Política Nacional - Curso 1",
    location: "Online",
    date: "31/08/2024",
    type: "treinamento",
  },
  {
    imageUrl:
      "https://images02.brasildefato.com.br/33d86c68d6650b75f7537502fa6981fa.webp",
    title: " Voluntariado em cozinha solidária",
    location: " Porto Alegre",
    date: "04/09/2024",
    type: "multirao",
  },
];

const MyEventsPage = (props: Props) => {
  return (
    <main className="px-4 gap-4 flex flex-col mb-24">
      <h1 className="text-3xl font-bold">Meus Eventos</h1>
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          {events.map((eventData) => (
            <CarouselItem className="basis-3/5 lg:basis-1/3">
              <CardComponent
                buttonType="knowMore"
                data={eventData}
              ></CardComponent>
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
