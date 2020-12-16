export interface ICourse {
    id: number;
    name: string;
    date: Date;
    length: number;
    description: string;
}

export class Course implements ICourse {
    get id() : number {
        return this._id;
    }
    set id(value: number){
        this._id = value;
    }

    get name(): string {
        return this._title;
    }

    get date(): Date {
        return this._creationDate;
    }

    get length(): number {
        return this._length;
    }

    get description(): string {
        return this._description;
    }

    constructor (
        private _id: number,
        private _title: string,
        private _creationDate: Date,
        private _length: number,
        private _description: string
    ) {}
}