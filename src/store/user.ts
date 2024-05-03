// src/store/user.ts
import { defineStore } from 'pinia';
import axios from 'axios';

interface UserState {
  userData: any;  // You can replace `any` with a more specific type
  isLoggedIn: boolean;
}

export const useUserStore = defineStore({
  id: 'user',  // Unique ID for the store across your application
  state: (): UserState => ({
    userData: null,
    isLoggedIn: false,
  }),
  getters: {
    getUserData: (state) => state.userData,
  },
  actions: {
    async login(user_email: string, user_password: string) {
      try {
        const response = await axios.post('http://localhost/onlineReview_api/api/users/read_login.php', {
          user_email: user_email,
          user_password: user_password
        });
        if (response.data.message === 'Success Login') {
          this.userData = response.data.user;  // Assuming response contains user data
          this.isLoggedIn = true;
        } else {
          throw new Error(response.data.message);
        }
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },
    logout() {
      this.userData = null;
      this.isLoggedIn = false;
    }
  }
});