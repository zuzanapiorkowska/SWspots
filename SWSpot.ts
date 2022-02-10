export class SWSpot {
    constructor(
    placeName: string,
    location:
        {
            lat: number,
            lng: number
        },
    surface: string,
    equipment:
        {
            bar: string,
            wideBar: string,
            highBar: string,
            parallelBars: string,
            ladder: string,
            horizontalLadder: string,
            pipe: string
        },
    img: string
){}
    markerContent(): string {
        return `<h1>${this. placeName}</h1>`;
    }
}