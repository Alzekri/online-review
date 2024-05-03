// src/stores/userStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
    state: () => ({
        userData: {},

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
                    localStorage.setItem("userName",this.userData.user_name);
                    localStorage.setItem("userId",this.userData.user_id.toString());
                    localStorage.setItem("userImage", this.userData.user_img);
                    
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
export default useUserStore;
