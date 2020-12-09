export interface ICourse {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
}

export class Course implements ICourse {
    get id() : number {
        return this._id;
    }
    set id(value: number){
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    get creationDate(): Date {
        return this._creationDate;
    }

    get duration(): number {
        return this._duration;
    }

    get description(): string {
        return this._description;
    }

    constructor (
        private _id: number,
        private _title: string,
        private _creationDate: Date,
        private _duration: number,
        private _description: string
    ) {}
}