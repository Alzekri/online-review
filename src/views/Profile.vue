<template>
    <div class="main">
        <Nabvar></Nabvar>
        <div class="d-flex p-3 justify-content-around bg-secondary rounded-5 m-2">
            <img src="@/assets/logo.webp" alt="" width="100" >
            <h3 class="text-light mt-4  ">Albatool </h3>
            <h3 class="text-light mt-4  ">12 Posts </h3>
            <router-link to="/create" class="text-decoration-none"><h3 class="text-light mt-4  ">+ADD </h3>
</router-link>
        </div>

        <div class="d-flex justify-content-between flex-wrap">
        
        
            <div class="border border-dark rounded-5 m-3 p-3" style="width: 30%;">
                <div class="d-flex">
                    <img src="@/assets/logo.webp" class="rounded-5" alt="" width="50">
                    <p class="m-2 ms-5 border-bottom">Albatool</p>
                </div>
                <div class="d-flex justify-content-between mt-5">
                    <div>
                        <p class="text-center">Befor</p>
                        <img src="@/assets/logo.webp" class="rounded-5" alt="" width="130">
                    </div>
                    <div>
                        <p class="text-center">After</p>
                        <img src="@/assets/logo.webp" class="rounded-5" alt="" width="130">
                    </div>
                </div>
                <div class="comments mt-5">
                    <div class="comment">
                        <div class="comment-author">David Johnson</div>
                        <div class="comment-text">Impressive transformation!</div>
                    </div>
                    <div class="comment">
                        <div class="comment-author">Sarah Thompson</div>
                        <div class="comment-text">You look amazing!</div>
                    </div>
                    <div class="p-3"> <input type=" text" class="form-control rounded-5" placeholder="Write Your Comment">
                    </div>
                </div>
            </div>
            <div class="border border-dark rounded-5 m-3 p-3" style="width: 30%;">
                <div class="d-flex">
                    <img src="@/assets/logo.webp" class="rounded-5" alt="" width="50">
                    <p class="m-2 ms-5 border-bottom">Albatool</p>
                </div>
                <div class="d-flex justify-content-between mt-5">
                    <div>
                        <p class="text-center">Befor</p>
                        <img src="@/assets/logo.webp" class="rounded-5" alt="" width="130">
                    </div>
                    <div>
                        <p class="text-center">After</p>
                        <img src="@/assets/logo.webp" class="rounded-5" alt="" width="130">
                    </div>
                </div>
                <div class="comments mt-5">
                    <div class="comment">
                        <div class="comment-author">David Johnson</div>
                        <div class="comment-text">Impressive transformation!</div>
                    </div>
                    <div class="comment">
                        <div class="comment-author">Sarah Thompson</div>
                        <div class="comment-text">You look amazing!</div>
                    </div>
                    <div class="p-3"> <input type=" text" class="form-control rounded-5" placeholder="Write Your Comment">
                    </div>
                </div>
            </div>
            <div class="border border-dark rounded-5 m-3 p-3" style="width: 30%;">
                <div class="d-flex">
                    <img src="@/assets/logo.webp" class="rounded-5" alt="" width="50">
                    <p class="m-2 ms-5 border-bottom">Albatool</p>
                </div>
                <div class="d-flex justify-content-between mt-5">
                    <div>
                        <p class="text-center">Befor</p>
                        <img src="@/assets/logo.webp" class="rounded-5" alt="" width="130">
                    </div>
                    <div>
                        <p class="text-center">After</p>
                        <img src="@/assets/logo.webp" class="rounded-5" alt="" width="130">
                    </div>
                </div>
                <div class="comments mt-5">
                    <div class="comment">
                        <div class="comment-author">David Johnson</div>
                        <div class="comment-text">Impressive transformation!</div>
                    </div>
                    <div class="comment">
                        <div class="comment-author">Sarah Thompson</div>
                        <div class="comment-text">You look amazing!</div>
                    </div>
                    <div class="p-3"> <input type=" text" class="form-control rounded-5" placeholder="Write Your Comment">
                    </div>
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
</style>