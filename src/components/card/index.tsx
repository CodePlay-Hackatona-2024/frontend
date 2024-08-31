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
    <Card className={`flex flex-col w-1/1 h-1/1 p-6 justify-center`}>
      <img src={image} alt="Imagem Evento" className="w-full" />
      <div className="flex">
        <div>
          <CardHeader className="m-0 p-0 pt-4">
            <CardTitle>Saiba o que fazer em uma inundação</CardTitle>
            <CardDescription>Parque Esportivo PUCRS</CardDescription>
            <CardDescription className="flex gap-1 items-center">
              <Calendar size={16} />
              31/08/2024
            </CardDescription>
          </CardHeader>
        </div>

        <CardContent className="flex flex-col m-0 p-0 ml-6 justify-end items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Validar
          </button>
        </CardContent>
      </div>
    </Card>
  );
};

export default CardComponent;
