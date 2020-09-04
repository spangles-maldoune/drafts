<template>
  <div id="app">
	  <div class="wrapper">
		  <router-view></router-view>
	  </div>
  </div>
</template>

<style lang="scss">
   @import url('./assets/css/fonts.css');
   @import url('./assets/css/reset.css');

   #app{
      font-family: 'AvenirNextCyrRegular', sans-serif;
   }

   .wrapper{
      width: 100%;
      height: 100%;
   }
</style>
