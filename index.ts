///<reference types="@types/google.maps"/>

import { CustomMap } from "./CustomMap";
import { SWSpot } from "./SWSpot";

const customMap = new CustomMap("root");
// const osLesne = ["tytuł", {lat: 15, lng: 25 }, "fef", {bar: "ed", wideBar: "d", highBar: "d", parallelBars:"D", ladder:"d", horizontalLadder: "l", pipe:"d"}, "s"]
const swSpot = new SWSpot("tytuł", {lat: 15, lng: 25 }, "fef", {bar: "ed", wideBar: "d", highBar: "d", parallelBars:"D", ladder:"d", horizontalLadder: "l", pipe:"d"}, "s");
console.log(swSpot.location.lat);
customMap.addMarker(swSpot);