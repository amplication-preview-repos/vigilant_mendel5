import { Property } from "../property/Property";

export type Agent = {
  createdAt: Date;
  email: string | null;
  id: string;
  jobTitle: string | null;
  name: string | null;
  phone: string | null;
  properties?: Array<Property>;
  updatedAt: Date;
};
