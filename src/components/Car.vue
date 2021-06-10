<template>
  <div class="col-lg-4 col-6 listing my-3">
    <div class="card">
      <div>
        <router-link :to="{name: 'Car', params: {id: car.id}}">
          <img class="img-fluid" :src="car.imgUrl" />
        </router-link>
      </div>
      <div class="card-body">
        <p>
          <b>{{ car.make }} {{ car.model }}</b>
          <span>{{ car.year }}</span>
        </p>
        <p>
          <em>${{ car.price.toFixed(2) }}</em>
        </p>
        <p>{{ car.description }}</p>
      </div>

      <div v-if="account.id">
        <button class="btn btn-warning mx-3" @click="editCar">
          edit car
        </button>
        <button class="btn btn-danger m-3" @click="deleteCar">
          delete car
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { carsService } from '../services/CarsService'
export default {
  props: {
    car: { type: Object, required: true }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      editCar() {
        carsService.updateCar(props.car)
      },
      deleteCar() {
        carsService.deleteCar(props.car.id)
      }
    }
  }
}
</script>

<style>

</style>
