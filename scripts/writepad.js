import { squeakData } from "./constants/squeakData.js";



export function buildObjectives(){
    let categories = [

        "Mean to Animals",
        "Conspiracy Theories",
        "Aggression",
        "Corporate Lobbying",
        "Stinky Cheese/Sauce Abuse"

    ]

    let objectives = document.getElementsByClassName("objective_title");

    for (let i = 0; i < objectives.length; i++){

        let categoryIndex = Math.floor(Math.random() * categories.length);
    
        objectives[i].innerHTML = categories[categoryIndex];

        categories.splice(categoryIndex, 1);

        console.log(categories);

    }

}