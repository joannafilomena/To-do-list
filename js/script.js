let list = document.querySelector(".list");
let addTaskButton = document.querySelector(".addTask");
let inputTask = document.querySelector(".input");
let removeTaskButtons = null;


products = [];

addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();

    products.push(inputTask.value);

    list.innerHTML = "";

    products.forEach((product) => {

        list.innerHTML += "<li><button class=\"undone\"></button>" + product + "<button class=\"bin\">Usuń</buton></li>";

    });

    checkButtons = document.querySelectorAll(".undone");
    checkButtons.forEach((checkButton) => {
        checkButton.addEventListener("click", () => {
            checkButton.classList.toggle("done");
        });
    });


    removeTaskButtons = document.querySelectorAll(".bin");
    removeTaskButtons.forEach((removeButton, index) => {
        removeButton.addEventListener("click", () => {
            
            products.splice(index, 1);
            list.innerHTML = "";
            products.forEach((product) => {
        
                list.innerHTML += "<li><button class=\"undone\"></button>" + product + "<button class=\"bin\">Usuń</buton></li>";
        
            });
        });
    });



})



