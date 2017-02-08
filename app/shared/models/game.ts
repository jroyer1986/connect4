import { Board } from '../models/board';
import { User } from '../models/user';

export class Game {
	id: string;
	board: Board;
	listOfPlayers: User[];
	state: string;
	output: string;
}

