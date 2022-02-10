import { Equipment, Location, SWSpot } from "./SWSpot";

export const spots: SWSpot[] = [
    new SWSpot(
        "Osiedle Leśne", 
        new Location(52.254343, 20.933834),
        "Bemowo",
        "piasek",
        new Equipment("o","o","o","o","o","o","o","o","x"),
        "https://www.bydgoszcz.pl/fileadmin/_processed_/3/6/csm_flisy_street_fe874f1935.jpg"
    ),
    new SWSpot(
        "Ratusz Bemowo", 
        new Location(52.23855969507622, 20.915941942381),
        "Bemowo",
        "guma",
        new Equipment("o","o","x","o","o","o","o","o","o"),
        "https://lh5.googleusercontent.com/p/AF1QipPioz1n-INN86SUFiAu-z9cjcYaUWcAfub-Inz5=w408-h261-k-no"
    ),
    new SWSpot(
        "Park Sowińskiego", 
        new Location(52.22654479169172, 20.93761562289638),
        "Wola",
        "żwir",
        new Equipment("o","o","o","o","o","o","o","x","x"),
        "https://tvn24.pl/tvnwarszawa/najnowsze/cdn-zdjecie-xyq8lb-park-powstancow-warszawy-593352/8407d3e1-2a85-42bb-ac17-ee40e2773584.jpg"
    )
];