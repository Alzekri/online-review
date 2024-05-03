<template>
    <div class="main">
        <div class="d-flex first pb-4">
            <img src="@/assets/logo.webp" class="rounded-5" alt="">
            <p class="m-3 mt-4">REVIEW</p>
        </div>
        <div class="second text-center">
            <h6 class="my-4">Hello Again !! </h6>
            <p>Welcome Back you've been missed </p>
            <div class="display-flex">
                <label for="" class="me-5 mt-4">EMAIL :</label>
                <input type="email" name="" id="" placeholder="Enter Your EMAIL " class="input-field">
            </div>
            <div class="display-flex">
                <label for="" class="me-3 mt-4">PASSWOED :</label>
                <input type="password" name="" id="" placeholder="Enter Your PASSWOED" class="input-field">
            </div>
            <div class="m-5 ps-5">
                <router-link to="/home">
                    <button class="btn  rounded-5 text-light p-2 px-5">Sign In</button>
                </router-link>
                <p class="mt-4">No account ? <router-link class="ro" to="/signUp">Sgin Up</router-link> </p>
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