import { ObjectToMark } from "./CustomMap";
import { createSpotInfo } from "./HTMLTemplate";

export class Location {
    constructor(
        public lat: number,
        public lng: number
    ) { }
}

export class Equipment {
    constructor(
        public bar: string,
        public highWideBar: string,
        public lowBar: string,
        public parallelBars: string,
        public lowParallelBars: string,
        public ladder: string,
        public horizontalLadder: string,
        public pipe: string,
        public rings: string
    ) { }
}
export class SWSpot implements ObjectToMark{
    constructor(
        public placeName: string,
        public location: Location,
        public area: string,
        public surface: string,
        public equipment: Equipment,
        public imgSrc: string
    ) { }
    markerContent(spot: SWSpot): string {
        // return `<div><h1 class="label">${this.placeName}</h1></div>`;
        return createSpotInfo(spot);
    }
}