import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import coin from "../../assets/coin.png";

export const Header = () => {
  return (
    <header className="flex items-center p-4 text-black w-100vw justify-between">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="" alt="Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h6 className="font-semibold">Seja bem vindo!</h6>
          <p className="text-sm text-gray-500">
            <a href="/login">João Demari</a>
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <img src={coin} alt="Moeda" className="w-1/3 h-1/3" />
        <p className="font-bold">100</p>
      </div>
    </header>
  );
};
