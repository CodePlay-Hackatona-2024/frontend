import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import coin from "../../assets/coin.svg";

export const Header = () => {
  return (
    <header className="flex items-center p-4 text-black w-100vw justify-between">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage
            src="https://images.unsplash.com/photo-1612839637272-9c4b2f0c5e0b"
            alt="Avatar"
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h6 className="text-2xl font-bold">Seja bem vindo!</h6>
          <p className="text-sm text-gray-500">
            <a href="/login">João Demari</a>
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <img src={coin} alt="Moeda" className="w-1/4 h-1/4" />
        <p>100</p>
      </div>
    </header>
  );
};
