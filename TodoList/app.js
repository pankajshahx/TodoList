function addTask(){
    document.getElementById("error").innerHTML = "";

    let input = document.getElementById("todo-input").value;
        if(input==""){
            document.getElementById("error").innerHTML = "Please enter value";

        }else{
            let list = document.getElementById("list");
            let li = document.createElement("li");
            li.textContent = input;

            // let a = document.createElement("a");
            // a.textContent = "X";
            // a.href = "javascript:void(0)";
            // a.className = "remove";
            // li.appendChild(a);
            //complete button
            // const completedButton = document.createElement("button");
            // completedButton.innerHTML = "Complete";
            // completedButton.classList.add("complete-btn");
            // li.appendChild(completedButton);

            //Create trash button
            const trashButton = document.createElement("button");
            trashButton.innerHTML = "Delete";
            trashButton.classList.add("trash-btn");
            li.appendChild(trashButton);





            li.classList.add("todo");
            li.classList.add("todo-item");


            let pos = list.firstElementChild;
            if(pos==null){
                list.appendChild(li);
            }else{
                list.insertBefore(li,pos);
            }


            
        }
        document.getElementById("todo-input").value="";
}

let btn = document.querySelector("ul");
btn.addEventListener("click",function(e){
    let list = document.getElementById("list");
    let li = e.target.parentNode;
    list.removeChild(li);
});
