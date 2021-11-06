<template>
  <div id="app">
    <PreLoader v-if="!hideLoader"></PreLoader>
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import PreLoader from "@/components/PreLoader.vue";
export default {
  components: {
    Header,
    Footer,
    PreLoader
  },
  data() {
    return {
      hideLoader: false
    };
  },
  mounted() {
    window.onload = () => {
      setTimeout(() => {
        this.hideLoader = true;
      }, 3000);
    };
  }
};
</script>
