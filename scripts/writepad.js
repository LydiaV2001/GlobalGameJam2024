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
        
        objectives[i].setAttribute("category", categories[categoryIndex]);

        categories.splice(categoryIndex, 1);
    }

}

export function calculatePoints(){

    let points = 0;

    let objective1 = document.getElementById("objective_1");
    let objective2 = document.getElementById("objective_2");
    let objective3 = document.getElementById("objective_3");

    let category1 = objective1.getAttribute("category");
    let category2 = objective1.getAttribute("category");
    let category3 = objective1.getAttribute("category");

    let squeaks1 = objective1.getElementsByClassName("squeak");
    let squeaks2 = objective1.getElementsByClassName("squeak");
    let squeaks3 = objective1.getElementsByClassName("squeak");

    for (let i = 0; i < squeaks1.length; i++){

        let squeakCategory = squeaks1[i].getAttribute("category");

        if (squeakCategory == category1){
            points++;
        }
        else {
            points--;
        }

    }

    for (let i = 0; i < squeaks2.length; i++){

        let squeakCategory = squeaks1[i].getAttribute("category");

        if (squeakCategory == category1){
            points++;
        }
        else {
            points--;
        }

    }

    for (let i = 0; i < squeaks3.length; i++){

        let squeakCategory = squeaks1[i].getAttribute("category");

        if (squeakCategory == category1){
            points++;
        }
        else {
            points--;
        }

    }

    console.log("points: " + points);
}