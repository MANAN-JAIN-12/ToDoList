let inputBox=document.getElementById("INPUT");
let add=document.querySelector(".inputBox button");
let task=document.querySelector(".checked");
const listContainer=document.getElementById("list-container");
add.addEventListener("click",()=>{
    if(inputBox.value==''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
     saveData();
})
inputBox.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        add.click();
    }
})
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();     
    }
    saveData();
},false)
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();