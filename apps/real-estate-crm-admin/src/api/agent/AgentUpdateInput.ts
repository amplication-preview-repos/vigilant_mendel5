import { PropertyUpdateManyWithoutAgentsInput } from "./PropertyUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  email?: string | null;
  jobTitle?: string | null;
  name?: string | null;
  phone?: string | null;
  properties?: PropertyUpdateManyWithoutAgentsInput;
};
