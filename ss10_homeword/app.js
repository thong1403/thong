// bài1

// let div = document.getElementById("div");
// let btn = document.getElementById('btn');
// btn.onclick = function(){
//     if(div.style.opacity != 0){
//         div.style.opacity = "0";
//     }else{
//         div.style.opacity = "1";
//     }
// }

// bài 2

// let div = document.getElementById("div");
// let btn = document.getElementById("btn");

// btn.onclick = function changeColor(){
//     var g = document.querySelector('div');
//     var arrayColor = ['red','yellow','pink','gray','black','orange','blue','green','brown','violet','Navy','Lavender','wheat','beige'];
//     var random = arrayColor[randomColor(arrayColor)];
//     g.style.backgroundColor = random
// }
// function randomColor(array){
//     return Math.floor(Math.random()*array.length);
// }

// bài 3

// let div = document.getElementById("div");
// let div1 = document.getElementById("div1");
// let btn = document.getElementById("btn");

// đổi cả màu với nội dung

// btn.onclick = function(){
//     let div = document.getElementById("div");
//     let div1 = document.getElementById("div1");
//     var a;
//     a = div;
//     div = div1;
//     div1 = a;
//     div.setAttribute("id", "div")
//     div1.setAttribute("id", "div1")
//     let c = div.innerText;
//     let d = div1.innerText;
//     var g;
//     g = c;
//     c = d;
//     d = g;
//     div.innerText = c;
//     div1.innerText = d;
// }

// đổi màu

// btn.onclick = function(){
//     let div = document.getElementById("div");
//     let div1 = document.getElementById("div1");
//     var a;
//     a = div;
//     div = div1;
//     div1 = a;
//     div.setAttribute("id", "div")
//     div1.setAttribute("id", "div1")
// }

// đổi nội dung

// btn.onclick = function(){
//     let c = div.innerText;
//     let d = div1.innerText;
//     var g;
//     g = c;
//     c = d;
//     d = g;
//     div.innerText = c;
//     div1.innerText = d;
// }




// bài4

// let btn = document.getElementById("btn");
// btn.onclick = function increaseFontSize() {
//   var p = document.getElementsByTagName("div");
//   for (i = 0; i < p.length; i++) {
//     if (p[i].style.fontSize) {
//       var s = parseInt(p[i].style.fontSize.replace("px", ""));
//     } else {
//       s = 14;
//     }
//     s += 1;
//     p[i].style.fontSize = s + "px";
//   }
// }

