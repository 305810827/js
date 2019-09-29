window.onload = function () {
    let imgOnClick = document.getElementsByClassName("smallImage");
    for (let i = 0; i < imgOnClick.length; i++) {
        console.log(imgOnClick[0]);
        imgOnClick[i].addEventListener("click", showBigImage)
        function showBigImage(event) {
            console.log(event.target.getAttribute("src"));
            console.log(event.target.getAttribute("alt"));
            let imgName = event.target.getAttribute("src")
            let imgAlt = event.target.getAttribute("alt")
            let bigImgs = document.getElementById("bigImage")
            let bigImgsText = document.getElementById("text")
            let bigImg = document.createElement("img");
            let bigImgText = document.createElement("p");
            for (let i = 0; i < bigImgs.childNodes.length; i++) {
                bigImgs.removeChild(bigImgs.childNodes[i]);
            }
            for (let i = 0; i < bigImgsText.childNodes.length; i++) {
                bigImgsText.removeChild(bigImgsText.childNodes[i]);
            }
            bigImg.setAttribute("src", imgName);
            bigImgText.innerHTML = imgAlt;
            bigImgs.appendChild(bigImg);
            bigImgsText.appendChild(bigImgText);
        }
    }
}
