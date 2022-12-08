<template>
    <h1 class="mb-2 title text-white">Films Populaires</h1>
    <div class="populaire">
      <div class="popular">
     
          <div class="card_self" v-for="(film, i) in liste.results" :key="i"  @click="detailsFilm">
            <router-link class="router" :to="{name: 'detail', params:{id:film.id}}">
            <div class="card_img">
              <img class="card-img-top" :src="'https://image.tmdb.org/t/p/w500'+film.poster_path" :alt="film.title"/>
            </div>
            <div class="card_body">
              <span class="star">{{film.vote_average}}<i class="bi bi-star-fill"></i></span>
              <div class="card_title">
                            <span>{{ film.title}}</span>
              </div>
            </div>
     
          </router-link>
          </div>
          
      </div>
      <div class="page">
        <i @click="prev(),scrollToTop()" class="bi bi-arrow-left-circle-fill"></i>
          <p class="text-white h2">Page {{page}} / {{ liste.total_pages}}</p>
        <i @click="next(),scrollToTop()" class="bi bi-arrow-right-circle-fill"></i>
      </div>
           <!-- <img :src="'https://image.tmdb.org/t/p/w500/'+film.backdrop_path" :alt="film.title"/> -->
    </div>
  </template>
  
  <script>
import myMix from '@/mixins/myMix';
  export default({
    mixins:[myMix],
    name:'PopulaireView',
    data(){
      return{
        liste:[],
        page:'1'
      }
    },
    mounted(){
        this.popular();
    },
    updated(){
        this.popular();
    }
  })
  </script>

  <style scoped>
 

</style>