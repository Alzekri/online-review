<template>
  <div class="main">
    <div class="d-flex first pb-4">
      <img src="@/assets/logo.webp" class="rounded-5" alt="Logo">
      <p class="m-3 mt-4">REVIEW</p>
    </div>
    <div class="second text-center">
      <h6 class="my-4">WELCOME !!</h6>
      <p>we're happy to be in the review community</p>
      <div class="display-flex">
        <label class="me-5 mt-3">NAME:</label>
        <input v-model="form.user_name" type="text" placeholder="Enter Your Name" class="input-field">
      </div>
      <div class="display-flex">
        <label class="me-5 mt-4">EMAIL:</label>
        <input v-model="form.user_email" type="email" placeholder="Enter Your EMAIL" class="input-field">
      </div>
      <div class="display-flex">
        <label class="me-3 mt-4">PASSWORD:</label>
        <input v-model="form.user_password" type="password" placeholder="Enter Your PASSWORD" class="input-field">
      </div>
      <div class="display-flex">
        <label class="me-3 mt-4">IMAGE:</label>
        <input type="file" @change="handleFileUpload" class="input-field">
      </div>
      <div class="m-5 ps-5">
        <button @click="submitForm" class="btn rounded-5 text-light p-2 px-5">CREATE ACCOUNT</button>
        <p class="mt-4">Already have an account? <router-link class="ro" to="/signIn">Sign In</router-link></p>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';

interface UserForm {
  user_name: string;
  user_email: string;
  user_password: string;
  user_img: File | null;
}


    const form = ref<UserForm>({
      user_name: '',
      user_email: '',
      user_password: '',
      user_img: null,
    });

    const handleFileUpload = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files) {
        form.value.user_img = target.files[0];
      }
    };

    const submitForm = async () => {
      const formData = new FormData();
      formData.append('user_name', form.value.user_name);
      formData.append('user_email', form.value.user_email);
      formData.append('user_password', form.value.user_password);
      if (form.value.user_img) {
        formData.append('user_img', form.value.user_img);
      }

      try {
        const response = await axios.post('http://localhost/onlineReview_api/api/users/create.php', formData);
        console.log(response.data);
        alert(response.data.message);
      } catch (error) {
        console.error('There was an error!', error);
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