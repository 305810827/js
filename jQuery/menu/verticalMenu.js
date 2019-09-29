$(document).ready(function () {
    $('.main>a').click(function () {
        let ulNode = $(this).next('ul');
        ulNode.slideToggle();
        changeIcon($(this));
    });

    $('.hmain').hover(function () {
        $(this).children('ul').slideDown();
        changeIcon($(this).children('a'))
    },function () {
        $(this).children('ul').slideUp();
        changeIcon($(this).children('a'))
    })
    
})

function changeIcon(mainNode) {
    if(mainNode){
        if(mainNode.css('background-image').indexOf('menu-down.png') >= 0){
            mainNode.css('background-image',"url('img/menu-right.png')");
        }else{
            mainNode.css('background-image',"url('img/menu-down.png')");
        }
    }
}