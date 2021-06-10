<template>
  <div class="container-fluid">
    <div class="row" v-if="account.id">
      <HouseForm />
    </div>
    <div class="row">
      <House v-for="house in houses" :key="house.id" :house="house" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { housesService } from '../services/HousesService'
import { AppState } from '../AppState'
export default {
  name: 'Houses',
  setup() {
    onMounted(() => {
      housesService.getHouses()
    })
    return {
      account: computed(() => AppState.account),
      houses: computed(() => AppState.houses)
    }
  }
}
</script>

<style>

</style>
