<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">Construction</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/works">Works</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixins.scss";
.navbar.bg-dark {
  background: transparent !important;
  padding: 10 30px;
  .navbar-brand {
    font-family: "Abril Fatface", cursive;
    color: #fff;
    padding-right: 25px;
  }
  .navbar-toggler {
    color: transparent;
    border-color: transparent;
    padding: 0;
    box-shadow: none;
  }
  .navbar-nav {
    @include md {
      background: rgba($color: #000000, $alpha: 0.7);
      border-radius: 0 0 15px 15px;
      overflow: hidden;
      .nav-item {
        .nav-link {
          padding: 10px 15px !important;
          color: #e17e23 !important;
        }
      }
    }
    .nav-item {
      background: transparent !important;
      padding: 10px 0px !important;
      @include md {
        padding: 0 !important;
      }
      .nav-link {
        color: #fff;
        font-family: "Poppins", sans-serif;
        padding: 7px 15px;
        &:hover {
          color: #e17e23;
          font-weight: bold;
          background: #fff;
          border-radius: 15px;
          @include md {
            border-radius: 0px;
          }
        }
      }
    }
  }
}
</style>
