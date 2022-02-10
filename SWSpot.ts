import { ObjectToMark } from "./CustomMap";

export class SWSpot implements ObjectToMark {
    constructor(
        location: {
            lat: number,
            lng: number
        },
        placeName: string,
        surface: string,
        equipment: {
            bar: string,
            wideBar: string,
            highBar: string,
            parallelBars: string,
            ladder: string,
            horizontalLadder: string,
            pipe: string
        },
        img: string,
    ) { };
    markerContent(): string {
        return `
        <div>
        
        </div>
        `;
    }
}