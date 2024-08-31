import { useEffect, useState } from "react";
import Coupon, { CouponProps } from "@/components/coupon";
import { api } from "../lib/api/axios";
import { BalanceCard } from "../components/balance-card";

const CouponsPage = () => {
  const [data, setData] = useState<CouponProps[]>([]);
  const handleLogin = async () => {
    try {
      const coupons = (await api.get<{ items: CouponProps[] }>("/item")).data;
      console.log(coupons);
      setData(coupons.items);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);
  return (
    <main className="px-4 gap-4 flex flex-col mb-24">
      <h1 className="text-3xl font-bold">Seu Saldo</h1>
      <BalanceCard></BalanceCard>
      <h1 className="text-3xl font-bold">Seus Prêmios</h1>

      {data.map((item, index) => (
        <div key={index}>
          <Coupon data={item}></Coupon>
        </div>
      ))}
    </main>
  );
};

export default CouponsPage;
