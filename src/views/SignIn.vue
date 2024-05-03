<template>
    <div class="main">
        <div class="d-flex first pb-4">
            <img src="@/assets/logo.webp" class="rounded-5" alt="Logo">
            <p class="m-3 mt-4">REVIEW</p>
        </div>
        <div class="second text-center">
            <h6 class="my-4">Hello Again !!</h6>
            <p>Welcome Back, you've been missed!</p>
            <div class="display-flex">
                <label for="email" class="me-5 mt-4">EMAIL:</label>
                <input v-model="form.email" type="email" id="email" placeholder="Enter Your EMAIL" class="input-field">
            </div>
            <div class="display-flex">
                <label for="password" class="me-3 mt-4">PASSWORD:</label>
                <input v-model="form.password" type="password" id="password" placeholder="Enter Your PASSWORD" class="input-field">
            </div>
            <div class="m-5 ps-5">
                <button @click="login" class="btn rounded-5 text-light p-2 px-5">Sign In</button>
                <p class="mt-4">No account? <router-link class="ro" to="/signUp">Sign Up</router-link></p>
            </div>
            <div v-if="userData">
                <h4>User Info:</h4>
                <p>Name: {{ userData }}</p> <!-- Adjust according to your data structure -->
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { useUserStore } from '@/store/userStore'; // adjust path as necessary
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const form = ref({ email: '', password: '' });
const router = useRouter(); // Initialize router instance

const login = async () => {
    try {
        await userStore.login(form.value.email, form.value.password);
        // Navigate to the profile page after successful login
        router.push('/profile');
    } catch (error: any) {
        alert(error.message);
    }
};

const userData = computed(() => userStore.userData);
</script>
 
<style scoped>
/* Your existing styles */
</style>
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
.ro{
    color: #f39999;

}
</style>