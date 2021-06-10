<template>
  <form @submit.prevent="addHouse">
    <input class="form-group" type="number" placeholder="price" id="price" v-model="state.house.price">
    <input class="form-group" type="number" placeholder="bedrooms" id="bedrooms" v-model="state.house.bedrooms">
    <input class="form-group" type="number" placeholder="bathrooms" id="bathrooms" v-model="state.house.bathrooms">
    <input class="form-group" type="number" placeholder="year" id="year" v-model="state.house.year">
    <input class="form-group" type="text" placeholder="image" id="imgUrl" v-model="state.house.imgUrl">
    <input class="form-group" type="text" placeholder="description" id="description" v-model="state.house.description">
    <button class="btn btn-primary" type="submit">
      add house
    </button>
  </form>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { housesService } from '../services/HousesService'
export default {
  setup() {
    const state = reactive({
      house: {
        price: '',
        bedrooms: '',
        bathrooms: '',
        year: '',
        imgUrl: '',
        description: ''
      }
    })
    return {
      state,
      addHouse() {
        housesService.addHouse(state.house)
      }
    }
  }
}
</script>

<style>

</style>
