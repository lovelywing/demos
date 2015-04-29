var oImagesUl=document.getElementById("slider"); //获取到id为slider的标签；
var aImages=oImagesUl.getElementsByTagName("li");  //获取在slider下的li标签；

var indexOl=document.getElementsByTagName("ol")[0];  //为什么是ol的第0位，由于获取的是一个数组，读取数组从第一个开始；
var aIndex=indexOl.getElementsByTagName("li");  //获取ol下的li标签；

//通过循环，给每个数字绑定上鼠标移动事件
for(var i=0; i<aIndex.length; i++){  //通过遍历aIndex数组的长度获得对应的位数
    aIndex[i].index=i   // 这里的index主要意思是将aIndex的值赋予给index的意思；
    aIndex[i].onmouseover=function(){
        for(var j=0; j<aImages.length; j++){
            aImages[j].style.display="none"; //将所有图片隐藏掉；
        }
        aImages[this.index].style.display="block"  // 在将对应的图显示出来；
    }
}