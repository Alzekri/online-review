<template>
    <div class="main">
        <Nabvar></Nabvar>
        <div class="d-flex p-3 justify-content-around bg-secondary rounded-5 m-2">
            <img :src="logo" alt="" width="100">
            <h3 class="text-light mt-4  ">{{ name }} </h3>
            <h3 class="text-light mt-4  ">{{posts.length}} Posts </h3>
            <router-link to="/create" class="text-decoration-none">
                <h3 class="text-light mt-4  ">+ADD </h3>
            </router-link>
        </div>

        <div class="d-flex justify-content-between flex-wrap">

            <div v-for="post in posts" :key="post.post_id"  class="border border-dark rounded-5 m-3 p-3"
                style="width: 30%;">
                <div class="d-flex mb-2">
                    <img src="@/assets/avatar.jpg" class="rounded-5" alt="" width="50">
                    <p class="m-2 mx-5 border-bottom">{{ post.user_name }}</p>
                    <a class="m-2" :href="post.post_link"> click to open</a>
                </div>
                <h6>{{ post.post_title }}</h6>
                <p>{{ post.post_description }}</p>
                <div class="d-flex justify-content-between mt-2">
                    <div>
                        <p class="text-center">Befor</p>
                        <img :src="post.post_img" class="rounded-5" alt="" width="130">
                    </div>
                    <div>
                        <p class="text-center">After</p>
                        <img :src="post.post_img2" class="rounded-5" alt="" width="130">
                    </div>
                </div>
                <div class="comments mt-5">
                    <div class="comment" v-for="comment in post.comments" :key="comment.comment_id">
                        <div class="comment-author">{{ comment.comment_user_name }}</div>
                        <div class="comment-text">{{ comment.comment_content }}</div>
                        <hr class="mx-5 ">
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

import { ref, onMounted } from 'vue';
import axios from 'axios';

const posts = ref([]);



const fetchPosts = async () => {
    try {
        const response = await axios.post('http://localhost/onlineReview_api/api/posts/read_user.php', {
            user_id: localStorage.getItem("userId"),
        });
        posts.value = response.data.data;
    } catch (error) {
        console.error('Failed to fetch friends posts:', error);
    }
};


onMounted(() => {
    fetchPosts();
});

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
    color: white
}
</style>