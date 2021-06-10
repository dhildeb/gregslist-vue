<template>
  <div class="col-4 mt-3">
    <div class="card">
      <img :src="house.imgUrl" />
      <div class="card-body">
        <h1>${{ house.price }}</h1>
        <b>bds: {{ house.bedrooms }} - bths: {{ house.bathrooms }}</b>
        <em> year: {{ house.year }}</em>
        <p>description: {{ house.description }}</p>
      </div>
      <div v-if="account.id">
        <button class="btn btn-warning mx-3" @click="editHouse">
          edit house
        </button>
        <button class="btn btn-danger m-3" @click="deleteHouse">
          delete house
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  props: {
    house: { type: Object, required: true }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      editHouse() {

      },
      deleteHouse() {

      }
    }
  }
}
</script>

<style>

</style>
