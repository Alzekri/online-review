<template>
    <div class="main">
        <Nabvar></Nabvar>
        <div class="dropdown mt-3 ms-5 ">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown"
                aria-expanded="false">
                Filtering
            </button>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><a class="dropdown-item" href="#" @click="selectView('all')">All Posts</a></li>
                <li><a class="dropdown-item" href="#" @click="selectView('friends')">Friends</a></li>
            </ul>
        </div>
        <div class="d-flex justify-content-between flex-wrap">
            <div v-for="post in currentPosts" :key="post.post_id" class="border border-dark rounded-5 m-3 p-3"
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
                        <input v-model="post.newComment" type="text" class="form-control w-75 rounded-5"
                            placeholder="Write Your Comment" />
                        <button class="btn  rounded-5 text-light  px-4 ms-3" @click="postComment(post)">post</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import Nabvar from '@/components/Nabvar.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const posts = ref([]);
const postsFriends = ref([]);
const currentPosts = ref([]); // Reactive variable to hold the currently displayed posts

const fetchPosts = async () => {
    try {
        const response = await axios.get('http://localhost/onlineReview_api/api/posts/read_all.php');
        posts.value = response.data.data;
        posts.value.forEach(post => {
            post.newComment = ''; // Initialize newComment for each post
        });
    } catch (error) {
        console.error('Failed to fetch posts:', error);
    }
};

const fetchPostsFriends = async () => {
    try {
        const response = await axios.post('http://localhost/onlineReview_api/api/posts/read_friends.php', {
            user_id: localStorage.getItem("userId"),
        });
        postsFriends.value = response.data.data;
        posts.value.forEach(post => {
            post.newComment = ''; // Initialize newComment for each post
        });
    } catch (error) {
        console.error('Failed to fetch friends posts:', error);
    }
};
const postComment = async (post) => {
    const commentData = {
        post_id: post.post_id,
        user_id: localStorage.getItem("userId"),
        comment_content: post.newComment
    };
    try {
        const response = await axios.post('http://localhost/onlineReview_api/api/comments/create.php', commentData);
        if (response.data.message === 'Success Created') {
            // Optionally, fetch comments again or just push the new comment to the post's comments array
            post.comments.push({
                comment_content: post.newComment,
                comment_user_name: name, // Assuming you wantto show the user's name
            });
            post.newComment = ''; // Clear the input after posting
        }
    } catch (error) {
        console.error('Failed to post comment:', error);
    }
};

const selectView = (view) => {
    if (view === 'all') {
        currentPosts.value = posts.value;
    } else {
        currentPosts.value = postsFriends.value;
    }
};

onMounted(() => {
    fetchPosts().then(() => selectView('all')); // Default view
    fetchPostsFriends();
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