import React, { useEffect, useState } from "react";
import Coupon, { CouponProps } from "@/components/coupon";

const ShopPage = () => {
  const [data, setData] = useState<CouponProps[]>([]);
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/item", {
        method: "GET",
      });

      await response.json().then((res) => {
        setData(res.items);
      });
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);
  return (
    <main className="px-4 gap-4 flex flex-col mb-24">
      
      <h1 className="text-3xl font-bold">Prêmios Disponíveis</h1>

      {data.map((item, index) => (
        <div key={index}>
          <Coupon data={item}></Coupon>
        </div>
      ))}
    </main>
  );
};

export default ShopPage;
