import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import image from "../../assets/event-mock.png";
import { Calendar } from "lucide-react";
import { eventModel } from "../../models/event.model";

type buttoType = "subscribe" | "validate" | "knowMore";

type Props = {
  buttonType: buttoType;
  data?: eventModel & { imageUrl: string };
};

const CardComponent = ({ buttonType: type, data }: Props) => {
  const handleClick = () => {
    if (type === "subscribe") {
      console.log(" call handle subscribe");
    } else if (type === "validate") {
      console.log(" call handle validate");
    }
  };

  if (!data)
    return (
      <Card
        className={`flex flex-col w-1/1 h-1/1 p-4 h-full justify justify-between`}
      >
        <img
          src={image}
          alt="Imagem Evento"
          className="w-full h-28 object-cover rounded-lg"
        />
        <div className="flex">
          <div className="flex flex-col w-full gap-4">
            <CardHeader className="m-0 p-0 pt-4">
              <CardTitle>Saiba o que fazer em uma inundação</CardTitle>
              <CardDescription>Parque Esportivo PUCRS</CardDescription>
              <CardDescription className="flex gap-1 items-center">
                <Calendar size={16} />
                31/08/2024
              </CardDescription>
            </CardHeader>
            {type && (
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded">
                Saiba Mais
              </button>
            )}
          </div>
        </div>
      </Card>
    );

  return (
    <Card
      className={`flex flex-col w-1/1 h-1/1 p-4 h-full justify justify-between`}
    >
      <img
        src={data.imageUrl}
        alt="Imagem Evento"
        className="w-full h-28 object-cover rounded-lg"
      />
      <div className="flex">
        <div className="flex flex-col w-full gap-4">
          <CardHeader className="m-0 p-0 pt-4">
            <CardTitle>{data.title}</CardTitle>
            <CardDescription>{data.capacity}</CardDescription>
            <CardDescription className="flex gap-1 items-center">
              <Calendar size={16} />
              {data.date}
            </CardDescription>
          </CardHeader>
          {type && (
            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded">
              Saiba Mais
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CardComponent;
