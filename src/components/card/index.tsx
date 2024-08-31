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
import { Dialog } from "@radix-ui/react-dialog";
import { DialogTrigger } from "../ui/dialog";
import { DialogDemo } from "../confirm-modal";

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

  const getButtonComponent = (type: buttoType) => {
    switch (type) {
      case "subscribe":
        return (
          <button
            onClick={handleClick}
            className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded"
          >
            Inscreva-se
          </button>
        );
      case "validate":
        return (
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded">
                Saiba Mais
              </button>
            </DialogTrigger>
            <DialogDemo id="dsijaidsj"></DialogDemo>
          </Dialog>
        );
      case "knowMore":
        return (
          <button
            onClick={handleClick}
            className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded"
          >
            Saiba Mais
          </button>
        );
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
          {type && getButtonComponent(type)}
        </div>
      </div>
    </Card>
  );
};

export default CardComponent;
