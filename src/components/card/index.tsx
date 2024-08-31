import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import image from "../../assets/event-mock.png";
import { Calendar } from "lucide-react";

type buttoType = "subscribe" | "validate" | "knowMore";

type Props = {
  buttonType: buttoType;
  data?: {
    imageUrl: string;
    title: string;
    location: string;
    date: string;
  };
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
      <Card className={`flex flex-col w-1/1 h-1/1 p-6 justify-center`}>
        <img
          src={image}
          alt="Imagem Evento"
          className="w-full h-28 object-cover"
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
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Saiba Mais
              </button>
            )}
            <CardContent className="flex flex-col m-0 p-0 ml-6 justify-end items-center"></CardContent>
          </div>
        </div>
      </Card>
    );

  return (
    <Card className={`flex flex-col w-1/1 h-1/1 p-6 justify-center`}>
      <img
        src={image}
        alt="Imagem Evento"
        className="w-full h-28 object-cover"
      />
      <div className="flex">
        <div className="flex flex-col w-full gap-4">
          <CardHeader className="m-0 p-0 pt-4">
            <CardTitle>{data.title}</CardTitle>
            <CardDescription>{data.location}</CardDescription>
            <CardDescription className="flex gap-1 items-center">
              <Calendar size={16} />
              {data.date}
            </CardDescription>
          </CardHeader>
          {type && (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Saiba Mais
            </button>
          )}
          <CardContent className="flex flex-col m-0 p-0 ml-6 justify-end items-center"></CardContent>
        </div>
      </div>
    </Card>
  );
};

export default CardComponent;
