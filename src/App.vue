<template>  
  <Header />
  <router-view/>
  <Footer v-if="!['Signin', 'Signup','Reset'].includes($route.name)" />
  
</template>
<script>
import Header from '@/components/shared/header/Header.vue'
import Footer from '@/components/shared/footer/Footer.vue'
export default {
components :{ Footer,Header }


}
</script>

<style lang="scss">

*{
  position: relative;
}

</style>
