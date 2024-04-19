<template>
  <div class="main">
    <div class="d-flex first pb-2">
      <img class="imgg" src="@/assets/logo.webp" alt="">
      <p class="m-3 mt-4">REVIEW</p>
      <div class="pt-3 ms-5 ps-5">
        <router-link to="" class="btn  ms-5 me-4" exact> FOR YOU</router-link>
        <router-link to="" class="btn   me-4"> YOR FRIEND</router-link>
        <router-link to="" class="btn   me-4"> SEARCH</router-link>
        <router-link to="" class="btn   me-4"> YOUR PROFILE</router-link>
      </div>
    </div>

    <div class="m-auto">
      <h6 class="my-5">What are you looking for?</h6>
      <div class="images">
        <img class="img img1" src="@/assets/im1.png" alt="">
        <img class="img img2" src="@/assets/im2.png" alt="">
        <img class="img img3" src="@/assets/im3.png" alt="">
        <img class="img img4" src="@/assets/im4.png" alt="">
        <img class="img img5" src="@/assets/im5.png" alt="">
        <img class="img img6" src="@/assets/im6.png" alt="">
        <img class="img img7" src="@/assets/im7.png" alt="">
        <img class="img img8" src="@/assets/im8.png" alt="">
        <img class="img img9" src="@/assets/im9.png" alt="">
      </div>
      <p class="mt-5">Search For Anything We Will Try <br /> To Help You To Make decision</p>
    </div>
    <div class="circle1 circle">
    </div>
    <div class="circle2 circle">
    </div>
    <div class="circle3 circle">
    </div>
    <div class="circle4 circle">
    </div>
    <div class="circle5 circle">
    </div>
    <div class="circle6 circle">
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
    image.style.transition = 'opacity 0.5s ease-in-out'; // Added transition property
    const circles = document.querySelectorAll('.circle');
    let index = 0;

    circles.forEach((circle: Element) => {
      const currentCircle = circle as HTMLElement;
      currentCircle.style.opacity = '0';
      currentCircle.style.transition = 'opacity 0.5s ease-in-out'; // Added transition property

    });
    const intervalId1 = setInterval(() => {
      if (index >= circles.length) {
        clearInterval(intervalId1);
        return;
      }

      const currentCircle = circles[index] as HTMLElement;
      currentCircle.style.opacity = '1';

      index++;
    }, 1000);
  });

  const intervalId = setInterval(() => {
    if (index >= images.length) {
      clearInterval(intervalId);
      hideImagesExceptImg9();
      return;
    }

    const img = images[index] as HTMLElement;
    img.style.opacity = '1';

    index++;
  }, 500);
});

function hideImagesExceptImg9() {
  const images = document.querySelectorAll('.img');

  images.forEach((img: Element) => {
    const image = img as HTMLElement;
    if (!image.classList.contains('img9')) {
      image.style.opacity = '0';
    }
  });
}
</script>
<style lang="scss" scoped>
.main {
  margin: 20px 80px;

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
}

.images {
  height: 300px;
}

.img {
  position: absolute;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: contain;
}

.img1 {
  left: 100px;
  top: 200px;
}

.img2 {
  left: 150px;
  top: 350px;
}

.img3 {
  left: 50px;
  top: 400px;
}

.img4 {
  left: 250px;
  top: 230px;
}

.img5 {
  left: 250px;
  top: 430px;
}

.img6 {
  left: 50px;
  top: 300px;
}

.img7 {
  left: 320px;
  top: 330px;
}

.img8 {
  left: 380px;
  top: 180px;
}

.img9 {
  left: 100px;
  top: 270px;
  height: 200px;
  width: 200px;
}

.circle1 {
  position: fixed;
  background-color: #E1CEE4;
  height: 900px;
  width: 900px;
  top: 110px;
  right: -50px;
  border-radius: 50%;
}

.circle2 {
  position: fixed;
  background-color: #DB809C;
  height: 900px;
  width: 900px;
  top: 170px;
  right: -90px;
  border-radius: 50%;
}

.circle3 {
  position: fixed;
  background-color: #EBD8CF;
  height: 900px;
  width: 900px;
  top: 230px;
  right: -110px;
  border-radius: 50%;
}

.circle4 {
  position: fixed;
  background-color: #E8FFDD;
  height: 900px;
  width: 900px;
  top: 270px;
  right: -120px;
  border-radius: 50%;
}

.circle5 {
  position: fixed;
  background-color: #FFEAB0;
  height: 900px;
  width: 900px;
  top: 320px;
  right: -140px;
  border-radius: 50%;
}

.circle6 {
  position: fixed;
  background-color: #FFFFFF;
  height: 900px;
  width: 900px;
  top: 370px;
  right: -190px;
  border-radius: 50%;
}
</style>