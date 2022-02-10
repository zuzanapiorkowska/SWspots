import faker from "faker";
import { ObjectToMark } from "./CustomMap";
//@types/faker pobiera mi types definition file
export class User implements ObjectToMark {
   name: string;
   lastName: string;
   location: {
       lat: number;
       lng: number;
   };

   constructor(){
       this.name = faker.name.firstName();
       this.lastName=faker.name.lastName();
       this.location = {
           lat: parseFloat(faker.address.latitude()),
           lng: parseFloat(faker.address.longitude())
       }
   }
   markerContent(): string {
       return `User name is ${this.name}`;
   }
}