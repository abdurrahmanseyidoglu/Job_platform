<template>
<div class="home">
    <div class="hero">
    <div class="hero-wrapper">
        <h1>أكبر سوق عربي لعرض الخدمات </h1>
        <h2>أعلن عن شركتك بسهولة وأمان وبأسعار مغرية</h2>
        <router-link to="/signup"
          >
          <button class="sign-up">
           ابدأ الآن
          </button></router-link
          
        >
        </div>
    </div>
</div>
<CardsFilter />
</template>

<script>
import CardsFilter from '@/views/home/CardsFilter.vue'
export default {
  components : {CardsFilter},
  setup() {

  },
};

</script>
<style lang="scss">
    .home{

        .hero{
            background-image: url(../../assets/images/hero.jpg);
            min-height: 90vh;
            background-size: cover;
            margin: 50px;
            border-radius: 7px;
            .hero-wrapper{
            display: flex;
            flex-flow: column wrap;
            align-items: center;
            justify-content:center;
            }
            
          @include mq(tablet, max) {
            background-image: none;
            text-align: center;
            min-height: auto;
          }

        }
        .sign-up {
        background: $blue;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        font-weight: 600;
        text-align: center;
        justify-content: center;
        align-items: center;
        border: white solid 1px;
        white-space: nowrap;
        padding: 0.5rem 1.25rem;
        border-radius: 7px;
        margin-left: 20px;
        &:hover {
          background-color: darken($blue, 20%);
        }
        &:active {
          border: red solid 1px;
        }
      }
    }
</style>
