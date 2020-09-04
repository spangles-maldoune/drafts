<template>
   <div class="main">
      <div class="container">
         <div class="main__left-area">
            <div class="left-area__header">
               <ul class="left-area__button-group">
                  <li class="left-area__button-group_item" @click="toHome"><img src="../assets/images/btn_home.png" alt="home"></li>
                  <li class="left-area__button-group_item" @click="reFresh"><img src="../assets/images/btn_retry.png" alt="retry"></li>
               </ul>
            </div>
            <div class="left-area__body">
               <div class="left-area__body-text">Параметри:</div>
               <main-counter-group :counter_elements="counterElements"></main-counter-group>
            </div>
            <div class="left-area__footer">
               <div class="left-area__footer-text">
                  Осталось в очереди:
                  <div class="left-area__footer-text_count">
                     <span class="text-count__bold">14</span>
                     /15
                  </div>
               </div>
            </div>
         </div>
         <div class="main__right-area">
            <div class="right-area__body">
               <avatar :current_item="avatars[currentPosition]"
                       @upSwipe="upSwipe"
                       @leftSwipe="leftSwipe"
                       @rightSwipe="rightSwipe"
               ></avatar>
            </div>
            <div class="right-area__footer">
               <ul class="product-button__group">
                  <li class="product-button__group-item">
                     <button class="product-button__group-btn cheap-gradient" id="1" @click="onClick">Препарат 1</button>
                  </li>
                  <li class="product-button__group-item">
                     <button class="product-button__group-btn brand-gradient" id="2" @click="onClick">Препарат 2</button>
                  </li>
                  <li class="product-button__group-item">
                     <button class="product-button__group-btn lime-gradient" id="3" @click="onClick">Препарат 3</button>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import MainCounterGroup from "@/components/MainCounterGroup";
   import ProductButtonGroup from "@/components/ProductButtonGroup";
   import Avatar from "@/components/Main-content/Avatar";

   export default {
      name: "Main",
      components: {
         MainCounterGroup,
         ProductButtonGroup,
         Avatar
      },
      data() {
         return {
            avatars: [
               {
                  image: '1.jpg',
                  name: 'Марія',
                  age: '19 років',
                  description: 'Бабуся приймає брендовий препарат від болю в суглобах, він допомагає, але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.'
               },
               {
                  image: '2.jpg',
                  name: 'Степан',
                  age: '61 рік',
                  description: 'Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі дорогі? Можна хороший препарат недорого?'
               },
               {
                  image: '3.jpg',
                  name: 'Любов',
                  age: '58 років',
                  description: 'Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною.'
               },
               {
                  image: '4.jpg',
                  name: 'Олександр',
                  age: '20 років',
                  description: 'Порекомендуйте ефективний препарат від болю в горлі за розумну ціну.'
               },
               {
                  image: '5.jpg',
                  name: 'Ірина',
                  age: '55 років',
                  description: 'У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний аналог за прийнятною ціною.'
               }
            ],
            counterElements: [
               {
                  img: 'sad_icon.png',
                  counter: 0,
                  id: '1'
               },
               {
                  img: 'happy_icon.png',
                  counter: 0,
                  id: '2'
               },
               {
                  img: 'heart_icon.png',
                  counter: 0,
                  id: '3'
               }
            ],
            currentPosition: 0
         }
      },
      methods: {
         onClick(event) {
            const targetId = event.target.id;
            let currentCount = this.counterElements.find(item => item.id === targetId);
            currentCount.counter++;
            this.toNextAvatar();
         },
         toNextAvatar() {
            if(this.avatars.length - 1 === this.currentPosition) {
               this.$router.push({name: 'final', params: {result: this.calculateInterest()}});
            } else {
               this.currentPosition++
            }
         },
         toHome() {
            this.$router.push('/');
         },
         reFresh() {
            window.location.reload();
         },
         calculateInterest() {
            const result = [];
            const patientQuantity = this.avatars.length;
            this.counterElements.forEach(item => {
               result.push(Math.round(100 / patientQuantity * item.counter))
            })
            return result;
         },
         upSwipe() {
            this.counterElements[1].counter++;
            this.toNextAvatar();
         },
         leftSwipe() {
            this.counterElements[0].counter++;
            this.toNextAvatar();
         },
         rightSwipe() {
            this.counterElements[2].counter++;
            this.toNextAvatar();
         }
      }
   }
</script>

<style lang="scss">
   .main{

      &__left-area{
         background: linear-gradient(63.53deg, rgba(45, 133, 80, .7) 16.62%, rgba(94, 110, 194, .7) 83.38%);
         width: 470px;
      }

      &__right-area{
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: space-between;
         flex: 1 0 auto;
         padding: 130px 0 64px;
      }
   }

   .left-area{

      &__header{
         margin: 0 0 290px 0;
      }

      &__button-group{
         display: flex;
         align-items: center;
         padding: 70px 0 0 50px;

         &_item{
            cursor: pointer;

            &:first-child{
               margin: 0 38px 0 0;
            }
         }
      }

      &__body{
         padding: 0 30px 0 40px;
         margin: 0 0 190px 0;

         &-text{
            font-family: AvenirNextCyrBold, sans-serif;
            font-size: 36px;
            line-height: 44px;
            color: #fff;
            margin: 0 0 30px 0;
         }
      }

      &__footer{
         background: rgba(255, 255, 255, .15);
         height: 134px;
         padding: 20px 0 0;

         &-text{
            font-size: 36px;
            line-height: 44px;
            letter-spacing: 0.02em;
            color: #fff;
            text-align: center;

            &_count{
               font-size: 45px;
               line-height: 55px;
            }
         }
      }
   }

   .right-area{

      &__footer{
         width: 100%;
      }
   }

   .product-button__group{
      display: flex;
      justify-content: space-between;
      margin: 0 20px 0 30px;

      &-btn{
         width: 280px;
         height: 90px;
         border: none;
         border-radius: 100px;
         font-size: 28px;
         line-height: 34px;
         color: #fff;
         font-family: AvenirNextCyrBold, sans-serif;
         outline: none;
         cursor: pointer;
      }
   }

   .text-count__bold{
      font-family: AvenirNextCyrBold, sans-serif;
   }

   .cheap-gradient{
      background: linear-gradient(266.19deg, #8049C7 0%, #CA57FD 100%);
   }

   .brand-gradient{
      background: linear-gradient(266.19deg, #169AE4 0%, #0CC4FA 100%);
   }

   .lime-gradient{
      background: linear-gradient(90deg, #FFD748 0.02%, rgba(195, 199, 11, 0.96) 99.97%, #CAC6AB 99.98%, #D3E9E1 99.99%);
   }

</style>