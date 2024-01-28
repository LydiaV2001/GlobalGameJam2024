import { squeakData } from "./constants/squeakData.js";

export function buildObjectives(){

    let categories = [

        "Mean to Animal",
        "Cospiracy Theories",
        "Aggression",
        "Lobbying",
        "Stinky Cheese / Sauce Abuse",
        "subliminalMessages"
    
    ];
    
    let categoryClass = [
    
        "animalAbuse",
        "historicalInacurracy",
        "aggression",
        "lobbying",
        "drugDealing",
        "subliminalMessaging"
    
    ];
    

    let objectives = document.getElementsByClassName("objective");

    let titles = document.getElementsByClassName("objective_title");

    for (let i = 0; i < titles.length; i++){

        let categoryIndex = Math.floor(Math.random() * categories.length);
    
        titles[i].innerHTML = categories[categoryIndex];
        
        objectives[i].classList.add(categoryClass[categoryIndex]);

        categories.splice(categoryIndex, 1);
    }

}

export function calculatePoints(){

    let objective1 = document.getElementById("objective_1");
    let objective2 = document.getElementById("objective_2");
    let objective3 = document.getElementById("objective_3");

    let squeaks1 = objective1.getElementsByClassName("squeak");

    console.log(squeaks1);

    console.log("length: " + squeaks1.length);
    
    //  for (let i = 0; i < 10; i++){
        
    //      console.log("AAAAAAAAAAAAAAAAA");
    //     console.log(squeaks1[i]);

    //  }

}