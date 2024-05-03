<template>
    <div class="main">
        <Nabvar></Nabvar>
        <h3 class="text-center mt-5">Friends</h3>
        <div class="d-flex justify-content-between flex-wrap">
            <div class="border border-dark rounded-5 m-3 p-3" style="width: 30%;">
                <div class="d-flex">
                    <img src="@/assets/logo.webp" class="rounded-5" alt="" width="50">
                    <p class="m-2 ms-5 border-bottom">Lama </p>
                    <button class="btn  rounded-5 text-light  px-4 ms-5">Delete</button>
                </div>
        </div>
        <div class="border border-dark rounded-5 m-3 p-3" style="width: 30%;">
                <div class="d-flex">
                    <img src="@/assets/logo.webp" class="rounded-5" alt="" width="50">
                    <p class="m-2 ms-5 border-bottom">Lama </p>
                    <button class="btn  rounded-5 text-light  px-4 ms-5">Delete</button>
                </div>
        </div>
        <div class="border border-dark rounded-5 m-3 p-3" style="width: 30%;">
                <div class="d-flex">
                    <img src="@/assets/logo.webp" class="rounded-5" alt="" width="50">
                    <p class="m-2 ms-5 border-bottom">Lama </p>
                    <button class="btn  rounded-5 text-light  px-4 ms-5">Delete</button>
                </div>
        </div>
        <div class="border border-dark rounded-5 m-3 p-3" style="width: 30%;">
                <div class="d-flex">
                    <img src="@/assets/logo.webp" class="rounded-5" alt="" width="50">
                    <p class="m-2 ms-5 border-bottom">Lama </p>
                    <button class="btn  rounded-5 text-light  px-4 ms-5">Delete</button>
                </div>
        </div>
        </div>
        <h3 class="text-center mt-5">Requests</h3>
        <div class="d-flex justify-content-between flex-wrap">
            <div class="border border-dark rounded-5 m-3 p-3" style="width: 30%;">
                <div class="d-flex">
                    <img src="@/assets/logo.webp" class="rounded-5" alt="" width="50">
                    <p class="m-2 ms- border-bottom">Lama </p>
                    <button class="btn  rounded-5 text-light  me-1">Delete</button>
                    <button class="btn  rounded-5 text-light  me-1">Accept</button>
                </div>
        </div>
        <div class="border border-dark rounded-5 m-3 p-3" style="width: 30%;">
                <div class="d-flex">
                    <img src="@/assets/logo.webp" class="rounded-5" alt="" width="50">
                    <p class="m-2 ms- border-bottom">Lama </p>
                    <button class="btn  rounded-5 text-light  me-1">Delete</button>
                    <button class="btn  rounded-5 text-light  me-1">Accept</button>
                </div>
        </div>
        <div class="border border-dark rounded-5 m-3 p-3" style="width: 30%;">
                <div class="d-flex">
                    <img src="@/assets/logo.webp" class="rounded-5" alt="" width="50">
                    <p class="m-2 ms- border-bottom">Lama </p>
                    <button class="btn  rounded-5 text-light  me-1">Delete</button>
                    <button class="btn  rounded-5 text-light  me-1">Accept</button>
                </div>
        </div>
        </div>
        <h3 class="text-center mt-5">Public</h3>
        <div class="d-flex justify-content-between flex-wrap">
            <div class="border border-dark rounded-5 m-3 p-3" style="width: 30%;">
                <div class="d-flex">
                    <img src="@/assets/logo.webp" class="rounded-5" alt="" width="50">
                    <p class="m-2 ms-5 border-bottom">Lama </p>
                    <button class="btn  rounded-5 text-light  px-4 ms-2">Request</button>
                </div>
        </div>
        <div class="border border-dark rounded-5 m-3 p-3" style="width: 30%;">
                <div class="d-flex">
                    <img src="@/assets/logo.webp" class="rounded-5" alt="" width="50">
                    <p class="m-2 ms-5 border-bottom">Lama </p>
                    <button class="btn  rounded-5 text-light  px-4 ms-2">Request</button>
                </div>
        </div>
        <div class="border border-dark rounded-5 m-3 p-3" style="width: 30%;">
                <div class="d-flex">
                    <img src="@/assets/logo.webp" class="rounded-5" alt="" width="50">
                    <p class="m-2 ms-5 border-bottom">Lama </p>
                    <button class="btn  rounded-5 text-light  px-4 ms-2">Request</button>
                </div>
        </div>
        <div class="border border-dark rounded-5 m-3 p-3" style="width: 30%;">
                <div class="d-flex">
                    <img src="@/assets/logo.webp" class="rounded-5" alt="" width="50">
                    <p class="m-2 ms-5 border-bottom">Lama </p>
                    <button class="btn  rounded-5 text-light  px-4 ms-2">Request</button>
                </div>
        </div>
        </div>
      
    </div>
</template>

<script setup lang="ts">
import Nabvar from '@/components/Nabvar.vue';
</script>

<style lang="scss" scoped>
.main {
    margin: 20px 80px;
}

.comment {
    margin-bottom: 10px;
}

.comment-author {
    font-weight: bold;
}

.comment-text {
    margin-left: 20px;
}
.btn {
  background-color: #f39999;
  color:white
}
</style>