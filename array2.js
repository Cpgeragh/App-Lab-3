var Todo = /** @class */ (function () {
    function Todo() {
        this.Tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.Tasks.push(task);
        console.log("Task " + task + " add to my Tasks Array.");
        return this.Tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.Tasks.forEach(function (item) {
            console.log(item);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log("Task " + task + " removed from array.");
        }
        else {
            console.log("Task " + task + " not present in array.");
        }
        return this.Tasks.length;
    };
    return Todo;
}());
var myTodo = new Todo();
myTodo.addTask("Eat");
myTodo.addTask("Work");
myTodo.addTask("Sleep");
myTodo.listAllTasks();
myTodo.deleteTask("Work");
myTodo.listAllTasks();
