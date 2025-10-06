<template>

<header class="app__header">
  <a href="/">MH</a>
  <section class="app__searchbar">
    <img src="../assets/icons/loupe.svg" alt="image of a loupe" />
  </section>
  <ul class="app__navbar">
    <li>
      <a href="/">
         <img src="../assets/icons/heart_navbar.svg" alt="image of a heart"/>
      </a>
    </li>
     <li>
      <a href="/">
         <img src="../assets/icons/bag.svg" alt="image of a bag"/>
      </a>
    </li>
     <li>
      <a href="/">
         <img src="../assets/icons/id.svg" alt="image of a person"/>
      </a>
    </li>
  </ul>
</header>


</template>

<script lang="ts" setup>



</script>

<style lang="scss">



.app__header {
  background-color: #2A241E;
  display: flex;
  align-items: center;
  padding: 10px;
  
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  justify-content: space-between;

  & > a {
    background-color: #D4AF37;
    font-family: "Inter", sans-serif;
    text-decoration: none;
    color: #000000;
    padding: 6px;
    border-radius: 10px;
  }
 
}

.app__navbar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding-inline-end: 20px;

  li {
    margin-inline: 10px;
    
  }
}
</style>