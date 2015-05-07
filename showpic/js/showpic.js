/**
 * Created by junxi on 2015/4/12.
 */

function showPic(whichpic){
    var source =whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source) // 使用setAttribute对placeholder元素的属性进行刷新；
    var text=whichpic.getAttribute("title");
    var description=document.getElementById("description");
    description.firstChild.nodeValue=text;
}



//function countBodyChildren(){
//    var body_element=document.getElementsByTagName("body")[0];
//    alert(description.firstChild.nodeValue)
//
//}
//window.onload= countBodyChildren;