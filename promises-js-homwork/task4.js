class ApiRequest {
    static fetchTodo() {
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(todo => {
                // Замінюємо дані на українські
                todo.title = 'Завдання';
                return todo;
            })
            .catch(error => console.error('Error fetching todo:', error));
    }

    static fetchUser() {
        return fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(user => {
                // Замінюємо дані на українські
                user.name = 'Леся';
                user.username = 'Українка';
                user.email = 'чесний@квітень.ком';
                user.address = {
                    street: 'Хрещатик',
                    suite: 'Кв. 556',
                    city: 'Київ',
                    zipcode: '04000'
                };
                return user;
            })
            .catch(error => console.error('Error fetching user:', error));
    }
}

class AsyncApiRequest {
    static async fetchTodo() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const todo = await response.json();
            // Замінюємо дані на українські
            todo.title = 'Завдання';
            return todo;
        } catch (error) {
            console.error('Error fetching todo:', error);
        }
    }

    static async fetchUser() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const user = await response.json();
            // Замінюємо дані на українські
            user.name = 'Леся';
            user.username = 'Українка';
            user.email = 'чесний@квітень.ком';
            user.address = {
                street: 'Хрещатик',
                suite: 'Кв. 556',
                city: 'Київ',
                zipcode: '04000'
            };
            return user;
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }
}

// Тестуємо клас ApiRequest
ApiRequest.fetchTodo().then(todo => console.log('Todo:', todo));
ApiRequest.fetchUser().then(user => console.log('User:', user));

// Тестуємо клас AsyncApiRequest
AsyncApiRequest.fetchTodo().then(todo => console.log('Todo (Async):', todo));
AsyncApiRequest.fetchUser().then(user => console.log('User (Async):', user));