<template>
    <footer class="">
        <a href="#">Mentions légales</a>
        <a href="#">Copyright &copy; 2022</a>
        <a href="#">Politique de confidentalité</a>
    </footer>
</template>


<script>
export default{
    name:'MyFooter'
}

</script>

<style scoped>
footer{
  
    background-color:red;
    height:50px;
    width:100%;
    z-index:99999;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #141414;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
}
footer a {
    margin-left:100px;
    text-decoration: none;
    color:#f7f7f7;
    transition: all .4s;
   
}
footer a:hover {
    color:#df8f05
   
}
</style>