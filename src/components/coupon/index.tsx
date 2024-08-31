import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Calendar } from "lucide-react";
import logoImage from "../../assets/renner.png";
import coin from "../../assets/coin.png";

export type CouponProps = {
  item_id: string;
  name: string;
  description: string;
  value: number;
  partner: {
    name: string;
    logo: string;
  };
};

const Coupon = ({ data }: { data: CouponProps }) => {
  const [copied, setCopied] = useState(false);
  const couponCode = "DESC10OFFAUG24";

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reseta o estado após 2 segundos
  };

  return (
    <Card className={`relative flex flex-col w-1/1 h-1/1 p-6 justify-center`}>
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <span
          onClick={handleCopy}
          className="text-sm font-bold cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-gray-200"
        >
          {couponCode}
        </span>
        {copied && <span className="text-green-500 text-xs">Copiado!</span>}
      </div>
      <Avatar className="w-2/12">
        <AvatarImage src={data.partner.logo} alt="Dono do Cupom" />
        <AvatarFallback></AvatarFallback>
      </Avatar>
      <div className="flex">
        <div className="w-3/4">
          <CardHeader className="m-0 p-0 pt-4">
            <CardTitle>{data.name}</CardTitle>
            <CardDescription>{data.description}</CardDescription>
            <CardDescription>{data.partner.name}</CardDescription>
            <div className="flex gap-2 items-center">
              <CardDescription>{data.value}</CardDescription>
              <img src={coin} alt="Moeda" className="w-2.5 h-2.5" />
            </div>
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
