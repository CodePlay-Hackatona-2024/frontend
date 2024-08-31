import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  CalendarCheck,
  CalendarDays,
  ShoppingCart,
  Trophy,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const navigateRoutes: {
  path: string;
  icon: React.ReactNode;
  label: string;
}[] = [
  {
    path: "/events",
    icon: <CalendarDays className="h-8 w-8 text-white" />,
    label: "Eventos",
  },
  {
    path: "/my-events",
    icon: <CalendarCheck className="h-8 w-8 text-white" />,
    label: "Meus Eventos",
  },
  {
    path: "/shop",
    icon: <ShoppingCart className="h-8 w-8 text-white" />,
    label: "Loja",
  },
  {
    path: "/rewards",
    icon: <Trophy className="h-8 w-8 text-white" />,
    label: "Cupons",
  },
];

export const ToggleGroupDemo = () => {
  let navigate = useNavigate();

  const handleOnClick = (path: string) => {
    navigate(path);
  };
  return (
    <ToggleGroup
      className="fixed bottom-0 left-0 w-full bg-primary p-4 flex justify-around"
      type="single"
      size="lg"
    >
      {navigateRoutes.map((route) => (
        <ToggleGroupItem
          key={route.path}
          value={route.path}
          onClick={() => handleOnClick(route.path)}
          className="flex flex-col items-center gap-1"
        >
          {route.icon}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};
