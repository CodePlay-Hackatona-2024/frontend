import React from "react";
import CardComponent from "../components/card";

type Props = {};

const EventsPage = (props: Props) => {
  return (
    <main className="px-4 gap-4 flex flex-col mb-24">
      <h1 className="text-3xl font-bold">Eventos Disponíveis</h1>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
    </main>
  );
};

export default EventsPage;
