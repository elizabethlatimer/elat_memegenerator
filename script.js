window.onload = function() {
    let button = document.querySelector('.button');
    button.addEventListener ("click", function() {
        let imgAddress = document.getElementById("link").value;
        document.getElementById("link").value = "";
        let topText = document.getElementById("top-text").value;
        document.getElementById("top-text").value="";
        let bottomText = document.getElementById("bottom-text").value;
        document.getElementById("bottom-text").value = "";

        let section = document.querySelector(".meme-holder")

        let memeDiv = document.createElement("div");
        memeDiv.className = "meme";

        let topDiv = document.createElement("div");
        topDiv.className = "meme-text-top";
        topDiv.innerText = topText;

        let bottomDiv = document.createElement("div");
        bottomDiv.className = "meme-text-bottom";
        bottomDiv.innerText = bottomText;

        let image = document.createElement("img");
        image.src = imgAddress;

        memeDiv.appendChild(image);
        memeDiv.appendChild(topDiv);
        memeDiv.appendChild(bottomDiv);
        section.appendChild(memeDiv);

    })
}

// window.onload = function() {
//     let memes = document.getElementsByClassName("meme");
//     for (let i=0; i<memes.length; i++) {
//         memes[i].addEventListener("click", function(){
//             memes[i].remove;
//         })
//     }
// }