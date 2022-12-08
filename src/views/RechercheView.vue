<template>
    <div class="container_nav">
       
        <input type="text" name="searchbar" id="searchbar" v-model="search" placeholder="Rechercher un film" autocomplete="off">
        <label for="searchbar"></label>
            <div class="card_section">
                
                    <div class="card_self" v-for="(film, i) in listeSearch.results" :key="i"  @click="detailsFilm">
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
                
    </div>
</template>

<script>
import myMix from '@/mixins/myMix';
export default{
    name:'MoteurRecherche',
    mixins:[myMix],
    data(){
      return{
        search:'',
        listeSearch:[],
      }
    },
    updated(){
      this.searchMovie();
       
    }
}

</script>

<style>
input[type="text"]{
    outline:0;
    border:none;
    border-width:solid 1px 0 0 2px;
    background-color:#0E0E0F;
    font-size:3rem;
    width:100%;
    height:50px;
    text-align:center;
    color:white;
    margin-bottom:15px;
    font-family:'Montserrat', sans-serif;
    font-weight:400;
  
}
input[type="text"]:focus{
    border-bottom:1px solid #df8f05;
    
}

.card_section{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}


.container_nav{
  margin-left:5rem;
  height:100vh;
}

</style>