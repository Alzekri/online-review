<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <button class="btn btn-success mt-3 ms-3" @click="toggleDarkMode">{{ isDarkMode?'light':'dark' }}</button>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, inject } from 'vue';

const DARK_MODE_KEY = Symbol();

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  // Save the dark mode state in the Vue app's global provide/inject system
  provide(DARK_MODE_KEY, isDarkMode.value);
};

// Inject the dark mode state in other components
const useDarkMode = () => {
  return inject(DARK_MODE_KEY, isDarkMode.value);
};
</script>

<style lang="scss" scoped>
.dark-mode {
  min-height: 100vh;
  /* Add your dark mode styles here */
  background-color: #333;
  color: #fff;
}
</style>