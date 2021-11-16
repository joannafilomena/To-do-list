let list = document.querySelector(".list");
let addTaskButton = document.querySelector(".addTask");

let removeTaskButtons = null;

products = [];

const render = () => {
    let htmlString = "";
    for (product of products) {
        htmlString = "<li><button class=\"undone\"></button>" + product + "<button class=\"bin\">Usuń</buton></li>";
    }
    list.innerHTML = htmlString;

    const removeButtons = document.querySelectorAll(".bin");

    removeButtons.forEach((removeButton, index) => {
        removeButton.addEventListener("click", () => {
            removeTask(index);
        });
    });   
};

const removeTask = (index) => {
    products.splice(index, 1);
    render();
}

const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".input").value;
    if (newTaskContent === "") {
        return;
    }

    addNewTask(newTaskContent);
};