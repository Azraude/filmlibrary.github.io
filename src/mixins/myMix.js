
import axios from 'axios'
export default{
  data(){
    return{
        apiKey:'5d6e4605b3235f9fb537f0008461127b',
        myList:[]
    }
  },
    methods:{
        popular(){
            axios.get('https://api.themoviedb.org/3/movie/popular',{
                params:{
                api_key:this.apiKey,
                language: 'fr-FR',
                page:this.page,
        }})
            .then(response => { 
                this.liste = response.data;
              })
        },
        Trending(){
            axios.get('https://api.themoviedb.org/3/trending/movie/week',{
                params:{
                api_key:this.apiKey,
                language: 'fr-FR',
                page:this.page,
        }})
            .then(response => {
                console.log('test',response);
                this.listeTrends = response.data.results;
                this.listeTrends.splice(6)
              })
        },
        nowPlaying(){
            axios.get('https://api.themoviedb.org/3/movie/now_playing',{
                params:{
                api_key:this.apiKey,
                language: 'fr-FR',
                page:this.page,
        }})
            .then(response => {
                console.log('test',response);
                this.listenowPlaying = response.data.results;
                this.listenowPlaying.splice(6)
              })
        },

        searchMovie(){
            axios.get('https://api.themoviedb.org/3/search/movie',{
                params:{
                api_key:this.apiKey,
                query:this.search,
                language: 'fr-FR',
                page:1,
        }})
            .then(response => {
                console.log('response', response);
                this.listeSearch = response.data;
            })
        },

        DetailFilm(){
            axios.get("https://api.themoviedb.org/3/movie/" + this.movieId, {
                params: {
                    api_key: this.apiKey,
                    language: "fr-FR",
                }
            })
                .then(response => {
                this.listeDetails = response.data;
                this.listeGenres = response.data.genres;
                this.listeLanguage = response.data.spoken_languages;
            });
        },
        IdFilm(){
            axios.get("https://api.themoviedb.org/3/genre/movie/list" ,{
                params: {
                    api_key: this.apiKey,
                    language: "fr-FR",
                }
            })
                .then(responseId => {
                this.listeId = responseId.data.genres;
                // console.log(this.listeId)
                
            });
        },
        CategorieFilm(){
            axios.get("https://api.themoviedb.org/3/discover/movie/",{
                params: {
                    api_key: this.apiKey,
                    language: "fr-FR",
                    with_genres:this.catId,
                    page:this.page

                }
            })
                .then(responseCat => {
                this.listeCat = responseCat.data.results;
                console.log("cat",this.listeCat)
                // this.listeCat.splice(5);
            });
        },

        getTrailer(){
            axios.get("https://api.themoviedb.org/3/movie/" + this.movieId + "/videos", {
                params: {
                    api_key: this.apiKey,
                    language: "fr-FR",
                }
            })
                .then(responsez => {
                console.log(responsez);
                this.listeUrl = responsez.data.results;
                this.listeUrl.splice(1);
                console.log('url',this.listeUrl); 
            });
        
        },
        hideLoader(){
            this.isloaded = true;
            this.content=true;
          },
          scrollToTop() {
            window.scrollTo(0,0);
          },
          next(){
            this.page++
            
          },
          prev(){
              this.page--
      
          },
          //recup local storage
          
          save(film){
            let heart = document.querySelector('.fav')
            let message = document.getElementById('message')
            console.log(message)
            if(heart.classList.contains('bi-heart')){
            message.innerHTML = 'Le film a bien été ajouté à votre liste'
            message.style.color = '#df8f05'
            }
            if(heart.classList.contains('bi-heart-fill')){
            message.innerHTML = 'Le film a bien été retiré de votre liste'
            message.style.color = 'red'
                
            }
                heart.classList.toggle('bi-heart');
                heart.classList.toggle('bi-heart-fill');
                setTimeout(() => {
                    message.innerHTML = ''
                  }, 2500);
                
            if(localStorage.getItem('films')){
                this.myList = JSON.parse(localStorage.getItem('films'))
            }
            else this.myList = [];
            this.myList.push(film)
            localStorage.setItem('films', JSON.stringify(this.myList))
          },
          clear(){
            localStorage.clear();
          }
          
    }
}