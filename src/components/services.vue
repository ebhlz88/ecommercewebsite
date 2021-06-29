<template>
  <div id="services">
    <div class="top-div service-div"></div>
    <div v-for="cards in productlist" :key="cards.id" class="disp">
      <div class="card container" v-on:click="cardclick" style="width: 18rem">
        <img
          class="card-img-top"
          :src="cards.product_photo"
          alt="Card image cap"
        />

        <div class="card-body">
          <h5 class="card-title">{{ cards.productname }}</h5>
          <p class="card-text">{{ cards.productdisc }}</p>
        </div>
      </div>
      <!-- <input type="file" @change="onFileChanged" />
      <button @click="onUpload">Upload!</button> -->
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);
export default {
  data() {
    return {
      productlist: undefined,
      imagesource: null,
      imagefile: null,
    };
  },
  methods: {
    cardclick() {
      console.log("clicked");
    },
    fetch() {
      Vue.axios.get("http://127.0.0.1:8000/products/").then((resp) => {
        this.productlist = resp.data;
        console.log(resp.data[0]);
      });
    },
    onFileChanged(e) {
      let image = e.target.files[0];
      this.imagefile = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.imagesource = e.target.result;
        console.log(e);
      };
    },
    onUpload() {
      let data = new FormData();
      data.append("productname", "my-picture");
      data.append("productdisc", "event.target.files[0]");
      data.append("product_photo", this.imagefile);
      console.log(data);
      // let data = {productname: "produc",productdisc: "this discriptions",product_photo: this.image}
      axios.post("http://127.0.0.1:8000/products/", data).then((resp) => {
        console.log("success" + resp.data);
      });
      this.imagefile = data;
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style>
.service-image {
  width: 100px;
  margin-top: 20px;
}

#services .btn-primary {
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
.userdetail {
  border-left: 4px solid #7b7b7b;
}
#services .image {
  border-radius: 50%;
  width: 60px;
  height: 60px;
}
.top-div {
  background-image: linear-gradient(
    to right,
    rgb(162, 39, 211),
    rgb(102, 0, 150)
  );
  padding-top: 200px;
  width: 100%;
}
.rowmargin {
  padding-bottom: 50px;
  margin: 2rem;
}
.disp {
  display: inline-block;
}
.card {
  min-height: 250px;
}
.card-img-top {
  height: 200px;
}
.disp:hover {
  cursor: pointer;
}
</style>
