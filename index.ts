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
    ),
    new SWSpot(
        "Ratusz Bemowo", 
        new Location(52.23855969507622, 20.915941942381),
        "Bemowo",
        "guma",
        new Equipment("o","o","x","o","o","o","o",),
        "https://lh5.googleusercontent.com/p/AF1QipPioz1n-INN86SUFiAu-z9cjcYaUWcAfub-Inz5=w408-h261-k-no"
    )
];
const customMap = new CustomMap("root",spots[0]);


const query = document.getElementById("query");

spots.forEach((spot)=>{
customMap.addMarker(spot);
const spotInfo = createSpotInfo(spot);
const spotEl = document.createElement("div") as HTMLDivElement
spotEl.innerHTML=spotInfo;
query.appendChild(spotEl);


})