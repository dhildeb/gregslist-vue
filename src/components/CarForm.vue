<template>
  <form class="col-12" @submit.prevent="addCar(state.car, account.id, account.name)">
    <input v-model="state.car.make" type="text" id="make" placeholder="make">
    <input v-model="state.car.model" type="text" id="model" placeholder="model">
    <input v-model="state.car.year"
           type="number"
           id="year"
           placeholder="year"
           maxlength="9999"
           minlength="0000"
    >
    <input v-model="state.car.price" type="number" id="price" placeholder="price">
    <input v-model="state.car.description" type="text" id="description" placeholder="description">
    <input v-model="state.car.imgUrl" type="text" id="imgUrl" placeholder="image">
    <button class="btn btn-primary">
      add car
    </button>
  </form>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { carsService } from '../services/CarsService'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  // props: {
  //   car: {type: Object,
  //     make: { type: Object, reuired: true },
  //     model: { type: Text, reuired: true },
  //     year: { type: Text, reuired: true },
  //     price: { type: Text, reuired: true },
  //     description: { type: Text, reuired: true },
  //     imgUrl: { type: Text, reuired: true }
  //   }
  // },
  setup() {
    const state = reactive({
      car: {
        make: '',
        model: '',
        year: '',
        price: '',
        description: '',
        imgUrl: ''
      }

    })
    return {
      state,
      account: computed(() => AppState.account),
      addCar(rawCar, id, name) {
        const accountInfo = { creatorId: id, creator: name }
        const carData = Object.assign(rawCar, accountInfo)
        carsService.addCar(carData)
        state.car = {}
      }
    }
  }

}
</script>

<style>

</style>
