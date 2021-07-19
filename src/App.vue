<template>  
  <Header />
  <router-view/>
  <Footer />
</template>
<script>
import Header from '@/components/shared/Header.vue'
import Footer from '@/components/shared/Footer.vue'
export default {
components :{ Footer,Header }


}
</script>

<style lang="scss">


</style>
