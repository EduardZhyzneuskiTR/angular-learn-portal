interface IUser {
    id: number;
    firstName: string;
    secondName: string;
}

class User implements IUser {
    get id(): number {
        return this._id;
    }

    get firstName(): string {
        return this._firstName;
    }

    get secondName(): string {
        return this._secondName;
    }

    constructor(
        private _id: number,
        private _firstName: string,
        private _secondName: string
    ) {}
}