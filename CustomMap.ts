

export interface ObjectToMark {
    location: {
        lat: number,
        lng: number
    };
    markerContent(): string
}
export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
    addMarker(objectToMark: ObjectToMark): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: objectToMark.location.lat,
                lng: objectToMark.location.lng
            }
        });

        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({ content: objectToMark.markerContent(); })

            infoWindow.open(this.googleMap, marker)
        });
    }
}