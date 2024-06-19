import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyListRelationFilter } from "../property/PropertyListRelationFilter";

export type AgentWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  jobTitle?: StringNullableFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  properties?: PropertyListRelationFilter;
};
