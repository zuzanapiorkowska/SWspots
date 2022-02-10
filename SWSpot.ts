export class Location {
    constructor(
        public lat: number,
        public lng: number
    ) { }
}

export class Equipment {
    constructor(
        public bar: string,
        public wideBar: string,
        public highBar: string,
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
        public surface: string,
        public equipment: Equipment,
        public img: string
    ) { }
    markerContent(): string {
        return `<h1>${this.placeName}</h1>`;
    }
}