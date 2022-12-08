<template>
  <div class="home">
   <!-- <SlideComponent></SlideComponent> -->
    <h1 class="my-3 title text-white">Tendance</h1>
    <div class="populaire">
      <div class="trending">
     
          <div class="card_self" v-for="(film, i) in listeTrends" :key="i"  @click="detailsFilm">
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
        <h1 class="mb-3 title text-white" v-if="myList.length > 0">Ma liste</h1>
        <div class="trending mylist">
     
          <div class="card_self" v-for="(film, i) in myList" :key="i"  @click="detailsFilm">
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
        <h1 class="mb-3 title text-white">{{this.catNameComedie}}</h1>
      <div class="trending Comedie">
          <div class="card_self" v-for="(film, i) in listeCat.splice(2,6)" :key="i"  @click="detailsFilm">
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
     
           <!-- <img :src="'https://image.tmdb.org/t/p/w500/'+film.backdrop_path" :alt="film.title"/> -->
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import myMix from '@/mixins/myMix';
// import SlideComponent from '../components/SlideComponent.vue'

export default {
    name: "HomeView",
    mixins: [myMix],
    data() {
        return {
            page: 1,
            listeTrends: [],
            listeCat: [],
            catId: 35,
            catNameComedie: "Comedie",
        };
    },
    mounted() {
        this.Trending(),
            this.CategorieFilm();
            console.log(this.myList)
    },
    computed:{
        myList(){
            if(localStorage.getItem('films')) {return JSON.parse(localStorage.getItem('films'))}
            else return []
        }
    },
    // components: { SlideComponent }
}
</script>

<style scoped>


@media (min-width: 960px) {
  .trending{
    margin-left:7rem;
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-.5 * var(--bs-gutter-x));  
}

}
.title{
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  text-align:start;
  margin-left:4em;
  font-size:2rem;
  
}
.router{
  text-decoration: none;
  color:white;
}

h2{
  color:#f7f7f7;
}
.card_self{
    margin:0 15px 30px;
    position: relative;
    transition: all .4s;
}
.card_self{
  width:200px;
  height:auto;
}
.card_self img{
  border-radius: 5px;
  object-fit: cover;
}

.card_self:hover{
  transform: scale(1.05);
  cursor:pointer;
}
.card_title span{
   font-family:'Montserrat', sans-serif;
   color:#f7f7f7;
   line-height: normal;
   font-size:1rem;
   font-weight: 400;
}
.card_title{
  margin-top:15px;
}

.card_self .star {
  margin:0px;
}
.card_self .star{
  position:absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top:10px;
  left:0;
  background-color:#df8f05;
  width:60px;  height:30px;
  border-radius:3px 10px 10px 3px;
  box-shadow: 6px 5px 10px 2px rgba(0, 0, 0, 0.3);
  
}
</style>
