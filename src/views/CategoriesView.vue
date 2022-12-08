<template>
    <h1>Catégories</h1>
    <ul>
        <li v-for="(genre,i) in listeId" :key="i"> <router-link class="router" :to="{name: 'categorie', params:{id:genre.id,name:genre.name}}">{{genre.name}}</router-link></li>
    </ul>
</template>

<script>



import myMix from '@/mixins/myMix';
export default{
    mixins:[myMix],
    name:'CategoriesView',
    data(){
        return{
            listeId:[],
         
        }
    },
    mounted(){
        this.IdFilm()
    },
   

}</script>