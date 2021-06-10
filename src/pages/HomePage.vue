<template>
  <div class="home fex-grow-1 flex-column align-items-center justify-content-center">
    <h1 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
      <span class="mx-2 text-white">
        welcome to gregslist
      </span>
    </h1>
    <p>shop cars, houses, jobs and other junk</p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}

</style>
