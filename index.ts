///<reference types="@types/google.maps"/>

import { CustomMap } from "./CustomMap";
import { createSpotInfo } from "./HTMLTemplate";
import { Equipment, SWSpot, Location } from "./SWSpot";
const spots: SWSpot[] = [
    new SWSpot(
        "Osiedle Leśne", 
        new Location(52.254343, 20.933834),
        "Bemowo",
        "piasek",
        new Equipment("o","o","o","o","o","o","o",),
        "https://www.bydgoszcz.pl/fileadmin/_processed_/3/6/csm_flisy_street_fe874f1935.jpg"
    )
];
const customMap = new CustomMap("root",spots[0]);


const query = document.getElementById("query");
console.log(spots);
spots.forEach((spot)=>{
customMap.addMarker(spot);
const spotInfo = createSpotInfo(spot);
query.innerHTML=spotInfo;

})