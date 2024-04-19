<template>
    <div class="main">
        <div class="pra">
            <p class="animated-text">REVIEW</p>
        </div>
        <div class="logo">
            <img class="animated-image" src="@/assets/logo.webp" alt="">
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

setTimeout(() => {
    router.push('/review');
}, 4000);
</script>
  
<style lang="scss" scoped>
.main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.pra {
    color: #e0686d;
}

@keyframes circleAnimation {
    0% {
        transform: rotate(0deg) scale(0);
        opacity: 0;
    }

    50% {
        transform: rotate(360deg) scale(1.2);
        opacity: 1;
    }

    100% {
        transform: rotate(0deg) scale(1);
        opacity: 1;
    }
}

.animated-text {
    animation: circleAnimation 4s ease-in-out;
}

.animated-image {
    animation: circleAnimation 3s ease-in-out;
}
</style>