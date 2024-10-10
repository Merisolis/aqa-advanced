const axios = require('axios');

const baseURL = 'https://qauto.forstudy.space/api'; // Укажите базовый URL вашего API
let token = ''; // Токен для авторизации

// Функция для регистрации пользователя
async function registerUser() {
    const userData = {
        name: 'Mariia',
        lastName: 'Horiunova',
        email: 'mariya.vivchar@gmail.com',
        password: 'Qwerty12345',
        repeatPassword: 'Qwerty12345'
    };
    
    await axios.post(`${baseURL}/register`, userData);
}

// Функция для получения токена
async function loginUser() {
    const loginData = {
        email: 'mariya.vivchar@gmail.com',
        password: 'Qwerty12345'
    };

    const response = await axios.post(`${baseURL}/login`, loginData);
    token = response.data.token; // Сохраняем токен для использования в тестах
}

// Функция для создания машины
async function createCar(carData) {
    return await axios.post(`${baseURL}/cars`, carData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

// Функция для удаления машины
async function deleteCar(carId) {
    return await axios.delete(`${baseURL}/cars/${carId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

// Тесты
describe('Car API Tests', () => {
    let createdCarId = null;

    beforeAll(async () => {
        await registerUser();
        await loginUser();
    });

    afterAll(async () => {
        if (createdCarId) {
            await deleteCar(createdCarId); // Удаление тестовой машины
        }
    });

    test('Positive Scenario: Create car with valid data', async () => {
        const carData = {
            brand: 'Toyota',
            model: 'Camry',
            year: 2020,
            price: 30000
        };

        const response = await createCar(carData);
        expect(response.status).toBe(201);
        expect(response.data).toHaveProperty('id');
        createdCarId = response.data.id; // Сохраняем ID созданной машины
    });

    test('Negative Scenario: Create car without brand', async () => {
        const carData = {
            model: 'Camry',
            year: 2020,
            price: 30000
        };

        await expect(createCar(carData)).rejects.toThrow(); // Проверяем, что вызов вызывает ошибку
    });

    test('Negative Scenario: Create car with invalid year', async () => {
        const carData = {
            brand: 'Toyota',
            model: 'Camry',
            year: 'invalidYear',
            price: 30000
        };

        await expect(createCar(carData)).rejects.toThrow(); // Проверяем, что вызов вызывает ошибку
    });

    test('Negative Scenario: Create car with price less than zero', async () => {
        const carData = {
            brand: 'Toyota',
            model: 'Camry',
            year: 2020,
            price: -1000
        };

        await expect(createCar(carData)).rejects.toThrow(); // Проверяем, что вызов вызывает ошибку
    });
});