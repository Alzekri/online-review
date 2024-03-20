<script setup lang="ts">
</script>
<template>
  <div class="main">
    <div class="first">
      <img src="" alt="img">
      <p>REVIEW</p>
    </div>
    <div class="second row">
      <div class="col">images</div>
      <div class="col">
        <p>REVIEW</p>
        <p>
          Here you will find a platform that collects<br>
          people's experiences about the things you<br>
          want to buy and summarizes for you<br>
          whether these experiences are good or bad<br>
          and saves you time and effort.
        </p>
        <div class="row">
          <button class=" col-2  me-5 btn btn-info">Sign Up</button>
          <button class="col-2 btn btn-info ">Sign in</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.main {
  .first {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .row {
    --bs-gutter-x: 0
  }

  height: 100vh;
  width: 100vw;
}
</style>
