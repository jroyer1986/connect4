import { User } from '../../shared/models/user';

export class CreateGameData {
    user: User;
    numberOfColumns: number;
    numberOfRows: number;
}