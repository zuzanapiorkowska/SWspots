import { ObjectToMark } from "./CustomMap";

export class SWSpot implements ObjectToMark {
    placeName: string;
    location:
        {
            lat: number;
            lng: number;
        }
    surface: string;
    equipment:
        {
            bar: string;
            wideBar: string;
            highBar: string;
            parallelBars: string;
            ladder: string;
            horizontalLadder: string;
            pipe: string;
        }
    img: string;

    constructor
        (
            placeName: string,
            location: { lat: number, lng: number },
            surface: string,
            equipment: { bar: string, wideBar: string, highBar: string, parallelBars: string, ladder: string, horizontalLadder: string, pipe: string },
            img: string
        ) {
        placeName = this.placeName;
        location = {
            lat: this.location.lat,
            lng: this.location.lng
        },
            surface = this.surface;
        equipment = {
            bar: this.equipment.bar,
            wideBar: this.equipment.wideBar,
            highBar: this.equipment.highBar,
            parallelBars: this.equipment.parallelBars,
            ladder: this.equipment.ladder,
            horizontalLadder: this.equipment.horizontalLadder,
            pipe: this.equipment.pipe
        },
            img = this.img;
    }

    markerContent(): string {
        return `<h1>${this.placeName}</h1>`;
    }
}