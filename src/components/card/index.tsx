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
import { useNavigate } from "react-router-dom";

type buttoType = "subscribe" | "validate" | "knowMore";

type Props = {
  buttonType: buttoType;
  data: eventModel & { imageUrl: string };
};

const CardComponent = ({ buttonType: type, data }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (type === "subscribe") {
      console.log(" call handle subscribe");
    } else if (type === "validate") {
      console.log(" call handle validate");
    } else if (type === "knowMore") {
      navigate(`/event-info/${data?.event_id}`);
    }
  };

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
            <button
              onClick={handleClick}
              className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded"
            >
              Saiba Mais
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CardComponent;
