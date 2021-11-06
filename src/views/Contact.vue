<template>
  <div class="Contact">
    <div class="container">
      <div class="tuned">
        <h5 class="lead">Stay tuned!</h5>
        <h2>We are available 24/7!</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
          voluptatum voluptatibus ducimus tenetur nesciunt voluptatem possimus
          tempore, asperiores non est cum, ipsum deleniti minima sunt. Non
          molestias eum iste a.
        </p>
        <div class="row">
          <div class="col-md-4 col-sm-6 col-12">
            <div class="row">
              <div class="col-2">
                <i class="fas fa-at"></i>
              </div>
              <div class="col-10">
                <h4>Email</h4>
                <p>aeae9992@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12">
            <div class="row">
              <div class="col-2">
                <i class="fas fa-phone"></i>
              </div>
              <div class="col-10">
                <h4>Phone</h4>
                <p>+201146321817</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-12">
            <div class="row">
              <div class="col-2">
                <i class="far fa-map"></i>
              </div>
              <div class="col-10">
                <h4>Address</h4>
                <p>Pul-e-Surkh, Kabul, Afghanistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form">
        <div class="row">
          <div class="col-sm-6 col-12">
            <img src="@/assets/images/contact.jpg" />
          </div>
          <div class="col-sm-6 col-12">
            <h5>Drop us a Message</h5>
            <h3>Send Message</h3>
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
    <div class="ready">
      <div class="overlay">
        <div class="container">
          <h2>Ready For Working With Us?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam
            veniam, alias ipsum voluptatibus inventore aliquid tempora itaque
            laudantium dolore quia sit a repudiandae. Assumenda exercitationem
            alias deserunt saepe nesciunt.
          </p>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Construction | Contact"
  },
  created() {
    this.$store.commit("setHeader", {
      home: false,
      title: "Contact",
      type: "contact"
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixins.scss";
@import "@/assets/css/variables.scss";
.Contact {
  .tuned {
    padding: 80px 0 40px;
    h5.lead {
      color: #a4a2a3;
      margin: 10px 0 0;
      @include xs {
        text-align: center;
      }
    }
    h2 {
      color: #e17e23;
      margin: 0 0 30px;
      font-family: "Abril Fatface", cursive;
      text-shadow: 1px 1px 2px rgba($color: #000000, $alpha: 0.5);
      @include xs {
        margin: 0 0 20px;
        text-align: center;
      }
    }
    & > p {
      font-family: "Roboto", sans-serif;
      margin-bottom: 30px;
    }
    .row {
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      p {
        margin: 0;
      }
      h4 {
        margin: 0;
      }
    }
    i {
      color: #e17e23;
      font-size: 38px;
    }
  }
  .form {
    padding: 40px 0 80px;
    h5 {
      color: #a4a2a3;
      margin: 10px 0 0;
      @include xs {
        margin: 30px 0 0;
        text-align: center;
      }
    }
    h3 {
      color: #e17e23;
      margin: 0 0 30px;
      font-family: "Abril Fatface", cursive;
      text-shadow: 1px 1px 2px rgba($color: #000000, $alpha: 0.5);
      @include xs {
        margin: 0 0 20px;
        text-align: center;
      }
    }
    input,
    textarea {
      display: block;
      background: transparent;
      border: none;
      border-bottom: 2px solid #e17e23;
      border-radius: 0;
      padding: 8px 0;
      margin: 10px auto;
      width: 100%;
      color: #e17e23;
      &::placeholder {
        color: #e17e23;
      }
      @include xs {
        width: 100%;
      }
    }
    button {
      margin: 20px 0 0;
      border-radius: 0;
      background: #e17e23;
      color: #fff;
      border-color: transparent;
    }
  }
  .ready {
    margin: 30px 0 0;
    background: url(../assets/images/img4.jpg) fixed no-repeat;
    background-size: cover;
    .overlay {
      background: rgba($color: #000000, $alpha: 0.75);
      padding: 80px 0;
      text-align: center;
    }
    h2 {
      color: #fff;
      margin: 0;
    }
    p {
      margin: 10px 0 0 5px;
      color: #f9f9f9;
      padding: 0 100px;
      @include xs {
        padding: 0;
      }
    }
    span {
      margin: 10px 0 0;
      color: #e17e23;
      i {
        margin-right: 5px;
      }
      &.phone {
        letter-spacing: 3px;
      }
    }
    input,
    textarea {
      display: block;
      background: transparent;
      border: none;
      border-bottom: 2px solid #fff;
      border-radius: 0;
      padding: 8px 0;
      margin: 10px auto;
      width: 65%;
      color: #fff;
      &::placeholder {
        color: #fff;
      }
      @include xs {
        width: 100%;
      }
    }
    button {
      margin: 20px 0 0;
      border-radius: 0;
      background: #fff;
      color: #e17e23;
      border-color: transparent;
    }
  }
}
</style>
