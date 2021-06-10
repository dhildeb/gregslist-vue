import { AppState } from '../AppState.js'
import { Car } from '../Models/Car.js'
import { api } from './AxiosService.js'

class CarsService {
  async getCars() {
    const res = await api.get('api/cars')
    AppState.cars = res.data.map(c => new Car(c))
  }

  async GetCarById(id) {
    const res = await api.get('api/cars/' + id)
    AppState.activeCar = new Car(res.data)
  }

  async addCar(formData) {
    console.log(formData)
    const res = await api.post('api/cars', formData)
    console.log(res.data)
    const newCar = new Car(res.data)
    AppState.cars = [newCar, ...AppState.cars]
  }

  async updateCar(formData) {
    const res = await api.put('api/cars/' + formData.id, formData)
    const i = AppState.cars.indexOf(formData.id)
    AppState.cars.splice(i, 1, new Car(res.data))
  }

  async deleteCar(id) {
    await api.delete('api/cars/' + id)
    AppState.cars = AppState.cars.filter(c => c.id !== id)
  }
}

export const carsService = new CarsService()
