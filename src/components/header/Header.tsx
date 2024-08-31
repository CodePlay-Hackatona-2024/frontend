import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import coin from "../../assets/coin.png";
import { useEffect, useState } from "react";
import { api } from "@/lib/api/axios";

export const Header = () => {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);

  const handleData = async () => {
    const id = localStorage.getItem("id");
    const response = await api.get(`user/details/${id}`);
    setName(response.data.name);
    setBalance(response.data.balance);
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <header className="flex items-center p-4 text-black w-100vw justify-between">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="" alt="Avatar" />
          <AvatarFallback>{name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h6 className="font-semibold">Seja bem vindo!</h6>
          <p className="text-sm text-gray-500">
            <a href="/login">{name}</a>
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <img src={coin} alt="Moeda" className="w-1/3 h-1/3" />
        <p className="font-bold">{balance}</p>
      </div>
    </header>
  );
};
