<template>
	<div class="cover">
      <div class="container">
         <div class="cover-ellipse">
            <span class="cover-text">Добро пожаловать в игру</span>
            <h1 class="cover-title">Помоги <span class="cover-title__uppercase">Фармацевту</span></h1>
            <button class="cover-button" @click="onBegin">Начать</button>
         </div>
      </div>
	</div>
</template>

<script>
  export default {
     name: "Cover",
     methods: {
        onBegin() {
           this.$router.push('/main');
        }
     }
  }
</script>

<style lang="scss">
   .cover{
      background: url("../assets/images/Group.jpg") no-repeat;
      background-size: 100%;


      &-ellipse{
         width: 860px;
         height: 860px;
         background: url("../assets/images/Ellipse.png") top left/contain no-repeat;
         margin: 0 0 0 110px;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
      }

      &-text{
         font-size: 35px;
         line-height: 41px;
         font-weight: 300;
         color: #FFFFFF;
         text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
         margin: 0 0 29px 0;
      }

      &-title{
         font-family: 'AvenirNextCyrBold', sans-serif;
         font-size: 60px;
         line-height: 66px;
         letter-spacing: 0.02em;
         color: #FFFFFF;
         margin: 0 0 120px 82px;

         &__uppercase{
            font-size: 70px;
            line-height: 77px;
            text-transform: uppercase;
            display: block;
         }
      }

      &-button{
         font-family: MontserratBold, sans-serif;
         font-size: 36px;
         line-height: 44px;
         color: #8E9AD5;
         width: 381px;
         height: 90px;
         border: none;
         border-radius: 100px;
         cursor: pointer;

         &:hover{
            outline: none;
         }
      }
   }

   .container{
      max-width: 1440px;
      height: 1024px;
      margin: 0 auto;
      display: flex;
   }
</style>