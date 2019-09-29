let lastImageHeight;

$(document).ready(function () {
    insertImg();
    $(document).scroll(function () {
        checkFlag();
    });
})

function checkFlag() {
    let pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(lastImageHeight,pageHeight ,scrollHeight)
    if(lastImageHeight < pageHeight + scrollHeight){
        insertImg();
    }
}

function insertImg() {
    let box = document.createElement('div');
    box.className = 'hWaterfall';
    $("#container").append(box);

    let image = document.createElement('img');
    image.setAttribute("src","images/"+Math.floor(Math.random()*97)+".jpg");
    box.append(image);

    lastImageHeight = image.offsetTop;
    console.log("width:"+image.width,"height:"+image.height);
    if(image.offsetTop < document.body.clientHeight){
        insertImg()
    }


}
