import CardComponent from "@/components/card-event-info/index.tsx";

const EventInfoPage = () => {
  const eventData = {
    imageUrl: "",
    title: "Inundação: Saiba Como se Proteger",
    location: "Parque Esportivo PUCRS",
    date: "31 Ago 2024, Sábado",
    description:
      "Este evento aborda as medidas de segurança em caso de inundação. Especialistas irão compartilhar as melhores práticas para proteger você e sua família.",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-2 pb-10">
      <div className="w-full max-w-2xl px-4 -mt-20">
        <CardComponent type="subscribe" data={eventData} />
      </div>
    </div>
  );
};

export default EventInfoPage;
