import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import CardComponent from "@/components/card-event-info/index.tsx";
import { api } from "../lib/api/axios";
import { eventModel } from "../models/event.model";

const EventInfoPage = () => {
  const { id } = useParams<{ id: string }>(); // Captura o id da URL
  const [eventData, setEventData] = useState<eventModel | null>(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const getEventData = async () => {
      try {
        const response = await api.get<{item: eventModel}>(
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
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-2 pb-10">
      <div className="w-full max-w-2xl px-4 -mt-20">
        {loading ? (
          <div className="flex justify-center items-center">
            <ClipLoader color="#4A90E2" loading={loading} size={50} />
          </div>
        ) : (
          eventData && <CardComponent type="subscribe" data={eventData} />
        )}
      </div>
    </div>
  );
};

export default EventInfoPage;
