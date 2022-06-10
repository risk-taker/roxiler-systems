const fetch = require('node-fetch');

const controller = {
    async todos(req, res, next) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();
        const newTodos = todos.map(item => {

            return {
                id: item.id,
                title: item.title,
                completed: item.completed
            }
        })
        res.json(newTodos);
    },
    async user(req, res, next) {
        var id = req.params.id;
        console.log
        //server request for todos
        const responseTodos = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await responseTodos.json();

        //server request for user
        const responseUser = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await responseUser.json();

        const userItem = todos.filter((item) => item.userId === +id);

        user.todos = userItem;

        res.json(user);
    }
}

module.exports = controller;