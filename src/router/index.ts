import { createRouter, createWebHistory } from "vue-router";
import Review from "../views/Review.vue";
const Loading = () => import("@/views/Loading.vue");
const SignUp = () => import("@/views/SignUp.vue");
const SignIn =() => import("@/views/SignIn.vue");
const Home =() => import("@/views/Home.vue");
const Posts =() => import("@/views/Posts.vue");
const Search =() => import("@/views/Search.vue");
const Friends =() => import("@/views/Friends.vue");
const Profile =() => import("@/views/Profile.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "loading",
      component: Loading,
    },
    {
      path: "/review",
      name: "review",
      component: Review,
    },
    {
      path: "/signUp",
      name: "signUp",
      component: SignUp,
    },
    {
      path: "/signIn",
      name: "SignIn",
      component: SignIn,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/posts",
      name: "posts",
      component: Posts,
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    },
    {
      path: "/friends",
      name: "friends",
      component: Friends,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
  ],
});

export default router;
