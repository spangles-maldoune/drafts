<template>
   <ul class="main__counter-group">
      <li class="main__counter-group-item"
         v-for="element in counter_elements"
          :key="element.id"
      >
         <img class="main__counter-group-image" :src="require('../assets/images/' + element.img)" alt="">
         <span class="main__counter-group-text">{{element.counter}}</span>
      </li>
   </ul>
</template>

<script>
   export default {
      name: "MainCounterGroup",
      props: {
         counter_elements:{
            type: Array,
            default() {
               return [];
            }
         }
      }
   }
</script>

<style lang="scss">
   .main__counter-group{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      &-item{
         width: 190px;
         height: 80px;
         background: #fff;
         border-radius: 40px;
         box-shadow: 0 0 50px rgba(131, 42, 64, 0.4);
         display: flex;
         align-items: center;
         justify-content: space-between;

         &:first-child{
            margin: 0 0 37px 0;
         }

         &:last-child{
            margin: 0 auto;
         }
      }

      &-image{
         margin: 0 0 0 10px;
      }

      &-text{
         font-family: AvenirNextCyrBold, sans-serif;
         font-size: 48px;
         line-height: 59px;
         margin: 0 40px 0 0;
      }

   }

</style>