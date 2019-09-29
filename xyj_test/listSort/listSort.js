let defaultNodeChile
let array = new Array()
let defaultArray = new Array()
$(document).ready(function () {

    $('.item').each(function (index) {
        array[index] = $(this);
        defaultArray[index] = $(this);
    })

    $('.top>ul>li').each(function (index) {
        $(this).click(function () {
            removeAllClass();
            $(this).addClass(`sortBtn${index+1}`);
            if(index==0){
                $('.content').empty();
                for(let i=0;i<defaultArray.length;i++){
                    $('.content').append(defaultArray[i])
                }
                return;
            }
            if(index==1){
                for(let i=0;i<array.length;i++){
                    for (let j=0;j<array.length-i-1;j++){
                        let text1 = array[j].context.innerText;
                        let start1 = text1.search('¥')+1;
                        let end1 = text1.search('\n');
                        let text2 = array[j+1].context.innerText;
                        let start2 = text2.search('¥')+1;
                        let end2 = text2.search('\n');
                        if(parseFloat(text1.slice(start1,end1)) < parseFloat(text2.slice(start2,end2))){
                            console.log(parseFloat(text1.slice(start1,end1)),parseFloat(text2.slice(start2,end2)))
                            let temp = array[j+1];
                            array[j+1]=array[j];
                            array[j]=temp;
                        }
                    }
                }
            }else if(index==2){
                for(let i=0;i<array.length;i++){
                    for (let j=0;j<array.length-i-1;j++){
                        let text1 = array[j].context.innerText;
                        let start1 = text1.search('¥')+1;
                        let end1 = text1.search('\n');
                        let text2 = array[j+1].context.innerText;
                        let start2 = text2.search('¥')+1;
                        let end2 = text2.search('\n');
                        if(parseFloat(text1.slice(start1,end1)) > parseFloat(text2.slice(start2,end2))){
                            let temp = array[j+1];
                            array[j+1]=array[j];
                            array[j]=temp;
                        }
                    }
                }
            }
            $('.content').empty();
            for(let i=0;i<array.length;i++){
                $('.content').append(array[i])
            }
        })
    });
})

function removeAllClass() {
    $('.sortBtn').removeClass(`sortBtn1`);
    $('.sortBtn').removeClass(`sortBtn2`);
    $('.sortBtn').removeClass(`sortBtn3`);
}