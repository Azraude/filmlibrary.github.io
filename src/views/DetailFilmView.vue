<template>
  <div class="page-loader" v-if="!isloaded">
<SyncLoader></SyncLoader>
  </div>
    <div class="detailFilm" v-if="content">
      <div class="img_detail">
        <img :src="'https://image.tmdb.org/t/p/w500/'+this.listeDetails.poster_path" :alt="this.listeDetails.title"/> 
      </div>
      <div class="info_section">
        <h1>{{this.listeDetails.title}}</h1>
        <div class="header__section">
          <div class="ratings_section">
            <div class="ratings" v-for="(count,i) in this.count" :key="i" >
                <i class="bi bi-star-fill"></i>
            </div>
            <div class="other_ratings_section">
              <i class="bi bi-star"></i>
                 <span>{{this.listeDetails.vote_average}}</span>
            </div>
          </div>
          <div class="info_header_section">
            <div class="languages"  v-for="(language,i) in listeLanguage" :key="i">
              <span>{{language.name}}</span>
            </div>
          </div>
          
        </div>
        <div class="info_film_section">
          <div class="time_section mb-3">
            <span>{{this.listeDetails.runtime}} minutes</span>
          </div>
        </div>
        
        <h3>Genre</h3>
        <div class="genre" v-for="(genre,i) in listeGenres" :key="i">
          <p>{{genre.name}}</p>
        </div>
        <div class="description">
          <h3>Le synopsis</h3>
          <p>{{this.listeDetails.overview}}</p>
        </div>
        <div class="footer_section">
        
          <div class="trailer" v-for="(trailer,i) in listeUrl" :key="i">
            <a :href="this.staticUrl + trailer.key" target="_blank">Trailer</a><i class="bi bi-play-circle"></i>
            
          </div>
      <i class="bi bi-heart fav" @click="save(listeDetails)" ></i>
      <p id="message" class="mt-2"></p>
  
      </div>
      </div>
    </div>
    <div class="back">
      <i class="bi bi-arrow-left-circle-fill" @click="back()"></i>
   
    </div>
  </template>
  
  <script>
import SyncLoader from 'vue-spinner/src/SyncLoader.vue';
import myMix from '@/mixins/myMix';
  export default({
    methods: {
        back() {
            this.$router.go(-1);
        },

        
       
       
    },
    
    mixins:[myMix],
    name: "DetailFilmView",
    data() {
        return {
            listeDetails: [],
            listeGenres: [],
            listeLanguage: [],
            listeUrl:[],
            count: 4,
            url: "",
            test:'bi-heart-fill',
            isloaded:false,
            content:false,
            staticUrl: "https://youtube.com/watch?v=",
            movieId: this.$route.params.id,
            apiKey: "5d6e4605b3235f9fb537f0008461127b",
        };
    },
    mounted() {
      setTimeout(() => {
        this.hideLoader();
      }, 600);
      this.DetailFilm()
      this.getTrailer()
       
      
    },
    components: {SyncLoader}
  
})
  </script>

  <style>
  
h1{
  color:white;
}
p{
  color:white;
}
.v-sync{
  background-color: #df8f05!important;
}
.v-spinner{
z-index:99;
height:90vh;
display:flex;
justify-content: center;
align-items: center;
}
.img_detail img{
  border-radius:10px;
  width:350px;
}
.languages{
  margin:5px;
}
.detailFilm{
  color:white;
  height:90vh;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:7rem;
  font-family: 'Montserrat', sans-serif;
}
.genre{
  display:inline-flex;

}
.genre p{
  padding:15px 15px 15px 0;
}
.star{
  display: inline-flex;
  align-items: center;
  margin-bottom: 15px;
}
.star i{
  margin:0 5px ;
}
.header__section{
  display:flex;
  justify-content: space-between;
  align-items:flex-start;
  margin:35px 0 15px;
}
.info_header_section{
  display:inline-flex;
  line-height: normal;
}

.ratings_section{
  display:inline-flex;
}
.ratings_section i {
  margin:15px 15px 0 0;
}

.trailer {
  border:1px solid #df8f05;
  width:100px;
  height:50px;
  padding:10px;
  display:inline-flex;
  justify-content:center ;
  align-items: center;
  margin:20px 20px 0 0;
  text-decoration:none;
  border-radius: 10px;
  transition:all .4s;
}

.fav{
  border:1px solid #df8f05;
  width:50px;
  padding:15px;
  display:inline-flex;
  justify-content:center ;
  align-items: center;
  height:50px;
  text-decoration:none;
  border-radius: 10px;
  transition:all .4s;
}
.fav:hover{
  border:1px solid #df8f05;
  background-color:#df8f05;
  cursor:pointer;

  padding:10px;
  text-decoration:none;
  border-radius: 10px;
}
.trailer:hover {
  border:1px solid #df8f05;
  background-color:#df8f05;
  cursor:pointer;
  padding:10px;
  text-decoration:none;
  border-radius: 10px;
}
.trailer a{
  text-decoration:none;
  color:white;
  margin-right:5px;
}

.info_section{
  max-width:550px;
  margin-left:2rem;
  text-align: start;
}
.info_section h1{
 text-transform: uppercase;
 font-weight: 300;
 color:#df8f05;

}
.info_section p{
font-size: 15px;

}
.info_section h3{
  font-weight:600;
font-size: 20px;
color:#df8f05;
}

.back{
  position:absolute;
  top:1em;
  left:4.5em;
  color:#df8f05;
  font-size:25px;
  height:50px;
}
.back i:hover{
  cursor:pointer;
}
</style>