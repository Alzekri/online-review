<template>
  <div class="d-flex first pb-2">
    <img class="imgg" src="@/assets/logo.webp" alt="">
    <p class="m-3 mt-4">REVIEW</p>
    <div class="pt-3 ms-5 ps-5">
      <router-link to="/posts" class="btn  ms-5 me-4" exact> FOR YOU</router-link>
      <router-link to="/friends" class="btn   me-4"> YOUR FRIEND</router-link>
      <router-link to="/search" class="btn   me-4"> SEARCH</router-link>
      <router-link to="/profile" class="btn   me-4"> YOUR PROFILE</router-link>
      <router-link to="/signIn" class="btn   me-4"> LOGOUT</router-link>
    </div>
  </div>
</template>
   
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.imgg {
  height: 60px;
  width: 60px;
}

.first {
  border-bottom: 2px solid rgb(0, 0, 0);
}
 
.btn {
  background-color: #f39999;
  color: white;
}
</style>