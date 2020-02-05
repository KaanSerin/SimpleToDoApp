var toDoList = $("#toDoList");
var addBtn = $(".btn-primary")[0];
var toDoTextArea = $("#toDoTextArea")[0];
var counter = 0;

// alert("Asdasd");
function addToDo() {
    console.log("clicked");
    var toDo = toDoTextArea.value;
    toDoTextArea.value = "";
    var toDoText = "<li class=\"toDo\"><i  id=\"" + counter + "\"class=\"fas fa-trash\" onclick=\"deleteToDo()\"></i>" + toDo + "</li>";
    counter++;
    toDoList.append(toDoText);
}

$(document).click(function (event) {
    if (parseInt(event.target.id) >= 0) {
        var par = $(event.target).parent();
        par.remove();
    }
});

function deleteToDo() {
    console.log("pressed the trash icon");
}