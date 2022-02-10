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
        public ladder: string,
        public horizontalLadder: string,
        public pipe: string
    ) { }
}
export class SWSpot {
    constructor(
        public placeName: string,
        public location: Location,
        public area: string,
        public surface: string,
        public equipment: Equipment,
        public imgSrc: string
    ) { }
    markerContent(): string {
        return `<h1>${this.placeName}</h1>`;
    }
}