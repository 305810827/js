let timeId
$(document).ready(function () {

    $('.tabUl li').each(function (index) {
        let liNode = $(this);
        liNode.mouseover(function () {
            timeId = setTimeout(function () {
                $('.contentFirst').removeClass('contentFirst');
                $('.tabin').removeClass('tabin');
                liNode.addClass('tabin');
                $('div').eq(index).addClass('contentFirst');
            }, 300);
        }).mouseout(function () {
            clearTimeout(timeId);
        });
    });

    $('#realContent').load('myTab.html');
    $('#tabSecond li').each(function (index) {
        $(this).click(function () {
            $('#tabSecond li.tabin2').removeClass('tabin2');
            $(this).addClass('tabin2');
            if (index == 0) {
                $('#realContent').load('myTab.html');
            } else if (index == 1) {
                $('#realContent').load('myTab1.html');
            } else {
                $('#realContent').load('myTab2.html');
            }

        })
    })
})