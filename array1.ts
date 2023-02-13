let Tasks: string[] = [];


// method called addtask that adds task to my Tasks Array
function addTask(task: string): number {
    Tasks.push(task);
    console.log("Task " + task + " add to my Tasks Array.")
    return Tasks.length;
}

function listAllTasks(): void {

    // for (let i = 0; i < Tasks.length; i++) {
    //     console.log("Task " + (i + 1) + " is " + Tasks[i]);
    // }

    Tasks.forEach((item) => {

        console.log(item);

    })

}

function deleteTask(task: string): number {

    let index: number = Tasks.indexOf(task);
    if (index > -1) {

        Tasks.splice(index, 1);
        console.log("Task " + task + " removed from array.");

    }

    else {

        console.log("Task " + task + " not present in array.");

    }

    return Tasks.length;

}

addTask("Eat");
addTask("Work");
addTask("Sleep");
listAllTasks();
deleteTask("Eat");
listAllTasks();