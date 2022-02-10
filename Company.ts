import faker from "faker";
import { ObjectToMark } from "./CustomMap";

export class Company implements ObjectToMark{
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.companyName = faker.company.companyName(),
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    markerContent(): string {
        return `
        <div>
        <h1> Company name is ${this.companyName} </h1>
        <h3> Catchphrase: ${this.catchPhrase}
        </div>
        `;
    }
}