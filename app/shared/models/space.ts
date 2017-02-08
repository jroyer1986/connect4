import { User } from "../../shared/models/user";

export class Space {
	id: string;
	state: string;
	isAvailable: boolean;
	owner: User;
}