function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(todo => {

            return {
                userId: todo.userId,
                id: todo.id,
                title: 'Завдання',
                completed: todo.completed
            };
        })
        .catch(error => console.error('Error fetching todo:', error));
}

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(user => {
            return {
                name: 'Леся',
                username: 'Українка',
                email: 'чесний@квітень.ком',
                address: {
                    street: 'Хрещатик',
                    suite: 'Кв. 556',
                    city: 'Київ',
                    zipcode: '04000'
                }
            };
        })
        .catch(error => console.error('Error fetching user:', error));
}

Promise.all([fetchTodo(), fetchUser()])
    .then(([todo, user]) => {
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch(error => console.error('Error in Promise.all:', error));

Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
        console.log('First resolved:', result);
    })
    .catch(error => console.error('Error in Promise.race:', error));
