<template>
   <div class="right-area-body__avatar" v-touch:swipe="swipeHandler">
      <div class="avatar-image__area">
         <img :src="userImage.image" alt="">
      </div>
      <div class="avatar-description__area">
         <span class="avatar-description__area-info">
            {{current_item.name}}, {{current_item.age}}
         </span>
         <span class="avatar-description__area-text">{{current_item.description}}</span>
      </div>
   </div>
</template>

<script>
   import Vue from 'vue'
   import Vue2TouchEvents from 'vue2-touch-events'
   Vue.use(Vue2TouchEvents)

   export default {
      name: "Avatar",
      props: {
         current_item: {
            type: Object,
            default() {
               return {}
            }
         }
      },
      methods: {
         swipeHandler(direction) {
            if(direction === 'top') {
               this.$emit('upSwipe');
            } else if (direction === 'left') {
               this.$emit('leftSwipe');
            } else if (direction === 'right') {
               this.$emit('rightSwipe');
            }
         }
      },
      computed: {
         userImage() {
            return {
               ...this.current_item,
               image: this.current_item.image && require(`../../assets/images/${this.current_item.image}`)
            }
         }
      }
   }
</script>

<style lang="scss">
   .right-area-body__avatar{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 540px;
      height: 590px;
      box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));
      border-radius: 40px;
   }

   .avatar-image__area{
      margin: 0 0 25px 0;
   }

   .avatar-description__area{
      display: flex;
      flex-direction: column;
      margin: 0 50px;

      &-info{
         font-family: AvenirNextCyrBold, sans-serif;
         font-size: 32px;
         line-height: 39px;
         color: #8E9AD5;
         margin: 0 0 5px 0;
      }

      &-text{
         font-size: 24px;
         line-height: 29px;
         color: #424242;
      }
   }

</style>