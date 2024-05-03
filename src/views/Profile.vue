<template>
    <div class="main">
        <Nabvar></Nabvar>
        <div class="d-flex p-3 justify-content-around bg-secondary rounded-5 m-2">
            <img :src="logo" alt="" width="100">
            <h3 class="text-light mt-4  ">{{ name }} </h3>
            <h3 class="text-light mt-4  ">12 Posts </h3>
            <router-link to="/create" class="text-decoration-none">
                <h3 class="text-light mt-4  ">+ADD </h3>
            </router-link>
        </div>

        <div class="d-flex justify-content-between flex-wrap">

            <div class="border border-dark rounded-5 m-3 p-3" style="width: 30%;">
                <div class="d-flex mb-2">
                    <img src="@/assets/logo.webp" class="rounded-5" alt="" width="50">
                    <p class="m-2 mx-5 border-bottom">Samar Ali</p>
                    <a class="m-2" href="http://localhost:5173/posts"> visit link</a>
                </div>
                <h6>Title</h6>
                <p>Description</p>
                <div class="d-flex justify-content-between mt-2">
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
                        <div class="comment-author">John Smith</div>
                        <div class="comment-text">Great transformation!</div>
                    </div>
                    <div class="comment">
                        <div class="comment-author">Jane Doe</div>
                        <div class="comment-text">Love the new look!</div>
                    </div>
                    <div class="d-flex ">
                        <input type=" text" class="form-control w-75 rounded-5" placeholder="Write Your Comment" />
                        <button class="btn  rounded-5 text-light  px-4 ms-3">post</button>
                    </div>
                </div>
            </div>
            <div class="border border-dark rounded-5 m-3 p-3" style="width: 30%;">
                <div class="d-flex mb-2">
                    <img src="@/assets/logo.webp" class="rounded-5" alt="" width="50">
                    <p class="m-2 mx-5 border-bottom">Samar Ali</p>
                    <a class="m-2" href="http://localhost:5173/posts"> visit link</a>
                </div>
                <h6>Title</h6>
                <p>Description</p>
                <div class="d-flex justify-content-between mt-2">
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
                        <div class="comment-author">John Smith</div>
                        <div class="comment-text">Great transformation!</div>
                    </div>
                    <div class="comment">
                        <div class="comment-author">Jane Doe</div>
                        <div class="comment-text">Love the new look!</div>
                    </div>
                    <div class="d-flex ">
                        <input type=" text" class="form-control w-75 rounded-5" placeholder="Write Your Comment" />
                        <button class="btn  rounded-5 text-light  px-4 ms-3">post</button>
                    </div>
                </div>
            </div>
            <div class="border border-dark rounded-5 m-3 p-3" style="width: 30%;">
                <div class="d-flex mb-2">
                    <img src="@/assets/logo.webp" class="rounded-5" alt="" width="50">
                    <p class="m-2 mx-5 border-bottom">Samar Ali</p>
                    <a class="m-2" href="http://localhost:5173/posts"> visit link</a>
                </div>
                <h6>Title</h6>
                <p>Description</p>
                <div class="d-flex justify-content-between mt-2">
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
                        <div class="comment-author">John Smith</div>
                        <div class="comment-text">Great transformation!</div>
                    </div>
                    <div class="comment">
                        <div class="comment-author">Jane Doe</div>
                        <div class="comment-text">Love the new look!</div>
                    </div>
                    <div class="d-flex ">
                        <input type=" text" class="form-control w-75 rounded-5" placeholder="Write Your Comment" />
                        <button class="btn  rounded-5 text-light  px-4 ms-3">post</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Nabvar from '@/components/Nabvar.vue';
const logo = localStorage.getItem("userImage") 
const name = localStorage.getItem("userName") 
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