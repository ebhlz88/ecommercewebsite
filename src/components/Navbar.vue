<template>
  <div>
    <nav id="nav" class="navbar navbar-expand-lg navbar-light nav">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"
          ><img src="../assets/demo-logo.png" alt="logo"
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mlauto">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cardview">PRODUCT</router-link>
            </li>
            <li class="nav-item">
              <GoogleLogin
                :renderParams="renderParams"
                :params="params"
                :onSuccess="onSuccess"
                :onFailure="onFailure"
                >Login</GoogleLogin
              >
            </li>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
export default {
  name: "Navbar",
  components: {
    GoogleLogin,
  },
  data() {
    return {
      // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
      params: {
        client_id:
          "499885857695-7mv29pitrudbte1u6a6naeb8bh3ubcva.apps.googleusercontent.com",
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },
  methods: {
    onSuccess(googleUser) {
      // This only gets the user information: id, name, imageUrl and email
      console.log(googleUser.getBasicProfile().getEmail());
      this.name = googleUser.getBasicProfile().getEmail();
      this.imagee = googleUser.getBasicProfile().getImageUrl();
    },
    onFailure() {
      console.log("fail");
    },
  },
};
</script>

<style>
.navbar {
  background-image: linear-gradient(
    to right,
    rgb(162, 39, 211),
    rgb(102, 0, 150)
  );
  padding: 0px !important;
  width: 100%;
}
.mlauto {
  margin-left: auto !important;
  padding-right: 0px;
}
.navbar-brand img {
  height: 40px;
  padding-left: 20px;
}
.navbar-nav li {
  padding: 0px 10px;
}
.navbar-nav li a {
  color: white !important;
  font-weight: 600;
}
.fa-bars {
  color: #fff;
}
#nav .btn-outline-success {
  background-color: #348ceb;
  border-radius: 20px;
  border: none;
  padding: 8px 25px;
  box-shadow: none;
  width: auto;
  margin: auto;
  color: white;
}
</style>
