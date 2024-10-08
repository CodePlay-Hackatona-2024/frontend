import { eventType } from "../types/eventTypes";

export type eventModel = {
  event_id: string;
  title: string;
  description: string;
  date: string;
  capacity: number;
  reward: number;
  type: eventType;
  isRegistered: boolean;
  organizerId: null;
  done: boolean;
  imageUrl: string;
  location: string;
};
