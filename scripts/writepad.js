import { squeakData } from "./constants/squeakData.js";

const categories = [

    "Animal Abuse",
    "Historical Inacurracy",
    "Aggression",
    "Lobbying",
    "Bad Influence"

]

export function buildObjectives(){

    let objectives = document.getElementsByClassName("objective_title");

    for (let i = 0; i < objectives.length; i++){

        let categoryIndex = Math.floor(Math.random() * 5);
    
        objectives[i].innerHTML = categories[categoryIndex];

    }

}