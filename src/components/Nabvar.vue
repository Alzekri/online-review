<template>
  <div class="d-flex first pb-2">
    <img class="imgg" src="@/assets/logo.webp" alt="">
    <p class="m-3 mt-4">REVIEW</p>
    
    <div class="pt-3 ms-5 ps-5">
      <router-link to="/posts" class="btn  ms-5 me-4" exact> FOR YOU</router-link>
      <router-link to="/friends" class="btn   me-4"> YOUR FRIEND 
        <span class="bg-success m-1 px-2  rounded-5">{{ requests.length }}</span>
      </router-link>
      <router-link to="/search" class="btn   me-4"> SEARCH</router-link>
      <router-link to="/profile" class="btn   me-4"> YOUR PROFILE</router-link>
      <router-link to="/signIn" class="btn   me-4"> LOGOUT</router-link>
    </div>
  </div>
</template>
   
<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';

const requests = ref([]);
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

onMounted(() => {
    fetchRequests();
});

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