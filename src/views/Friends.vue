<template>
    <div class="main">
        <Nabvar></Nabvar>
        <h3 class="text-center mt-5">Friends {{ friends > 0 ? friends.length : null }}
        </h3>
        <div class="d-flex justify-content-between flex-wrap">
            <div v-for="(friend, index) in friends" :key="index" class="border border-dark rounded-5 m-3 p-3"
                style="width: 30%;">
                <div class="d-flex">
                    <img :src="friend.user_img" class="rounded-5" alt="" width="50">
                    <p class="m-2 ms-5 border-bottom">{{ friend.user_name }} </p>
                    <button class="btn  rounded-5 text-light  px-4 ms-5"
                        @click="deleteFriend(friend.user_id)">Delete</button>
                </div>
            </div>

        </div>
        <h3 class="text-center mt-5">Requests</h3>
        <div class="d-flex justify-content-between flex-wrap">
            <div v-for="(r, index) in requests" :key="index" class="border border-dark rounded-5 m-3 p-3"
                style="width: 30%;">
                <div class="d-flex">
                    <p class="m-2 ms- border-bottom me-5">{{ r.user_name }} </p>
                    <button class="btn  rounded-5 text-light  me-1" @click="deleteRequest(r.request_id)">Delete</button>
                    <button class="btn  rounded-5 text-light  me-1"
                        @click="createFriend(r.request_sender, r.request_id)">Accept</button>
                </div>
            </div>
        </div>
        <h3 class="text-center mt-5">Public </h3>
        <div class="d-flex justify-content-between flex-wrap">
            <div v-for="(f, index) in noFriends" :key="index" class="border border-dark rounded-5 m-3 p-3"
                style="width: 30%;">
                <div class="d-flex">
                    <img :src="f.user_img" class="rounded-5" alt="" width="50">
                    <p class="m-2 ms-5 border-bottom">{{ f.user_name }} </p>
                    <button class="btn  rounded-5 text-light  px-4 ms-2" @click="createRequest(f.user_id)">Request</button>
                </div>
            </div>
        </div>

    </div>
    <div class="d-flex justify-content-between flex-wrap">
            <div v-for="post in postsFriends" :key="post.post_id" class="border border-dark rounded-5 m-3 p-3"
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
                    <div class="comment" v-for="comment in post.comments" :key="comment.comment_id" :class="comment.comment_user_name ==  post.user_name ?'text-info':''" >
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
</template>

<script setup lang="ts">
import Nabvar from '@/components/Nabvar.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const friends = ref([]);
const noFriends = ref([]);
const requests = ref([]);
const postsFriends = ref([]);
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
const fetchFriends = async () => {
    try {
        const response = await axios.post('http://localhost/onlineReview_api/api/users/read_friends.php', {
            user_id: localStorage.getItem("userId"),
        });
        friends.value = response.data.data;
    } catch (error) {
        console.error('Failed to fetch  posts:', error);
    }
};

const fetchNoFriends = async () => {
    try {
        const response = await axios.post('http://localhost/onlineReview_api/api/users/read_exception_friends.php', {
            user_id: localStorage.getItem("userId"),
        });
        noFriends.value = response.data.data;
    } catch (error) {
        console.error('Failed to fetch  posts:', error);
    }
};
const fetchRequests = async () => {
    try {
        const response = await axios.post('http://localhost/onlineReview_api/api/requests/read.php', {
            request_receiver: localStorage.getItem("userId"),
        });
        requests.value = response.data.data;

    } catch (error) {
        console.error('Failed to fetch  posts:', error);
    }
};

const createRequest = async (sender: any) => {
    try {
        const response = await axios.post('http://localhost/onlineReview_api/api/requests/create.php', {
            request_sender: localStorage.getItem("userId"),
            request_receiver: sender,
        });

    } catch (error) {
        console.error('Failed to fetch  posts:', error);
    }
};

const createFriend = async (sender, id) => {
    try {
        // Send a POST request to create a friendship
        await axios.post('http://localhost/onlineReview_api/api/friendships/create.php', {
            friendship_user1: localStorage.getItem("userId"),
            friendship_user2: sender,
        });


        await axios.delete('http://localhost/onlineReview_api/api/requests/delete.php', {
            data: { request_id: id }
        });

        fetchFriends();
        fetchNoFriends();
        fetchRequests();
    } catch (error) {
        console.error('Failed to process request:', error);
    }
};

const deleteRequest = async (id) => {
    try {
        await axios.delete('http://localhost/onlineReview_api/api/requests/delete.php', {
            data: { request_id: id }
        });

        fetchFriends();
        fetchNoFriends();
        fetchRequests();
    } catch (error) {
        console.error('Failed to process request:', error);
    }

};

const deleteFriend = async (id) => {
    try {
        await axios.delete('http://localhost/onlineReview_api/api/friendships/delete.php', {
            data: { friendship_user1: localStorage.getItem("userId"), friendship_user2: id, }
        });

        fetchFriends();
        fetchNoFriends();
        fetchRequests();
    } catch (error) {
        console.error('Failed to process request:', error);
    }
};

onMounted(() => {
    fetchFriends();
    fetchNoFriends();
    fetchRequests();
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