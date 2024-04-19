<template>
  <div class="main row  text-center align-items-center">
    <div class="col-6 images">
      <img class="img img1" src="@/assets/img1.png" alt="">
      <img class="img img2" src="@/assets/img2.png" alt="">
      <img class="img img3" src="@/assets/img3.png" alt="">
      <img class="img img4" src="@/assets/img4.png" alt="">
      <img class="img img5" src="@/assets/img5.png" alt="">
      <img class="img img6" src="@/assets/img6.png" alt="">
      <img class="img img7" src="@/assets/img7.png" alt="">
      <img class="img img8" src="@/assets/img8.png" alt="">
      <img class="img img9" src="@/assets/img9.png" alt="">
    </div>
    <div class="col-6">
      <p>REVIEW</p>
      <p>
        Here you will find a platform that collects<br>
        people's experiences about the things you<br>
        want to buy and summarizes for you<br>
        whether these experiences are good or bad<br>
        and saves you time and effort.
      </p>
      <div class="row  justify-content-center ">
        <div class="col-2"> <button class="btn btn-secondary">Sign Up</button></div>
        <div class="col-2"> <button class="btn btn-secondary">Sign In</button></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const images = document.querySelectorAll('.img');
  let index = 0;

  images.forEach((img: Element) => {
    const image = img as HTMLElement;
    image.style.opacity = '0';
  });

  const intervalId = setInterval(() => {
    if (index >= images.length) {
      clearInterval(intervalId);
      return;
    }

    const img = images[index] as HTMLElement;
    img.style.opacity = '1';

    index++;
  }, 500);
});
</script>
<style lang="scss" scoped>
.row {
  --bs-gutter-x: 0;
}

.main {
  height: 100vh;

  .images {
    height: 70%;
    border-right: 2px solid rgb(0, 0, 0);
    position: relative;
  }

  .img {
    position: absolute;
    height: 70px;
    width: 70px;
  }

  .img1 {
    left: 230px;
    top: 90px;
  }

  .img2 {
    height: 200px;
    width: 200px;
    left: 300px;
    top: 150px;
  }

  .img3 {
    left: 400px;
    top: 50px;
  }

  .img4 {
    left: 550px;
    top: 70px;
  }

  .img5 {
    left: 200px;
    top: 230px;
  }

  .img6 {
    left: 500px;
    top: 200px;
  }

  .img7 {
    left: 550px;
    top: 300px;
  }

  .img8 {
    left: 350px;
    top: 380px;
  }

  .img9 {
    left: 220px;
    top: 330px;
  }

  p {
    color: #B758BB;
  }


}
</style> 