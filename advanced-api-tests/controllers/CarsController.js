const { BaseController } = require('./BaseController');

class CarsController extends BaseController{
    constructor() {
        super()
        this.API_CARS = '/cars'
        this.API_MODELS = '/cars/models'
        this.API_MODELS_ID = '/cars/models/{id}'
        this.API_BRANDS = '/cars/brands'
        this.API_BRANDS_ID = '/cars/brands/{id}'
        this.API_CARS_ID = '/cars/{id}'
    }

    async getCars() {
        return this.get(this.API_CARS)
    }

    async getCarById(id) {
        return this.get(this.API_CARS_ID.replace('{id}', id))
    }

    async getModels() {
        return this.get(this.API_MODELS)
    }
    async getModelById(id) {
        return this.get(this.API_MODELS_ID.replace('{id}', id))
    }
    async getBrands() {
        return this.get(this.API_BRANDS)
    }
    async getBrandById(id) {
        return this.get(this.API_BRANDS_ID.replace('{id}', id))
    }

    async createCar(carBrandId, carModelId, mileage) {
        return this.post(this.API_CARS, {
            carBrandId,
            carModelId,
            mileage,
        })
    }

    async deleteCarById(id) {
        return this.delete(this.API_CARS_ID.replace('{id}', id))
    }
}

module.exports.CarsController = CarsController