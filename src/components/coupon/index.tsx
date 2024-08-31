import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Calendar } from "lucide-react";
import image from "../../assets/renner.png";

const Coupon = () => {
  return (
    <Card className={`flex flex-col w-1/1 h-1/1 p-6 justify-center`}>
      <Avatar className="w-2/12">
        <AvatarImage src={image} alt="Dono do Cupom" />
        <AvatarFallback>RN</AvatarFallback>
      </Avatar>
      <div className="flex">
        <div className="w-3/4">
          <CardHeader className="m-0 p-0 pt-4">
            <CardTitle>Desconto de 20% em todo o site</CardTitle>
            <CardDescription>Renner</CardDescription>
            <CardDescription className="flex gap-1 items-center">
              <Calendar size={16} />
              Disponível até 31/08/2024
            </CardDescription>
          </CardHeader>
        </div>

        <CardContent className="flex flex-col m-0 p-0 ml-6 justify-end items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Resgatar
          </button>
        </CardContent>
      </div>
    </Card>
  );
};
export default Coupon;
