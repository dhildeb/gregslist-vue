import { AppState } from '../AppState.js'
import { House } from '../Models/House.js'
import { api } from './AxiosService.js'

class HousesService {
  async getHouses() {
    const res = await api.get('api/houses')
    AppState.houses = res.data.map(h => new House(h))
  }

  async addHouse(formData) {
    console.log(formData)
    const res = await api.post('api/houses', formData)
    console.log(res.data)
    const newHouse = new House(res.data)
    AppState.houses = [newHouse, ...AppState.houses]
  }

  async updateHouse(formData) {
    const res = await api.put('api/houses/' + formData.id, formData)
    const i = AppState.houses.indexOf(formData.id)
    AppState.houses.splice(i, 1, new House(res.data))
  }

  async deleteHouse(id) {
    await api.delete('api/houses/' + id)
    AppState.houses = AppState.houses.filter(h => h.id !== id)
  }
}

export const housesService = new HousesService()
