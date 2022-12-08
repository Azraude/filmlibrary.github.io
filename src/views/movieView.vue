<template>
    <div class="myList">
        <h1 class="title mb-3 text-white">Ma liste</h1>
    <button @click="clear" class="btn_list">Vider votre liste</button>
    <div class="popular">
     <div class="card_self" v-for="(film, i) in myList" :key="i" @click="detailsFilm">
        <router-link class="router" :to="{name: 'detail', params:{id:film.id}}">
       <div class="card_img">
         <img class="card-img-top" :src="'https://image.tmdb.org/t/p/w500'+film.poster_path" :alt="film.title"/>
       </div>
       <div class="card_body">
         <span class="star">{{film.vote_average.toString().slice(0,3)}}<i class="bi bi-star-fill"></i></span>
         <div class="card_title">
                       <span>{{ film.title}}</span>
         </div>
       </div>
    </router-link>
     </div>
     
 </div>
    </div>
   

</template>

<script>


import myMix from '@/mixins/myMix';
export default{
    mixins:[myMix],
    name:'myMovie',
    data(){
        return{
           
        }
    },
    computed:{
        myList(){
            if(localStorage.getItem('films')) {return JSON.parse(localStorage.getItem('films'))}
            else return []
        }
    },
  
    

}</script>

<style scoped>
.myList{
    height:100vh;
}
.btn_list{
  border:1px solid #df8f05;
  padding:15px;
  display:inline-flex;
  justify-content:center ;
  align-items: center;
  height:50px;
  text-decoration:none;
  border-radius: 10px;
  transition:all .4s;
}
.btn_list:hover{
  border:1px solid #df8f05;
  background-color:transparent;
  cursor:pointer;
  text-decoration:none;
  border-radius: 10px;
  color:#df8f05;
}
</style>