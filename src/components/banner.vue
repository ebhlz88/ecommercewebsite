<template>
  <div id="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <p class="promo-title">this is sdfsd</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            exercitationem blanditiis, perspiciatis magnam eius corrupti unde,
            iure est, dicta reiciendis ab at dolorum corporis vero? Debitis
            voluptate earum eveniet beatae.
          </p>
          <router-link to="/cardview"
            ><img class="playbutton" src="../assets/play.png" alt="play" /> Get
            Started</router-link
          >
        </div>
        <div class="col-md-6 text-center">
          <img
            src="../assets/home2.png"
            class="homeimage"
            alt="landing image"
          />
        </div>
      </div>
    </div>
    <img src="../assets/wave1.png" alt="wave" class="bottom-image" />
  </div>
</template>

<script>
export default {
  name: "banner",
  methods: {},
};
</script>

<style>
#banner {
  background-image: linear-gradient(
    to right,
    rgb(162, 39, 211),
    rgb(102, 0, 150)
  );
  color: white;
  padding-top: 2%;
}
.promo-title {
  font-size: 40px;
  font-weight: 600;
  margin-top: 75px;
}
.playbutton {
  width: 45px;
  margin: 20px;
}
#banner a {
  color: white;
  text-decoration: none;
}
.homeimage {
  height: 400px;
}
.bottom-image {
  width: 100%;
}
</style>
