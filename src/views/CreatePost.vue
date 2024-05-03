<template>
    <div class="main">
        <div class="d-flex first pb-4">
            <img src="@/assets/logo.webp" class="rounded-5" alt="">
            <p class="m-3 mt-4">REVIEW</p>
        </div>
        <div class="second text-center">
            <h6 class="my-4">Hello Again !! </h6>
            <p>Create New Post </p>
            <form @submit.prevent="submitPost">
                <div class="display-flex">
                    <label for="title" class="me-5 mt-4">Title:</label>
                    <input v-model="postTitle" type="text" id="title" placeholder="Enter Product Title" class="input-field">
                </div>
                <div class="display-flex">
                    <label for="description" class="me-3 mt-4">Description:</label>
                    <input v-model="postDescription" type="text" id="description" placeholder="Enter Description"
                        class="input-field">
                </div>
                <div class="display-flex">
                    <label for="link" class="me-3 mt-4">Link:</label>
                    <input v-model="postLink" type="text" id="link" placeholder="Enter Link" class="input-field">
                </div>
                <div class="display-flex">
                    <label for="imageBefore" class="me-3 mt-4">Image Before:</label>
                    <input @change="handleFileChange($event, 'before')" type="file" id="imageBefore" class="input-field">
                </div>
                <div class="display-flex">
                    <label for="imageAfter" class="me-3 mt-4">Image After:</label>
                    <input @change="handleFileChange($event, 'after')" type="file" id="imageAfter" class="input-field">
                </div>
                <button type="submit" class="btn rounded-5 text-light p-2 px-5 mt-3">POST</button>
            </form>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const postTitle = ref('');
const postDescription = ref('');
const postLink = ref('');
const imageBefore = ref(null);
const imageAfter = ref(null);

const handleFileChange = (event, type) => {
    if (type === 'before') {
        imageBefore.value = event.target.files[0];
    } else if (type === 'after') {
        imageAfter.value = event.target.files[0];
    }
};

const submitPost = async () => {
    const formData = new FormData();
    formData.append('user_id', localStorage.getItem("userId"));
    formData.append('post_title', postTitle.value);
    formData.append('post_description', postDescription.value);
    formData.append('post_link', postLink.value);
    formData.append('post_img', imageBefore.value);
    formData.append('post_img2', imageAfter.value);

    try {
        const response = await axios.post('http://localhost/onlineReview_api/api/posts/create.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        alert("Success")
    } catch (error) {
        console.error('Error posting data:', error);
    }
};
</script>
  
<style lang="scss" scoped>
.main {
    margin: 100px 350px;

    img {
        height: 60px;
        width: 60px;
    }

    .first {
        border-bottom: 2px solid rgb(0, 0, 0);
    }

    .input-field {
        border: none;
        border-bottom: 2px solid rgb(0, 0, 0);
        outline: none;
    }
}

.btn {
    background-color: #f39999;
}

.ro {
    color: #f39999;

}
</style>