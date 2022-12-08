<template>
    <nav> 
        
        <div class="nav_link col-md-2">
            <ul class="nav_list">
               
                <li v-for="(link, i) in links" :key="i">
                    <router-link :to="link.url"><i :class="link.icon" @click="scrollToTop()"></i></router-link>
                </li>
                
                <li id="login">
                    <i class="bi bi-box-arrow-in-left"></i>
                </li>
                <li id="profile">
                   <i class="bi bi-person-circle" @click="scrollToTop()"></i>
                   
                </li>

            </ul>
        </div>
    </nav>
</template>


<script>
export default{
  methods: {
    scrollToTop() {
    window.scrollTo(0,0);
  },
  },
    name:'MyMenu'
    ,data(){
        return{
            links:
            [
            {url:'/',icon:'bi bi-house-door-fill'},
            {url:'/recherche',icon:'bi bi-search'},
            {url:'/populaire',icon:'bi bi-award'},
            {url:'/categories',icon:'bi bi-list-ul'},
            {url:'/myMovie',icon:'bi bi-heart'}
        ]

        }
    }
}

</script>

<style scoped>
.nav_link{
    min-width: 5rem;
  width: 5rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
  background-color:#0a0a0a;
  z-index:999;
  
}
.nav_list i{
    font-size: 1.2rem;
}
.nav_list li a{
    transition: all 0.4s;
 
}
nav {
    
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #df8f05;
}
.nav_list li a:hover{
    color:#df8f05
}
.nav_list{
    padding: 0;
     display:flex;
  justify-content: center;
align-items: center;   
  flex-direction: column;
  
 
}
.nav_list li{
    list-style-type: none;
    margin:15px;
vertical-align: middle;   
    
   
}
#login{
    position:absolute;
    bottom:70px;
   
}
#profile{
    position:absolute;
    bottom:120px;
   
}
</style>