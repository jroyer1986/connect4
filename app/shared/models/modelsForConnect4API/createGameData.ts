import { User } from '../../models/user';

export class CreateGameData {
    user: User;
    numberOfColumns: number;
    numberOfRows: number;
}