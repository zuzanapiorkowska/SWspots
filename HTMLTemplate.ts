import { SWSpot } from "./SWSpot";

export function createSpotInfo(spot: SWSpot):string {
    return `
<div class="info-box">
                <div class="left-info">
                    <h1 class="spot-name">${spot.placeName}</h1>
                    <div class="photo-container">
                    <img class="photo" src=${spot.imgSrc}>
                    </div>
                </div>
                <div class="right-info">
                    <div class="info-part equipment">
                        <h3 class="subtitle">Wyposażenie:</h3>
                        <table>
                            <tr>
                                <td class="equipment">drążek</td>
                                <td class="availability ${spot.equipment.bar}">${spot.equipment.bar}</td>
                            </tr>
                            <tr>
                                <td class="equipment">szeroki drążek</td>
                                <td class="availability ${spot.equipment.highWideBar}">${spot.equipment.highWideBar}</td>
                            </tr>
                            <tr>
                                <td class="equipment">niski drążek</td>
                                <td class="availability ${spot.equipment.lowBar}">${spot.equipment.lowBar}</td>
                            </tr>
                            <tr>
                                <td class="equipment">poręcze równoległe</td>
                                <td class="availability ${spot.equipment.parallelBars}">${spot.equipment.parallelBars}</td>
                            </tr>
                            <tr>
                                <td class="equipment">niskie poręcze równoległe</td>
                                <td class="availability ${spot.equipment.lowParallelBars}">${spot.equipment.lowParallelBars}</td>
                            </tr>
                            <tr>
                                <td class="equipment">drabinka</td>
                                <td class="availability ${spot.equipment.ladder}">${spot.equipment.ladder}</td>
                            </tr>
                            <tr>
                                <td class="equipment">drabinka pozioma</td>
                                <td class="availability ${spot.equipment.horizontalLadder}">${spot.equipment.horizontalLadder}</td>
                            </tr>
                            <tr>
                                <td class="equipment">pionowa rurka</td>
                                <td class="availability ${spot.equipment.pipe}">${spot.equipment.pipe}</td>
                            </tr>
                            <tr class="last">
                                <td class="equipment">koła gimnastyczne</td>
                                <td class="availability ${spot.equipment.rings}">${spot.equipment.rings}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="info-part surface">
                        <h3 class="subtitle">Nawierzchnia:</h3><span class=text>${spot.surface}</span>
                    </div>
                </div>
            </div>
            `
}