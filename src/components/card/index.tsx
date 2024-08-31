import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Calendar } from "lucide-react";
import { eventModel } from "../../models/event.model";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { DialogDemo } from "../confirm-modal";

type buttoType = "subscribe" | "validate" | "knowMore";

type Props = {
  buttonType: buttoType;
  data: eventModel;
};

const CardComponent = ({ buttonType: type, data }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event-info/${data?.event_id}`);
  };

  const getButtonComponent = (type: buttoType) => {
    switch (type) {
      case "subscribe":
        return (
          <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded">
            Inscreva-se
          </button>
        );
      case "validate":
        return (
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded">
                Validar horas
              </button>
            </DialogTrigger>
            <DialogDemo id={data?.event_id}></DialogDemo>
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
        src={data.photo_url}
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
