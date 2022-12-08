<template>
   <div class="container-fluid popular">
    <div class="row">
        <div class="card" v-for="(item,i) in items" :key="i">
       <div class="card_img">
         <span class="star">{{ratings}}<i class="bi bi-star-fill"></i></span>
        <img src="../assets/rick_morty.jpg" alt="">
        <img :src="'../assets/'+item.film + '.jpg'" alt="">
  
       </div>
       <div class="card_title">
        <span>{{ item.film }}</span>
       </div>

      </div>
    </div>
   </div>
     
    
</template>


<script>
export default{

    name:'MyCard',
    data() {
  return {
    items: [{ film: 'rick_morty' }],
    
    // covers: [{images : '../assets/rick_morty.jpg'}],
    ratings:'7.8'

    
  }
}
}

</script>

<style scoped>
.popular{
  
}
.card{
    margin:0 15px;
    max-width:200px;
    width:180px;
    max-height:290px;
    height:290px;
   background-color: #19191B;
   transition:all .3s;
}

.card img{
    width:100%;
    border-radius:2%;

}
.card:hover{
    transform: scale(1.05);
  cursor:pointer;

}
.card span{
   display:flex; 
   justify-content: center;
   align-items: center;
   /* color:#ABADB3; */
   color:#f7f7f7;
   margin-top: 5px;
  
}
.card .star i {
  margin:0 5px;
  
}
.card .star{
  position:absolute;
  top:0px;
  left:0;
  background-color:#df8f05;
  width:60px;  height:30px;
  border-radius:3px 10px 10px 3px;
  box-shadow: 6px 5px 10px 2px rgba(0, 0, 0, 0.3);
  
}

</style>