let list = document.querySelector(".list");
let addTaskButton = document.querySelector(".addTask");
let inputTask = document.querySelector(".input");

products = [];

addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();

    products.forEach((product) => {
        list.innerHTML += "<li>" + product + "</li>";
    });
    products.push(inputTask.value);

})

/*let removeTaskButton = document.querySelector(".bin");

    removeTaskButton.addEventListener("click", (event) => {
        event.preventDefault();
        products.forEach((product) => {
            list.innerHTML = "";
        });
    })*/