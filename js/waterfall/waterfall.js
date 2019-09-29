window.onload = function(){
    imgLocation();

    let imgData = {'data':[{'src':'images/40.jpg'},{'src':'images/41.jpg'},{'src':'images/42.jpg'},
            {'src':'images/43.jpg'},{'src':'images/44.jpg'},{'src':'images/45.jpg'},{'src':'images/46.jpg'}]};
    window.onresize = function(){
        imgLocation();
    }
    window.onscroll = function () {
        if(checkFlag()){
            let container = document.getElementById('container');

            for(let i = 0; i < imgData.data.length; i++){
                let box = document.createElement('div');
                box.className = 'box';
                container.appendChild(box);
                let box_img = document.createElement('div');
                box_img.className = 'box-img';
                box.appendChild(box_img);
                let img = document.createElement('img');
                img.src = imgData.data[i].src;
                box_img.appendChild(img);
            }
            imgLocation('container','box');
        }
    }
}

function checkFlag() {
    let cParent = document.getElementById('container');
    let cChild = getChildNode(cParent,'box');
    let lastChildHeight = cChild[cChild.length - 1].offsetTop;
    let pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    if(lastChildHeight < pageHeight + scrollHeight){
        return true;
    }
    return false
}

function imgLocation() {
    let cParent = document.getElementById('container');
    let cChild = getChildNode(cParent,'box');
    let width = cChild[0].offsetWidth;
    let  clientwidth = document.documentElement.clientWidth || document.body.clientWidth
    let cols = Math.floor(clientwidth / width);
    cParent.style.cssText = `width:${width * cols}px;margin:0 auto;`;
    let boxHeightArr = [];

    for(let i = 0; i < cChild.length; i++){
        if(i < cols){
            boxHeightArr[i] = cChild[i].offsetHeight;
            cChild[i].style.position = 'absolute';
            cChild[i].style.left = `${i * width}px`;
            cChild[i].style.top = `0px`;
        }else{
            let minHeight = Math.min(...boxHeightArr);
            let minIndex = getMinHeightLocation(boxHeightArr,minHeight);
            cChild[i].style.position = 'absolute';
            cChild[i].style.left = `${minIndex * width}px`;
            cChild[i].style.top = `${minHeight}px`;
            boxHeightArr[minIndex] = boxHeightArr[minIndex] + cChild[i].offsetHeight;
        }
    }
}

function getMinHeightLocation(boxHeightArr,minHeight) {
    for(let i in boxHeightArr){
        if(boxHeightArr[i] == minHeight)
            return i;
    }
}

function getChildNode(cParent,child) {
    let childArr = [];
    let childNodes = cParent.childNodes;

    for(let i = 0; i<childNodes.length; i++){
        if(childNodes[i].className == child){
            childArr.push(childNodes[i])
        }
    }
    return childArr;
}