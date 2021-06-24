<template>
  <div>
    <nav id="nav" class="navbar navbar-expand-lg navbar-light nav">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img src="../assets/demo-logo.png" alt="logo"
        /></a>
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
              <a class="nav-link active" aria-current="page" href="#">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">PRODUCT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">LOGIN</a>
            </li>
             <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
          </ul>

          
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
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
  margin-left:auto !important;
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
#nav .btn-outline-success{
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
