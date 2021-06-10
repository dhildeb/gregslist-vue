<template>
  <div v-if="car">
    <Car :car="car" />
  </div>
  <div v-else>
    loading....
  </div>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { carsService } from '../services/CarsService'
import { AppState } from '../AppState'
export default {
  setup() {
    const route = useRoute()

    watchEffect(() => {
      carsService.getCarById(route.params.id)
    })
    return {
      car: computed(() => AppState.activeCar)
    }
  }
}
</script>

<style>

</style>
