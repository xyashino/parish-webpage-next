import { Status, Weekday, WeekIntentions } from "@prisma/client";

type OptionalID<T extends { id: string }> = Omit<T, "id"> & { id?: string };

export interface OneIntention {
  id: string;
  zIndex: number;
  hour: string;
  value: string;
  dayId?: string;
}

export interface DayIntentions {
  day: Weekday;
  dateOfDay: Date | null;
  intentions: OneIntention[];
  weekId?: string;
}

export interface WeekIntentionsStoreData {
  weekIntentions: OptionalID<WeekIntentions>;
  activeDay: string;
  dayIntentions: Map<string, DayIntentions>;
}

export interface WeekIntentionsStoreActions<> {
  clearAll: () => void;
  clearDay: () => void;
  deleteIntention: (id: string) => void;
  updateDay: (dateOfDay: Date) => void;
  createIntention: (intention: OneIntention) => void;
  updateWeek: (date: Date) => void;
  updateStatus: (status: Status) => void;
  updateAll: (data: WeekIntentionsStoreData) => void;
  updateActiveDay: (id: string) => void;
}

export type WeekIntentionsStore = WeekIntentionsStoreData &
  WeekIntentionsStoreActions;