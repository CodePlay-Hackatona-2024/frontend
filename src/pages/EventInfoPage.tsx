import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import CardComponent from "@/components/card-event-info/index.tsx";
import { api } from "../lib/api/axios";
import { eventModel } from "../models/event.model";
import { toast } from "react-toastify";

const EventInfoPage = () => {
  const { id } = useParams<{ id: string }>();
  const [eventData, setEventData] = useState<eventModel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEventData = async () => {
      try {
        const response = await api.get<{ item: eventModel }>(
          `https://backend-wheat-alpha-40.vercel.app/event/details/${id}`
        );
        console.log(response.data);
        setEventData(response.data.item);
      } catch (error) {
        console.error("Erro ao carregar os dados do evento", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getEventData();
    }
  }, [id]);

  const handleSubscribe = async () => {
    try {
      await api.post(`/user/register/${id}/${user_id}`);
      if (eventData) {
        setEventData({ ...eventData, isRegistered: true });
      }
      toast.success("Inscrição realizada com sucesso");
    } catch (error) {
      console.error("Erro ao se inscrever no evento", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-2 pb-10">
      <div className="w-full max-w-2xl px-4 -mt-20">
        {loading ? (
          <div className="flex justify-center items-center">
            <ClipLoader color="#4A90E2" loading={loading} size={50} />
          </div>
        ) : (
          eventData && (
            <CardComponent
              buttonType="subscribe"
              data={eventData}
              onSubscribe={handleSubscribe} // Passe a função para o botão
            />
          )
        )}
      </div>
    </div>
  );
};

export default EventInfoPage;
