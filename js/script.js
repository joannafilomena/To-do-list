let list = document.querySelector(".list");
let addTaskButton = document.querySelector(".addTask");
let inputTask = document.querySelector(".input");
let removeTaskButtons = null;
let li = null;
products = [];

addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();

    products.push(inputTask.value);
    list.innerHTML = "";

    products.forEach((product) => {

        list.innerHTML += "<li>" + product + "<button class=\"bin\">Usuń</buton></li>";
    });

    removeTaskButtons = document.querySelectorAll(".bin");

    removeTaskButtons.forEach((removeButton) => {
        removeButton.addEventListener("click", (li) => {
            li = document.querySelector("li");
            li.remove();
        });
    });
})


/*removeTaskButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", (event) => {
        event.preventDefault();
        products.splice(inputTask.value);
    })
})*/

