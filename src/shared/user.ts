import { UserEnum } from "./enums/UserEnum"

export interface User {
	id: number;
	email: string;
	phone: string;
	type: UserEnum
}