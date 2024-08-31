import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import defaultImage from "../../assets/event-mock.png";
import { Calendar } from "lucide-react";

type Props = {
  type: "subscribe" | "validate";
  data?: {
    imageUrl: string;
    title: string;
    location: string;
    date: string;
    description: string;
  };
};

const CardComponent = ({ type, data }: Props) => {
  const handleClick = () => {
    if (type === "subscribe") {
      console.log(" call handle subscribe");
    } else if (type === "validate") {
      console.log(" call handle validate");
    }
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
        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            {type === "subscribe" ? "Inscrever-se" : "Validar"}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
