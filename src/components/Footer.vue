<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-6 col-12">
          <h5>Construction</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            officiis repudiandae doloremque voluptatibus consectetur itaque ad
            sunt praesentium ipsa, soluta rem, placeat eos totam vero? Accusamus
            iusto eos nihil laborum.
          </p>
        </div>
        <div class="col-md-2 col-sm-6 col-12">
          <h5>Links</h5>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/works">Works</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div class="col-md-4 col-sm-6 col-12">
          <h5>Address</h5>
          <p>
            <i class="fas fa-map-marker-alt"></i> St. 214, Block DS-11, Kabul,
            Afghanistan
          </p>
          <p><i class="fas fa-at"></i> 7assan3li1998@mail.ru</p>
          <p><i class="fas fa-phone-square"></i> +01146321817</p>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-12">
          Copyright ©2020 | Hassan Ali
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
footer {
  padding: 50px 0;
  background: #f9f9f9;
  h5 {
    font-family: "Abril Fatface", cursive;
  }
  p {
    font-size: 14px;
    i {
      padding-right: 5px;
      font-size: 18px;
      position: relative;
      top: 3px;
    }
  }
  ul {
    padding: 0;
    li {
      background: none;
      padding: 5px 0;
      a {
        color: #8795a1;
        text-decoration: none;
        &:hover {
          color: #e17e23;
        }
      }
    }
  }
}
</style>
