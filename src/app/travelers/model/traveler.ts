import { User } from "src/shared/user";

// export an interface that extends user
export interface Traveler extends User {
	firstName: string;
	lastName: string;
	age: number;
}
