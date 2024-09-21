async function fetchTodo() {
    try {
        return {
            userId: 1,
            id: 1,
            title: 'Завдання',
            completed: false
        };
    } catch (error) {
        console.error('Error fetching todo:', error);
    }
}

async function fetchUser() {
    try {
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
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}

async function getData() {
    try {
        const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
        console.log('Todo:', todo);
        console.log('User:', user);
    } catch (error) {
        console.error('Error:', error);
    }
}

getData();