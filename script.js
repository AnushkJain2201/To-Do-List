const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


const addTask = () => {
    if(inputBox.value === ""){
        alert("Andha Hai Kya ❤️day");
    }
    else{
        let li = document.createElement('li');
        li.className = "list-none text-lg pt-3 pl-7 pr-3 pb-5 cursor-pointer select-none relative before:content-[''] before:absolute before:h-7 before:w-7 before:rounded-full before:bg-[url('/images/unchecked.png')] before:bg-cover before:bg-center before:top-3 before:-left-1"
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.className = "absolute right-0 top-1 w-10 h-10 text-lg text-black leading-10 text-center rounded-full hover:bg-gray-200"
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value= "";
    saveData();
    
}

listContainer.addEventListener("click" , (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

const saveData = () => {
    localStorage.setItem("Data" , listContainer.innerHTML);
}

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("Data");
}

showTask();