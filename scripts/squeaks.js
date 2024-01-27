/*
    apparently javascript has no native support for enumerators, so this is the best we can do.
*/
export const Category = {
    subliminalMessaging: 0,
    animalAbuse: 1,
    drugDealing: 2,
    historicalInnacuracies: 3,
    antiUnionEfforts: 4,
    LobbyingAndAntiCompetitivePracticies: 5,
    GeneralBigotry: 6,
    tame: 7,
    sympathetic: 8
};

export class Squeak {
    
    /*
    an explanation of the params:
    - category is the category of tweet. see the Category const above.
    - body is the main text body.
    - image is the image used. if 'null' is passed through, an image ain't rendered.
    - resqueaks are the number of resqueaks (our version of retweets). this is just for show.
    - likes is the number of likes given, this is also just for show.
    - replies is also the number of replies given. this is, again, just for show.
    */
    constructor(category, body, image, likes, resqueaks, replies) {
        this.category = category;
        this.body = body;
        this.image = image;
        this.likes = likes;
        this.resqueaks = resqueaks;
        this.replies = replies;
    }
}