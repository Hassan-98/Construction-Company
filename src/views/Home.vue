<template>
  <div class="home">
    <div class="container">
      <div class="about">
        <div class="row">
          <div class="col-md-7 col-sm-6 col-12">
            <div
              class="about-section"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <h5>About Us</h5>
              <h2>Construction Company!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ipsam sint laudantium! Hic aut obcaecati corporis
                voluptatum laudantium quo necessitatibus! Voluptatibus possimus
                aspernatur cupiditate natus aliquid officiis unde numquam eius.
                voluptatum laudantium quo necessitatibus! Voluptatibus possimus
                aspernatur cupiditate natus aliquid officiis unde numquam eius.
              </p>
              <hr />
              <h5>
                Hassan Ali
              </h5>
              <span>Hassan Ali Corp.</span>
            </div>
          </div>
          <div class="col-md-5 col-sm-6 col-12">
            <div class="img" data-aos="fade-left" data-aos-duration="1000">
              <img src="@/assets/images/img1.jpg" />
            </div>
          </div>
        </div>
      </div>
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
          <div class="col-12">
            <button>View All Works</button>
          </div>
        </div>
      </div>
      <div class="services">
        <div class="row">
          <div class="col-12">
            <h5 class="lead">What we offer!</h5>
            <h2>OUR SERVICES</h2>
          </div>
          <div class="col-md-4 col-sm-6 col-12 pos">
            <div
              class="service"
              data-aos="zoom-in-right"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              <img src="@/assets/images/browser.svg" />
              <h5>Service One</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus quas fugit qui magni nesciunt laborum!
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12 pos">
            <div
              class="service"
              data-aos="zoom-in-right"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <img src="@/assets/images/profession.svg" />
              <h5>Service Two</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus quas fugit qui magni nesciunt laborum!
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12 pos">
            <div
              class="service"
              data-aos="zoom-in-right"
              data-aos-duration="700"
              data-aos-delay="400"
            >
              <img src="@/assets/images/multimedia.svg" />
              <h5>Service Three</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus quas fugit qui magni nesciunt laborum!
              </p>
            </div>
          </div>
          <div class="col-12">
            <button>View All Services</button>
          </div>
        </div>
      </div>
    </div>
    <div class="opinions">
      <div class="container">
        <div class="opinions-slider">
          <carousel
            :autoplay="true"
            :autoplayTimeout="5000"
            :perPageCustom="[
              [0, 1],
              [768, 2],
              [992, 3]
            ]"
            :navigationEnabled="false"
            paginationActiveColor="#e17e23"
            paginationColor="#fff"
            :paginationPadding="0"
            :paginationSize="10"
            :loop="true"
          >
            <slide>
              <div class="slide">
                <i class="fas fa-quote-left"></i>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus nemo explicabo fuga laboriosam.
                </p>
                <h4>&mdash; Hassan Ali</h4>
              </div>
            </slide>
            <slide>
              <div class="slide">
                <i class="fas fa-quote-left"></i>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus nemo explicabo fuga laboriosam.
                </p>
                <h4>&mdash; Hassan Ali</h4>
              </div>
            </slide>
            <slide>
              <div class="slide">
                <i class="fas fa-quote-left"></i>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus nemo explicabo fuga laboriosam.
                </p>
                <h4>&mdash; Hassan Ali</h4>
              </div>
            </slide>
            <slide>
              <div class="slide">
                <i class="fas fa-quote-left"></i>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus nemo explicabo fuga laboriosam.
                </p>
                <h4>&mdash; Hassan Ali</h4>
              </div>
            </slide>
            <slide>
              <div class="slide">
                <i class="fas fa-quote-left"></i>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus nemo explicabo fuga laboriosam.
                </p>
                <h4>&mdash; Hassan Ali</h4>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="blogs">
        <div class="row">
          <div class="col-12">
            <h5 class="lead">Latest News!</h5>
            <h2>OUR BLOG</h2>
          </div>
          <div class="col-md-4 col-sm-6 col-12 pos">
            <div
              class="blog"
              data-aos="zoom-out-left"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              <img src="@/assets/images/work3.jpg" />
              <span
                ><i class="far fa-clock"></i> 20 April 2020
                <i class="far fa-user ml-3"></i> Admin</span
              >
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit</h5>
              <i class="fas fa-long-arrow-alt-right i"></i>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12 pos">
            <div
              class="blog"
              data-aos="zoom-out-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <img src="@/assets/images/work4.jpg" />
              <span
                ><i class="far fa-clock"></i> 20 April 2020
                <i class="far fa-user ml-3"></i> Admin</span
              >
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit</h5>
              <i class="fas fa-long-arrow-alt-right i"></i>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12 pos">
            <div
              class="blog"
              data-aos="zoom-out-left"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <img src="@/assets/images/work5.jpg" />
              <span
                ><i class="far fa-clock"></i> 20 April 2020
                <i class="far fa-user ml-3"></i> Admin</span
              >
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit</h5>
              <i class="fas fa-long-arrow-alt-right i"></i>
            </div>
          </div>
          <div class="col-12">
            <button>View All News</button>
          </div>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="overlay">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-12">
              <p>Stay tuned!</p>
              <h1>Contact Us</h1>
              <span
                ><i class="fas fa-map-marker-alt"></i> St. 214, Block DS-11,
                Kabul, Afghanistan</span
              >
              <span class="phone"
                ><i class="fas fa-phone-square"></i>+01146321817</span
              >
            </div>
            <div class="col-md-8 col-12 text-center">
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message" rows="5"></textarea>
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixins.scss";
.home {
  .about {
    padding: 100px 0;
    @include sm {
      padding: 50px 0;
    }
    .about-section {
      @include sm {
        margin-bottom: 20px;
      }
      h5 {
        color: #a4a2a3;
        margin: 10px 0 0;
      }
      h2 {
        color: #e17e23;
        margin: 0 0 30px;
        font-family: "Abril Fatface", cursive;
        text-shadow: 1px 1px 2px rgba($color: #000000, $alpha: 0.5);
      }
      p {
        line-height: 30px;
        padding: 0 100px 0 0;
        @include md {
          padding: 0;
        }
      }
      span {
        color: #e17e23;
        font-family: "Nothing You Could Do", cursive;
        font-weight: bold;
      }
    }
    .img {
      height: 500px;
      background: #e17e23;
      box-shadow: 2px 2px 5px rgba($color: #000000, $alpha: 0.3);
      img {
        width: 100%;
        height: 100%;
        box-shadow: 1px 1px 4px rgba($color: #000000, $alpha: 0.5);
        position: relative;
        top: 10px;
        right: 10px;
        @include xs {
          top: 0;
          right: 0;
        }
      }
    }
  }
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
  .services {
    padding: 0 0 50px 0;
    h5.lead {
      color: #a4a2a3;
      margin: 10px 0 0;
      @include xs {
        text-align: center;
      }
    }
    h2 {
      color: #e17e23;
      margin: 0 0 50px;
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
    .service {
      margin: 10px 0;
      @include xs {
        margin: 20px 0;
        padding: 0 20px;
      }
      h5 {
        font-weight: bold;
        margin: 15px 0 0;
        text-transform: uppercase;
      }
      p {
        font-family: "Roboto", sans-serif;
      }
      img {
        width: 80px;
        height: 80px;
      }
    }
  }
  .opinions {
    margin: 30px 0;
    padding: 80px 0 50px;
    background: url(../assets/images/img1.jpg) fixed no-repeat;
    background-size: cover;
    .opinions-slider {
      .slide {
        background: #fff;
        margin: 0 7px;
        padding: 30px;
        h4 {
          color: #bbbbbb;
        }
        i {
          font-size: 28px;
        }
      }
    }
  }
  .blogs {
    padding: 80px 0 40px;
    @include xs {
      padding: 40px 0;
    }
    h5.lead {
      color: #a4a2a3;
      margin: 10px 0 0;
      @include xs {
        text-align: center;
      }
    }
    h2 {
      color: #e17e23;
      margin: 0 0 50px;
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
    .pos {
      .blog {
        width: 100%;
        cursor: pointer;
        margin: 10px 0;
        @include xs {
          margin: 20px 0;
        }
        img {
          width: 100%;
          height: 300px;
        }
        span {
          color: #a4a2a3;
          font-weight: 100;
          margin: 15px 0 10px;
          font-size: 13px;
          font-family: "Roboto", sans-serif;
        }
        h5 {
          margin: 0 0 5px 0;
          color: #212529;
          padding: 0;
          font-family: "Roboto", sans-serif;
          font-weight: bold;
          &:hover {
            color: #e17e23;
          }
        }
        &:hover {
          img {
            filter: grayscale(1);
          }
          .i {
            padding-left: 10px;
            color: #e17e23;
          }
        }
      }
    }
  }
  .contact {
    margin: 30px 0 0;
    background: url(../assets/images/contact.jpg) fixed no-repeat;
    background-size: cover;
    .overlay {
      background: rgba($color: #000000, $alpha: 0.6);
      padding: 80px 0;
    }
    h1 {
      color: #fff;
      margin: 0;
    }
    p {
      margin: 0 0 0 5px;
      color: #f9f9f9;
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

<style lang="scss">
.VueCarousel {
  .VueCarousel-pagination {
    padding-top: 20px !important;
    .VueCarousel-dot {
      outline: none;
      margin: 0 5px;
      border: 1px solid #e17e23;
      background: transparent !important;
      &.VueCarousel-dot--active {
        background: #e17e23 !important;
      }
    }
  }
}
</style>
