<template>
    <div class="main">
        <Nabvar></Nabvar>
        <!-- Bind the input to the searchTerm -->
        <div class="d-flex p-3 w-50 m-auto">
      <input type="text" class="form-control rounded-5" placeholder="Search" ref="searchInput" v-model="searching" />
      <button @click="filterPosts" class="btn rounded-5 text-light px-4 ms-3">Search</button>
    </div>
    <div class="mt-3 d-flex justify-content-between w-75  m-auto">
        <button @click="filterPosts() ;showPositiveReviews()" class="btn rounded-5 text-light px-4">Positive Review</button>
        <button @click="filterPosts() ;showNegativeReviews()" class="btn rounded-5 text-light px-4">Negative Review</button>
        <button @click="showPositive" class="btn rounded-5 text-light px-4">Positive Comments</button>
            <button @click="showNegative" class="btn rounded-5 text-light px-4">Negative Comments</button>
            <button @click="showAll" class="btn rounded-5 text-light px-4">All Comments</button>
        </div>
        <!-- Update to iterate over filteredPosts instead' of posts -->
        <div class="d-flex justify-content-start flex-wrap">
    <div  v-if="hasSearched" v-for="post in filteredPosts" :key="post.post_id" class="border border-dark rounded-5 m-3 p-3" style="width: 30%;">               
         <div class="d-flex mb-2">
                    <img  :src="post.user_img" class="rounded-5" alt="" width="50">
                    <p class="m-2 mx-5 border-bottom">{{ post.user_name }}</p>
                    <a class="m-2" :href="post.post_link">click to open</a>
                </div>
                <h6>{{ post.post_title }}</h6>
                <p>{{ post.post_description }}</p>
                <div class="d-flex justify-content-between mt-2">
                    <div>
                        <p class="text-center">Before</p>
                        <img :src="post.post_img" class="rounded-5" alt="" width="130">
                    </div>
                    <div>
                        <p class="text-center">After</p>
                        <img :src="post.post_img2" class="rounded-5" alt="" width="130">
                    </div>
                </div>
                <div class="comments mt-5">
                    <div v-if="showPositiveComments" class="mt-3 text-success" >
                    <h6>Positive Comments:</h6>
                    <div v-for="comment in filteredPositiveComments(post)" :key="comment.comment_id" class="comment" :class="comment.comment_user_name ==  post.user_name ?'text-info':''" >
                        <div class="comment-author">{{ comment.comment_user_name }}</div>
                        <div class="comment-text">{{ comment.comment_content }}</div>
                        <hr class="mx-5">
                    </div>
                </div>
                <div v-if="showNegativeComments" class="mt-3 text-danger">
                    <h6>Negative Comments:</h6>
                    <div v-for="comment in filteredNegativeComments(post)" :key="comment.comment_id" class="comment">
                        <div class="comment-author">{{ comment.comment_user_name }}</div>
                        <div class="comment-text">{{ comment.comment_content }}</div>
                        <hr class="mx-5">
                    </div> 
                </div>
                    <div class="d-flex">
                        <input v-model="post.newComment" type="text" class="form-control w-75 rounded-5"
                            placeholder="Write Your Comment" />
                            <button @click="postComment(post)" class="btn rounded-5 text-light px-4 ms-3">Post</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Nabvar from '@/components/Nabvar.vue';
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
const hasSearched = ref(false);
const posts = ref([]);
const searching = ref('');
const showPositiveComments = ref(false);
const showNegativeComments = ref(false);
const filteredPosts = ref([]);
const positiveWords = [
    "good", "great", "excellent", "fantastic", "amazing", "wonderful", "awesome", "superb", "outstanding", "perfect",
    "delightful", "lovely", "fabulous", "marvelous", "incredible", "positive", "splendid", "terrific", "phenomenal",
    "exceptional", "breathtaking", "brilliant", "impressive", "remarkable", "extraordinary", "first-rate", "top-notch",
    "charming", "elegant", "exquisite", "gorgeous", "beautiful", "spectacular", "tremendous", "stunning", "top-of-the-line",
    "high-quality", "five-star", "premium", "world-class", "first-class", "elite", "finest", "superior", "supreme", "flawless",
    "impeccable", "pristine", "spotless", "untarnished", "ideal", "optimal", "optimum", "peak", "prime", "top", "top-shelf",
    "A+", "top-tier", "state-of-the-art", "cutting-edge", "innovative", "groundbreaking", "revolutionary", "pioneering",
    "avant-garde", "leading-edge" , "nice" , "Beautiful"
];

const negativeWords = [
    "bad", "terrible", "awful", "poor", "horrible", "negative", "disappointing", "unpleasant", "dreadful", "disgusting",
    "annoying", "frustrating", "irritating", "sad", "unhappy", "unfortunate", "ugly", "displeasing", "offensive",
    "undesirable", "disheartening", "discouraging", "demoralizing", "demotivating", "daunting", "intimidating", "frightening",
    "terrifying", "scary", "horrifying", "alarming", "distressing", "unsettling", "unnerving", "disconcerting", "troubling",
    "upsetting", "disturbing", "disquieting", "menacing", "threatening", "hostile", "aggressive", "violent", "harmful",
    "dangerous", "risky", "hazardous", "perilous", "unsafe", "menacing", "ominous", "sinister" , "not nice"
];
const fetchPosts = async () => {
    try {
        const response = await axios.get('http://localhost/onlineReview_api/api/posts/read_all.php');
        posts.value = response.data.data;
        filteredPosts.value = response.data.data;
        posts.value.forEach(post => {
            post.newComment = '';
            post.searchComments = '';
        });
    } catch (error) {
        console.error('Failed to fetch posts:', error);
    }
};
const searchInput = ref(null); // Define the searchInput ref
const showPositiveReviews = async() => {
    filteredPosts.value = filteredPosts.value.filter(post => 
        positiveWords.some(word => post.post_description.toLowerCase().includes(word))
    );
};  
const showNegativeReviews = async () => {
    filteredPosts.value = filteredPosts.value.filter(post => 
    negativeWords.some(word => post.post_description.toLowerCase().includes(word))
    );
};  

const filterPosts =   () => {
    hasSearched.value = true; // Update visibility control
    const searchValue = searchInput.value.value.trim().toLowerCase();
    if (searchValue) {
        filteredPosts.value = posts.value.filter(post =>
            post.post_title.toLowerCase().includes(searchValue) ||
            post.post_description.toLowerCase().includes(searchValue)
        );
        addWord();
    } else {
        filteredPosts.value = posts.value;
    }
};
const showPositive = () => {
    showPositiveComments.value = true;
    showNegativeComments.value = false;
};

const showNegative = () => {
    showPositiveComments.value = false;
    showNegativeComments.value = true;
};

const showAll = () => {
    showPositiveComments.value = true;
    showNegativeComments.value = true;
    
};
const name = localStorage.getItem("userName");

const postComment = async (post) => {
    const commentData = {
        post_id: post.post_id,
        user_id: localStorage.getItem("userId"),
        comment_content: post.newComment
    };
    try {
        const response = await axios.post('http://localhost/onlineReview_api/api/comments/create.php', commentData);
        if (response.data.message === 'Success Created') {
            // Optionally, fetch comments again or just push the new comment to the post's comments array
            post.comments.push({
                comment_content: post.newComment,
                comment_user_name: name, // Assuming you wantto show the user's name
            });
            post.newComment = ''; // Clear the input after posting
        }
    } catch (error) {
        console.error('Failed to post comment:', error);
    }
};


const addWord = async () => {
    try {
        const response = await axios.post('http://localhost/onlineReview_api/api/words/create.php', {
            user_id:localStorage.getItem("userId"),
            word_content:searching.value
            
        });
    } catch (error) {
        console.error('Failed to create word:', error);
    }
};
const filteredPositiveComments = (post) => {
  const searchValue = post.searchComments.trim().toLowerCase();
  const positiveWordsLowerCase = positiveWords.map(word => word.toLowerCase());
  if (searchValue) {
    return post.comments.filter(comment =>
      comment.comment_content.toLowerCase().includes(searchValue) &&
      positiveWordsLowerCase.some(word =>
        comment.comment_content.toLowerCase().includes(word)
      )
    );
  } else {
    return post.comments.filter(comment =>
      positiveWordsLowerCase.some(word =>
        comment.comment_content.toLowerCase().includes(word)
      )
    );
  }
};

const filteredNegativeComments = (post) => {
  const searchValue = post.searchComments.trim().toLowerCase();
  const negativeWordsLowerCase = negativeWords.map(word => word.toLowerCase());
  if (searchValue) {
    return post.comments.filter(comment =>
      comment.comment_content.toLowerCase().includes(searchValue) &&
      negativeWordsLowerCase.some(word =>
        comment.comment_content.toLowerCase().includes(word)
      )
    );
  } else {
    return post.comments.filter(comment =>
      negativeWordsLowerCase.some(word =>
        comment.comment_content.toLowerCase().includes(word)
      )
    );
  }
};
onMounted(() => {
    fetchPosts();
});

</script>

<style lang="scss" scoped>
.main {
    margin: 20px 80px;
}

.comment {
    margin-bottom: 10px;
}

.comment-author {
    font-weight: bold;
}

.comment-text {
    margin-left: 20px;
}

.btn {
    background-color: #f39999;
    color: white;
}
</style>