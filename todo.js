let task=document.querySelector("#Task");
let btn=document.querySelector("#Adding");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
// created li
    let lists=document.createElement("li");
   lists.classList.add("tasks") 
    lists.innerText=task.value;
    task.value="";
    ul.appendChild(lists);
   


// created input
let checkbox=document.createElement("input");
checkbox.classList.add("task-checkbox");
checkbox.type="checkbox";

lists.appendChild(checkbox);
if(checkbox.checked){
checkbox.style.backgroundColor="green";
}
else{
    checkbox.style.backgroundColor="white";
}

// created button
  
    let delBtn=document.createElement("button");
    delBtn.classList.add("task-del-btn")
    delBtn.innerText="delete";
    
    lists.appendChild(checkbox);
   lists.appendChild(delBtn);
    


});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let taskList=event.target.parentElement;
        taskList.remove();
    }
});
