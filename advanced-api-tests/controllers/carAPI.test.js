const { CarsController } = require("./CarsController");

const carsController = new CarsController()

describe('Check Cars API', () => {
    beforeAll(async () => {
        await carsController.login(); 
    });

    afterAll(async () => {
        const carsResponse = await carsController.getCars();
        const carIds = carsResponse.data.data.map((c) => c.id);
        for (const carId of carIds) {
            try {
                await carsController.deleteCarById(carId); 
            } catch (error) {
                console.error(`Failed to delete car with id: ${carId}`, error);
            }
        }
    });

    test('User can get all cars', async () => {
        const carsResponse = await carsController.getCars(); 
        expect(carsResponse.status).toBe(200);
    });

    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars(); 
        const carList = [...carsResponse.data.data];
        const newCarResponse = await carsController.createCar(1, 1, 1020); 
        carsResponse = await carsController.getCars(); 
        const newCarList = carsResponse.data.data;
        expect(newCarList.length).toBe(carList.length + 1);
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined();
    });

    test('User can get brands', async () => {
        const carsResponse = await carsController.getBrands();
        expect(carsResponse.status).toBe(200);
    });

    test('User can get models', async () => {
        const carsResponse = await carsController.getModels(); 
        expect(carsResponse.status).toBe(200);
    });

    test('Get not exist brand', async () => {
        const carsResponse = await carsController.getBrandById("not-exist-brand"); 
        expect(carsResponse.status).toBe(404);
    });

    test('Get not exist model', async () => {
        const carsResponse = await carsController.getModelById("not-exist-model");
        expect(carsResponse.status).toBe(404);
    });

    test('Get not exist car', async () => {
        const carsResponse = await carsController.getCarById("not-exist-car"); 
        expect(carsResponse.status).toBe(404);
    });
});

const objectWithCircularReferences = { CarsController };
const jsonString = JSON.stringify(objectWithCircularReferences);