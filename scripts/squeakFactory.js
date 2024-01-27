import { squeakData } from "./constants/squeakData.js";

let data = squeakData.squeaks;

for (let i = 0; i < data.length; i++) {

    let squeaker = document.getElementById("squeaker");

    let squeak = document.createElement("div");
    squeak.classList.add("squeak");
    squeak.classList.add(data[0].category);

    let userInfo = document.createElement("div");
    userInfo.classList.add("userInfo");

    let pfp = document.createElement("img");
    pfp.classList.add("pfp");
    pfp.setAttribute("src", data[0].pfp);

    let title = document.createElement("p");
    title.innerHTML = 
        data[0].author + " " + 
        data[0].tag + " · " +
        data[0].date;

    let body = document.createElement("div");
    body.classList.add("squeakBody");

    let text = document.createElement("p");
    text.classList.add("squeakText");
    text.innerHTML = data[0].body;

    let image = document.createElement("img");
    image.classList.add("squeakImage");
    image.setAttribute("src", data[0].image);

    let engagement = document.createElement("div");
    engagement.classList.add("engagement");

    let reply = document.createElement("div");
    let resqueak = document.createElement("div");
    let like = document.createElement("div");

    let replyIcon = document.createElement("img");
    replyIcon.setAttribute("src", "/images/reply.png")

    let resqueakIcon = document.createElement("img");
    resqueakIcon.setAttribute("src", "/images/resqueak.png")

    let likeIcon = document.createElement("img");
    likeIcon.setAttribute("src", "/images/like.png")

    let replyCount = document.createElement("p");
    replyCount.innerHTML = data[0].replies;

    let resqueakCount = document.createElement("p");
    resqueakCount.innerHTML = data[0].resqueaks;

    let likeCount = document.createElement("p");
    likeCount.innerHTML = data[0].likes;

    squeaker.appendChild(squeak);

    squeak.appendChild(pfp);
    squeak.appendChild(body);

    userInfo.appendChild(title);

    body.appendChild(userInfo);
    body.appendChild(text);
    body.appendChild(image);
    body.appendChild(engagement);

    engagement.appendChild(reply);
    engagement.appendChild(resqueak);
    engagement.appendChild(like);

    reply.appendChild(replyIcon);
    reply.appendChild(replyCount);

    resqueak.appendChild(resqueakIcon);
    resqueak.appendChild(resqueakCount);

    like.appendChild(likeIcon);
    like.appendChild(likeCount);

}