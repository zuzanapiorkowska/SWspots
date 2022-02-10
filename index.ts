///<reference types="@types/google.maps"/>

import { CustomMap } from "./CustomMap";
import { createSpotInfo } from "./HTMLTemplate";
import { spots } from "./spots";
import { capitalizeFirstLetter } from "./CapitalizeFirstLetter";
import { SWSpot } from "./SWSpot";

const mapRoot = document.getElementById("root") as HTMLDivElement;
const customMap = new CustomMap("root", spots[0], 11);
const query = document.getElementById("query") as HTMLDivElement;
const areaInput = document.getElementById("input") as HTMLInputElement;
areaInput.addEventListener("change", () => {
    query.innerHTML = "";
    let querySpots: SWSpot[] = [];
    spots.forEach((spot) => {
        if (spot.area === capitalizeFirstLetter(areaInput.value)){
        querySpots.push(spot);
    } })
    if (querySpots.length!==0) {
        showAreaMap(querySpots, 13);
        showSpots(querySpots);
    }
    querySpots=[];
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
        showNewMap(spotName, 18);
    })
})


export function showNewMap(spotName, zoom){
    mapRoot.innerHTML = "";
    const clickedSpot = spots.find((spot) => { return spot.placeName === spotName.textContent })
    const customMap = new CustomMap("root", clickedSpot, zoom);
    customMap.addMarker(clickedSpot);
}

export function showAreaMap(query: SWSpot[], zoom: number){
    mapRoot.innerHTML = "";
    const customMap = new CustomMap("root", query[0], zoom);
    query.forEach((result)=>{
        customMap.addMarker(result);
    })
}