///<reference types="@types/google.maps"/>

import { CustomMap } from "./CustomMap";
import { createSpotInfo } from "./HTMLTemplate";
import { spots } from "./spots";
import { capitalizeFirstLetter } from "./CapitalizeFirstLetter";
import { SWSpot } from "./SWSpot";

const mapRoot = document.getElementById("root") as HTMLDivElement;
const customMap = new CustomMap("root", spots[0], 13);
const query = document.getElementById("query") as HTMLDivElement;
const areaInput = document.getElementById("input") as HTMLInputElement;
const labels = document.querySelectorAll(".label") as NodeList;

// dodać wyszukaj na mapie

areaInput.addEventListener("change", () => {
    query.innerHTML = "";
    spots.forEach((spot) => {
        const querySpots: SWSpot[] = []
        if (spot.area === capitalizeFirstLetter(areaInput.value))
            querySpots.push(spot)
        showSpots(querySpots);
    })
    areaInput.value="";
})

export function showSpots(spots: SWSpot[]) {
    spots.forEach((spot) => {
        customMap.addMarker(spot);
        const spotInfo = createSpotInfo(spot);
        const spotEl = document.createElement("div") as HTMLDivElement
        spotEl.innerHTML = spotInfo;
        query.appendChild(spotEl);
    })
}

showSpots(spots);


const spotsNames = document.querySelectorAll(".spot-name") as NodeList;
spotsNames.forEach((spotName) => {
    spotName.addEventListener("click", () => {
        showNewMap(spotName);
    })
})


export function showNewMap(spotName){
    mapRoot.innerHTML = "";
    const clickedSpot = spots.find((spot) => { return spot.placeName === spotName.textContent })
    const customMap = new CustomMap("root", clickedSpot, 18);
    customMap.addMarker(clickedSpot);
}