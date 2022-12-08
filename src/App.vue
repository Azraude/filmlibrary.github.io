<template>
  <nav>
    <MyMenu />
    <!-- <router-link to="/">Accueil</router-link> |
    <router-link to="/populaire">Populaires</router-link> |
    <router-link to="/categories">Catégories</router-link> |
    <router-link to="/recherche">Recherche</router-link> |
    <router-link to="/about">Crédits</router-link> -->
  </nav>
  <router-view/>
  <MyFooter />
</template>

<script>
// @ is an alias to /src
import MyMenu from './components/MyMenu.vue'
import MyFooter from './components/MyFooter.vue'
export default {
  props: {
  },
  name: 'App',
  components: {
    MyMenu, MyFooter
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');
body{
  background-color: #0e0e0f;
  

}
*{
  box-sizing: border-box;
  margin:0;
  padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

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
a:hover{
  color:white;
}
@media (min-width: 960px) {
  .popular{
    margin-left:7rem;
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-.5 * var(--bs-gutter-x));  
}

}
.page i{
  color:#df8f05;
  margin:15px;
}
.page i:hover{
 cursor: pointer;
}
.page{
display:flex;
justify-content: center;
align-items: center;
}
.card_self{
    margin:0 15px 30px;
    position: relative;
    transition: all .4s;
}
.card_self{
  width:250px;
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
