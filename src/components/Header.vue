<template>
  <header
    :class="{
      works: header.type == 'works',
      about: header.type == 'about',
      services: header.type == 'services',
      contact: header.type == 'contact'
    }"
  >
    <div class="overlay">
      <Navbar></Navbar>
      <div class="header">
        <div class="container">
          <div
            v-if="header.home"
            class="content"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <h1>Construction</h1>
            <h3>We Handle It For You From Here</h3>
            <p>Hassan Ali Corp.</p>
          </div>
          <div
            v-else
            class="content"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <h1>Construction</h1>
            <h6>Home - {{ header.title }}</h6>
            <p>Hassan Ali Corp.</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "Header",
  components: {
    Navbar
  },
  computed: {
    header() {
      return this.$store.state.header;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";
header {
  text-align: center;
  background: url(../assets/images/img3.jpg) fixed no-repeat;
  background-size: cover;
  height: 100vh;
  &.about {
    background: url(../assets/images/img5.jpg) fixed no-repeat;
    background-size: cover;
  }
  &.works {
    background: url(../assets/images/img2.jpg) fixed no-repeat;
    background-size: cover;
  }
  &.services {
    background: url(../assets/images/img4.jpg) fixed no-repeat;
    background-size: cover;
  }
  &.contact {
    background: url(../assets/images/img1.jpg) fixed no-repeat;
    background-size: cover;
  }
  .overlay {
    background: rgba($color: #000000, $alpha: 0.3);
    height: 100%;
    color: #fff;
    .header {
      padding: 130px 0;
      .content {
        border: 10px solid #fff;
        padding: 20px 100px;
        display: inline-block;
        background: rgba($color: #000000, $alpha: 0.3);
        @include xs {
          padding: 20px 50px;
        }
        h1 {
          font-family: "Abril Fatface", cursive;
        }
        h3 {
          background: #e17e23;
          color: #fff;
          font-size: 25px;
          padding: 10px;
          display: inline-block;
          font-family: "Poppins", sans-serif;
        }
        p {
          font-family: "Nothing You Could Do", cursive;
          color: #ccc;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
