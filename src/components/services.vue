<template>
  <div id="services" class="container">
      <div class="row">
          <div class="col-md-4">
              <img src="../assets/service1.png" class="service-image" alt="service">
              <h3>This is service One</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea iure consequatur eos nemo architecto neque recusandae, officia mollitia obcaecati nisi nobis ad dolore reiciendis. Eveniet non qui saepe eaque?</p>
          </div>
          <div class="col-md-4">
              <img src="../assets/service1.png" class="service-image" alt="service">
              <h3>This is service Two</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea iure consequatur eos nemo architecto neque recusandae, officia mollitia obcaecati nisi nobis ad dolore reiciendis. Eveniet non qui saepe eaque?</p>
          </div>
          <div class="col-md-4">
              <img src="../assets/service1.png" class="service-image" alt="service">
              <h3>This is service Three</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea iure consequatur eos nemo architecto neque recusandae, officia mollitia obcaecati nisi nobis ad dolore reiciendis. Eveniet non qui saepe eaque?</p>
          </div>
          <button class="btn btn-primary" type="button">Click</button>
      </div>
      <div class="row margintop">
          <div class="col-md-4 userdetail">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, iste explicabo vel veniam beatae amet </p>
                <img src="../assets/user1.jpg" class="image" alt="user">
                <p><b>Emad baloch</b><br/>Web Developer</p>
          </div>
          <div class="col-md-4 userdetail">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, iste explicabo vel veniam beatae amet </p>
                <img src="../assets/user1.jpg" class="image" alt="user">
                <p><b>Emad baloch</b><br/>Web Developer</p>
          </div>
          <div class="col-md-4 userdetail">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, iste explicabo vel veniam beatae amet </p>
                <img src="../assets/user1.jpg" class="image" alt="user">
                <p><b>Emad baloch</b><br/>Web Developer</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.service-image{
    width: 100px;
    margin-top: 20px;
}
#services .btn-primary{
     background-image: linear-gradient(
    to right,
    rgb(162, 39, 211),
    rgb(102, 0, 150)
  );
  border-radius: 20px;
  border: none;
  padding: 8px 25px;
  box-shadow: none;
  width: auto;
  margin: auto;
}
.userdetail{
    border-left: 4px solid #7b7b7b;
}
#services .image{
    border-radius: 50%;
    width: 60px;
    height: 60px;
}
.margintop{
    margin-top: 90px;
}
</style>