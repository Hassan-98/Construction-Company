<template>
  <div class="Works">
    <div class="container">
      <div class="works">
        <div class="row">
          <div class="col-12">
            <h5 class="lead">What we have done!</h5>
            <h2>OUR WORKS</h2>
          </div>
          <div class="col-md-4 col-sm-6 col-12 pos">
            <div
              class="work"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <img src="@/assets/images/work1.jpg" />
              <h5>Work Num 1</h5>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12 pos">
            <div
              class="work"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <img src="@/assets/images/work2.jpg" />
              <h5>Work Num 2</h5>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12 pos">
            <div
              class="work"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="800"
            >
              <img src="@/assets/images/work3.jpg" />
              <h5>Work Num 3</h5>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12 pos">
            <div
              class="work"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <img src="@/assets/images/work4.jpg" />
              <h5>Work Num 4</h5>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12 pos">
            <div
              class="work"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <img src="@/assets/images/work5.jpg" />
              <h5>Work Num 5</h5>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12 pos">
            <div
              class="work"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="800"
            >
              <img src="@/assets/images/work6.jpg" />
              <h5>Work Num 6</h5>
            </div>
          </div>
          <div class="col-12">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="newsletter">
        <div class="row">
          <div class="col-md-7 col-sm-6 col-12">
            <div
              class="about-section"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <h5>Never miss any update!</h5>
              <h2>Newsletter</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ipsam sint laudantium! Hic aut obcaecati corporis.
              </p>
            </div>
          </div>
          <div class="col-md-5 col-sm-6 col-12">
            <div class="img" data-aos="fade-left" data-aos-duration="1000">
              <input type="email" placeholder="Type Your Email Address" />
              <button>Subscribe</button>
            </div>
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
    title: "Construction | Works"
  },
  created() {
    this.$store.commit("setHeader", {
      home: false,
      title: "Works",
      type: "works"
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixins.scss";
@import "@/assets/css/variables.scss";
.Works {
  .works {
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
    button {
      display: block;
      margin: 40px auto 20px;
      color: #fff;
      background: #23272b;
      border-color: transparent;
      border-radius: 0px;
    }
    ul {
      li {
        padding: 0;
        a {
          color: #e17e23;
        }
      }
    }
    .pos {
      .work {
        position: relative;
        width: 100%;
        height: 450px;
        overflow: hidden;
        cursor: pointer;
        margin: 10px 0;
        @include xs {
          margin: 20px 0;
        }
        img {
          width: 100%;
          height: 100%;
        }
        h5 {
          position: absolute;
          margin: 0;
          bottom: -100px;
          width: 75%;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          padding: 10px;
          color: #fff;
          background: #e17e23;
          border-radius: 5px;
        }
        &:hover {
          h5 {
            bottom: 15px;
          }
          img {
            filter: grayscale(1);
          }
        }
      }
    }
  }
  .newsletter {
    padding: 50px 0;
    .row {
      justify-content: center;
      align-items: center;
    }
    h5 {
      color: #a4a2a3;
      margin: 10px 0 0;
    }
    h2 {
      color: #e17e23;
      margin: 0 0 10px;
      font-family: "Abril Fatface", cursive;
      text-shadow: 1px 1px 2px rgba($color: #000000, $alpha: 0.5);
    }
    p {
      line-height: 30px;
      padding: 0 100px 0 0;
      font-family: "Roboto", sans-serif;
      @include md {
        padding: 0;
      }
    }
    input {
      display: block;
      border-radius: 4px;
      width: 100%;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom-color: #7b7b7b;
      &:focus {
        border-color: #e17e23;
      }
    }
    button {
      margin: 20px 0 0;
      border-radius: 0;
      color: #fff;
      background: #e17e23;
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
