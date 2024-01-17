const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("You have to write something!");
    }

    else{
        let li = document.createElement("li");
        taskList.appendChild(li);
        li.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}

taskList.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("Data", taskList.innerHTML)
}

function showTask(){
    taskList.innerHTML = localStorage.getItem("Data");
}

showTask();