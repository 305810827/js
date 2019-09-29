let timeId = null;
let currentImgIndex = 0;
const imgLength = $(".banner>ul li").length;
//设置底部第一个按钮样式
$(`.container .banner .jumpBtn ul li[jumpImg = ${currentImgIndex}]`).css("background-color","black");
$(document).ready(function () {
    timeId = setInterval(intervalImg,3000)
})

$(".preImg").click(function () {
    clearInterval(timeId);
    let lastImg = currentImgIndex;
    console.log(currentImgIndex);
    currentImgIndex = currentImgIndex - 1;
    if(currentImgIndex < 0){
        currentImgIndex = imgLength - 1;
    }
    $(".banner>ul li img").eq(lastImg).css("position","absolute");
    $(".banner>ul li img").eq(currentImgIndex).css("position","relative");

    $(".banner>ul li").eq(currentImgIndex).css("display","block");
    $(".banner>ul li").eq(currentImgIndex).stop().animate({"opacity":1},1000);
    $(".banner>ul li").eq(lastImg).stop().animate({"opacity":0},1000,function () {
        $(".banner>ul li").eq(lastImg).css("display","none");
    });

    $(".banner .jumpBtn ul li").css("background-color","white");
    $(`.banner .jumpBtn ul li[jumpImg = ${currentImgIndex}]`).css("background-color","black");

    timeId = setInterval(intervalImg,3000);
});

$(".nextImg").click(function () {
    clearInterval(timeId);
    intervalImg();
    timeId = setInterval(intervalImg,3000);
});

function intervalImg() {
    if(currentImgIndex < imgLength-1){
        currentImgIndex++;
    }else {
        currentImgIndex = 0;
    }

    $(".banner>ul li img").eq(currentImgIndex-1).css("position","absolute");
    $(".banner>ul li img").eq(currentImgIndex).css("position","relative");

    $(".banner>ul li").eq(currentImgIndex).css("display","block");
    $(".banner>ul li").eq(currentImgIndex).stop().animate({"opacity":1},1000);
    $(".banner>ul li").eq(currentImgIndex-1).stop().animate({"opacity":0},1000,function () {
        $(".banner>ul li").eq(currentImgIndex-1).css("display","none");
    });

    $(".banner .jumpBtn ul li").css("background-color","white");
    $(`.banner .jumpBtn ul li[jumpImg = ${currentImgIndex}]`).css("background-color","black");
}

$(".banner .jumpBtn ul li").each(function () {
    $(this).mouseover(function () {
        clearInterval(timeId);
        let jumpId = $(this).attr("jumpImg");
        if(jumpId != currentImgIndex){
            let overImg = $(".banner>ul li").eq(jumpId);
            let lastImg = $(".banner>ul li").eq(currentImgIndex);
            $(".banner .jumpBtn ul li").css("background-color","white");
            $(`.banner .jumpBtn ul li[jumpImg = ${jumpId}]`).css("background-color","black");

            $(".banner>ul li img").eq(currentImgIndex).css("position","absolute");
            $(".banner>ul li img").eq(jumpId).css("position","relative");

            overImg.css("display","block");
            overImg.stop().animate({"opacity":1},1000);
            lastImg.stop().animate({"opacity":0},1000,function () {
                lastImg.css("display","none");
            });
            currentImgIndex = jumpId;
        }

    }).mouseout(function () {
        setTimeout(intervalImg,500);
        timeId = setInterval(intervalImg,3000);
    })
})