import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import coin from "../../assets/coin.png";

export function BalanceCard() {
  return (
    <Card className="w-full bg-primary/10">
      <CardHeader>
        <CardTitle className="text-4xl flex items-center gap-4">
          <img src={coin} alt="Moeda" className="w-12 h-12" />
          <span>100</span>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
