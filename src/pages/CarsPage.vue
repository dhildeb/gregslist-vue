<template>
  <div class="container-fluid">
    <div class="row" v-if="account.id">
      <CarForm />
    </div>
    <div class="row">
      <Car v-for="car in cars" :key="car.id" :car="car" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { carsService } from '../services/CarsService'
import { AppState } from '../AppState'
export default {
  setup() {
    onMounted(() => {
      carsService.getCars()
    })
    return {
      account: computed(() => AppState.account),
      cars: computed(() => AppState.cars)
    }
  }
}
</script>

<style>

</style>
