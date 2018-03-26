var Task = /** @class */ (function () {
    // description: string;
    // priority: string;
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
        // this.done = false,
        // this.description = description;
        // this.priority = priority;
    }
    return Task;
}());
var tasks = [];
tasks.push(new Task('Do the dishes', 'Medium'));
console.log(tasks);
