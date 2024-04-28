<template>
    <div class="main">
        <div class="d-flex first pb-4">
            <img src="@/assets/logo.webp" class="rounded-5" alt="">
            <p class="m-3 mt-4">REVIEW</p>
        </div>
        <div class="second text-center">
            <h6 class="my-4">Hello Again !! </h6>
            <p>Create New Post </p>
            <div class="display-flex">
                <label for="" class="me-5 mt-4">Title :</label>
                <input type="email" Title="" id="" placeholder="Enter Product Title  " class="input-field">
            </div>
            <div class="display-flex">
                <label for="" class="me-3 mt-4">Description :</label>
                <input type="password" Title="" id="" placeholder="Enter Description " class="input-field">
            </div>
            <div class="display-flex">
                <label for="" class="me-3 mt-4">Linke :</label>
                <input type="password" Title="" id="" placeholder="Enter Link " class="input-field">
            </div>
            <div class="display-flex">
                <label for="" class="me-3 mt-4">Image Befor :</label>
                <input type="file" Title="" id="" placeholder=" " class="input-field">
            </div>
            <div class="display-flex">
                <label for="" class="me-3 mt-4">Image After :</label>
                <input type="file" Title="" id="" placeholder=" " class="input-field">
            </div>

            <div class="m-5 ps-5">
                <router-link to="/home">
                    <button class="btn  rounded-5 text-light p-2 px-5">POST</button>
                </router-link>
            </div>
        </div>
    </div>
</template>
  
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