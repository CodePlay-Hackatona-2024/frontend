import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import defaultImage from "../../assets/event-mock.png";
import { Calendar } from "lucide-react";
import { eventModel } from "../../models/event.model";
import { FaBackward } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type ButtonType = "subscribe";

type Props = {
  buttonType: ButtonType;
  data: eventModel & { imageUrl: string };
  onSubscribe?: () => void;
};

const CardComponent = ({ buttonType: type, data, onSubscribe }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (type === "subscribe" && onSubscribe) {
      onSubscribe();
    }
  };

  const handleBack = () => {
    navigate("/events");
  };

  return (
    <Card className="flex flex-col w-full max-w-md h-full p-4 justify-center mx-auto">
      <img
        src={data?.imageUrl || defaultImage}
        alt="Imagem Evento"
        className="w-full h-36 object-cover rounded-md"
      />
      
      <CardHeader className="m-0 p-0 pt-4">
        <CardTitle>{data?.title || "Saiba o que fazer em uma inundação"}</CardTitle>
        <CardDescription>{data?.location || "Parque Esportivo PUCRS"}</CardDescription>
        <CardDescription className="flex gap-1 items-center text-gray-500">
          <Calendar size={16} />
          {data?.date || "25 Mar 2024, Sexta"}
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-4">
        <p className="text-gray-700">
          {data?.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa."}
        </p>
        <div className="mt-4 flex justify-between">
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
            onClick={handleBack}
          >
            <FaBackward className="mr-2" />
            Voltar
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            Inscrever-se
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
