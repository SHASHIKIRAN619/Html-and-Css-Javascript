const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask(){
    if(inputBox.value===""){
        alert("Sorry...! Cannot be Empty");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = "";
    setdata();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        setdata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        setdata();
    }
})
function setdata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function getdata(){
    listContainer.innerHTML = localStorage.getItem("data");
}
 getdata();