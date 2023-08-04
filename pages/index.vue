<template>
  <div id="home-page">
    <TopHeaderSection/>
    <TopIntroduction/>
    <TopNewsSection/>
    <TopVideoNews/>
    <TopNotification/>
  </div>
</template>

<script>
import TopVideoNews from '../components/home-sections/TopVideoNews.vue';
import TopHeaderSection from '../components/home-sections/TopHeaderSection.vue';
import TopIntroduction from '../components/home-sections/TopIntroduction.vue'
import TopNewsSection from '../components/home-sections/TopNewsSection.vue';
import TopNotification from '../components/home-sections/TopNotification.vue';
export default {
  components: {
    TopHeaderSection,
    TopIntroduction,
    TopNewsSection,
    TopVideoNews,
    TopNotification,
  }
}
</script>

<style>
.container {
  min-height: 80vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}


</style>

