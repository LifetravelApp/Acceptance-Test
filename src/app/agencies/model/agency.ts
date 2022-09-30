import { User } from "src/shared/user";


export interface Agency extends User {
  name: string;
  location: string;
  ruc: number;
}
