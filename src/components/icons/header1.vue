<template>
<header >
    <div class="navbar">
    <ul>
        <li><img id="boy" src="/girlsimg/anime1.png" alt="Icon"></li>
        <li><a href="#">Filme</a></li>
        <li><a href="#">Anime</a></li>
        <li><a href="#">Manga</a></li>
        <li><a href="#">Noutati</a></li>
     </ul>
     </div>
     <ul class="cautare">
          <input  type="text" placeholder="Căutare.." name="search">
          <img src="/girlsimg/comm.png" alt="comment">
          <img src="/girlsimg/p1.png" alt="person">
     </ul>




    </header>
</template>

<script setup>

</script>

<style  scoped>

header{
  background-color: black;

}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbar  {
  display: flex;
  justify-content: space-between;
  justify-content: center;
  margin-top: 41.5px;



}

.navbar li{
  display: inline-block;

}

.navbar a {
  display: flex;
  flex-direction: row-reverse;
  float: left;
  display: block;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

}



.navbar a:hover{
    background-image: linear-gradient(black,red, black);
    color: rgb(255, 255, 255);
    gap: 8px;
    border-radius: 8px;

    padding: 8px;

}



#boy {
  display: flex;
  margin-right: 58px;
    width: 50px;
    height: 53px;
    background-color: #FFFFFF;
    border-radius: 360px;


}

.search{
  background-color: transparent;


}


input[type=text] {
  box-sizing: border-box;
  border: 1px solid #FFFFFF;
  border-radius: 10px;
  color: #FFFFFF;
  font-size: 16px;
  background-image: url('girlsimg/search.png');
  background-repeat: no-repeat;
  padding: 10px 18px 12px 30px;
  margin-left: 58px;
}


header{
  display: flex;
  justify-content: center;
}

.cautare {
  display: flex;
  margin-top: 45px;
  margin-bottom: 45px;
  align-items: center;

}
.cautare img{
  width: 48px;
  height: 43px;
 margin-left: 15px;
 margin-right: 15px;
}

#me{
  border-radius: 10px;
}

.buttons img {
  float: inline-start;
   width: 30px;
   height: 30px;
   margin-left: 1px;
   margin-right: 1px;
   margin-top: 89px;

}

#ne{
  background-image: linear-gradient(black, red, black) ;
}
</style>