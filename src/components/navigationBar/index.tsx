import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  CalendarCheck,
  CalendarDays,
  ShoppingCart,
  Trophy,
} from "lucide-react";

export const ToggleGroupDemo = () => {
  return (
    <ToggleGroup
      className="fixed bottom-0 left-0 w-full bg-primary p-4 flex justify-around"
      type="single"
      size="lg"
    >
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <CalendarDays className="h-8 w-8 text-white" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ShoppingCart className="h-8 w-8 text-white" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <CalendarCheck className="h-8 w-8 text-white" />
      </ToggleGroupItem>
      <ToggleGroupItem value="AAAA" aria-label="Toggle strikethrough">
        <Trophy className="h-8 w-8 text-white" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
