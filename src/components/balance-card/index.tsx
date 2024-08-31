import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import coin from "../../assets/coin.png";

export function BalanceCard({ balance }: { balance: number }) {
  return (
    <Card className="w-full bg-primary/10">
      <CardHeader>
        <CardTitle className="text-4xl flex items-center gap-4">
          <img src={coin} alt="Moeda" className="w-12 h-12" />
          <span>{balance}</span>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
