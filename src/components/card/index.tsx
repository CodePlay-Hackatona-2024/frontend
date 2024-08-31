import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import image from "../../assets/event-mock.png";
import { Calendar } from "lucide-react";

const CardComponent = () => {
  return (
    <Card className={`w-1/1 h-1/1 p-4 items-center justify-center`}>
      <CardContent className="p-0">
        <img src={image} alt="Imagem Evento" className="w-1/1" />
      </CardContent>
      <CardHeader className="m-0 p-0 pt-4">
        <CardTitle>Saiba o que fazer em uma inundação</CardTitle>
        <CardDescription>Parque Esportivo PUCRS</CardDescription>
        <CardDescription className="flex gap-1 items-center">
          <Calendar size={16} />
          31/08/2024
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default CardComponent;
