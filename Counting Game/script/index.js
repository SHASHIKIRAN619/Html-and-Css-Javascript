let countchild = document.getElementById("countchld");

let btn1 = document.getElementById("clickbtn");
let count=0;
btn1.addEventListener('click',()=>{
    count++;
    countchild.innerHTML=`<h1>Count:${count}</h1>`;
})

let btn2 = document.getElementById("clickbtn1");
btn2.addEventListener('click',()=>{
    count--;
    countchild.innerHTML=`<h1>Count: ${count}</h1>`;
})