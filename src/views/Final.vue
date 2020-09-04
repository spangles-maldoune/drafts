<template>
   <div class="final">
      <div class="container">
         <div class="final__button-home" @click="toHome">
            <img src="../assets/images/btn_home2.png" alt="">
         </div>
         <div class="final__info-area">
            <div class="final__info-area_sales">
               <ul class="final__info-area_list">
                  <li class="final__info-area_item">
                     <div class="final__info-area_result" id="1">{{result[0]? result[0] : 0}}%</div>
                     <span class="final__info-area_drug">Препарат 1</span>
                  </li>
                  <li class="final__info-area_item">
                     <div class="final__info-area_result" id="2">{{result[1]? result[1] : 0}}%</div>
                     <span class="final__info-area_drug">Препарат 2</span>
                  </li>
                  <li class="final__info-area_item">
                     <div class="final__info-area_result" id="3">{{result[2]? result[2] : 0}}%</div>
                     <span class="final__info-area_drug">Препарат 3</span>
                  </li>
               </ul>
            </div>
            <div class="final__info-area_description">
               <div class="final__info-area_text">
                  Ваш результат: <h3 class="final__info-area_title">«Что я здесь делаю?»</h3>
               </div>
               <p class="final__info-area_desc">Это тестовое задание, так что не будем углубляться в глубины проблем фармацевтов.</p>
            </div>
            <div class="one-more__button-area" @click="toMain">
               <button class="one-more__button">Попробовать еще</button>
            </div>
         </div>
         <div class="final__image-area">
            <img src="../assets/images/final.png" alt="">
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: "Final",
      props: {
         result: {
            type: Array,
            default() {
               return [];
            }
         }
      },
      methods: {
         toHome() {
            this.$router.push('/');
         },
         toMain() {
            this.$router.push('/main');
         }
      },
   }
</script>

<style lang="scss">
   .final{
      background: #fff;

      &__button-home{
         margin: 70px 0 0 50px;
         cursor: pointer;
      }

      &__image-area{
         margin: 0 0 0 auto;
      }

      &__info-area{

         &_sales{
            border-bottom: 2px solid #D9D9D9;
            margin: 260px 0 40px 10px;
         }

         &_list{
            display: flex;
            margin: 0 0 50px;
         }
         
         &_item{
            text-align: center;
            margin: 0 80px 0 0;

            &:first-child{
               margin: 0 80px 0 30px;
            }

            &:last-child{
               margin: 0 30px 0 0;
            }
         }

         &_result{
            font-size: 48px;
            line-height: 59px;
            color: #424242;
            margin: 0 0 15px;
         }

         &_drug{
            font-family: AvenirNextCyrBold, sans-serif;
            font-size: 16px;
            line-height: 20px;
            color: #424242;
         }

         &_description{
            margin: 0 0 250px 10px;
         }

         &_text{
            font-size: 32px;
            line-height: 35px;
            letter-spacing: 0.02em;
            color: #8E9AD5;
            margin: 0 0 20px;
         }

         &_title{
            font-family: AvenirNextCyrBold, sans-serif;
            font-size: 40px;
            line-height: 44px;
         }

         &_desc{
            font-size: 24px;
            line-height: 29px;
            color: #424242;
         }
      }
   }

   .one-more__button{
      font-family: AvenirNextCyrBold sans-serif;
      font-size: 24px;
      line-height: 29px;
      color: #FFFFFF;
      background: linear-gradient(90deg, #D9D9D9 0%, #A1A1A1 100%);
      border-radius: 100px;
      border: none;
      cursor: pointer;
      outline: none;
      width: 270px;
      height: 60px;
   }

</style>