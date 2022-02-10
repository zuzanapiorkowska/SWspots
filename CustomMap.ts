import { showNewMap } from ".";
import { SWSpot } from "./SWSpot";

export interface ObjectToMark {
    location: {
        lat: number,
        lng: number
    };
    markerContent(spot:SWSpot): string
}
export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string, objectToMark: ObjectToMark, mapZoom) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: mapZoom,
            center: {
                lat: objectToMark.location.lat,
                lng: objectToMark.location.lng
            }
        });
    }
    addMarker(objectToMark: SWSpot): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: objectToMark.location.lat,
                lng: objectToMark.location.lng,
            }, 
        });

        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({ content: objectToMark.markerContent(objectToMark) })
            infoWindow.open(this.googleMap, marker)
        });
    }
}