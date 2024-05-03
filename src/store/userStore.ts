// src/stores/userStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
    state: () => ({
        userData: null,
    }),
    actions: {
        async login(email:string, password:string) {
            try {
                const response = await axios.post('http://localhost/onlineReview_api/api/users/read_login.php', {
                    user_email: email,
                    user_password: password
                });
                if (response.data.message === 'Success Login') {
                    this.userData = response.data.data;
                } else {
                    throw new Error('Login failed');
                }
            } catch (error) {
                console.error('Login error:', error);
                throw error;
            }
        }
    }
});