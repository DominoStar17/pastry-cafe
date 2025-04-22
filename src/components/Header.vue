<template>
  <header class="app-header">
    <div class="container">
      <div class="header-bar">
        <!-- Mobile hamburger -->
        <button
          class="hamburger btn btn-outline-secondary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasMenu"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Logo -->
        <img
          class="logo"
          src="https://via.placeholder.com/180x80.png?text=Logo"
          alt="Logo"
        />

        <!-- Desktop nav -->
        <nav class="header-nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/menu" class="nav-link">Menu</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/order" class="nav-link">Order</router-link>
          <router-link to="/cart" class="nav-link">
            <i class="fas fa-shopping-cart"></i>
          </router-link>
          <div class="vr mx-2"></div>
          <router-link to="/contact" class="btn btn-contact">
            Contact Us
          </router-link>
        </nav>
      </div>
    </div>

    <!-- Offcanvas sidebar for mobile -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu">
      <div class="offcanvas-header">
        <!-- Logo in place of title -->
        <img
          class="offcanvas-logo"
          src="https://via.placeholder.com/120x40.png?text=Logo"
          alt="Logo"
        />
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>
      <div class="offcanvas-body">
        <nav class="nav flex-column">
          <router-link to="/" class="nav-link" data-bs-dismiss="offcanvas"
            >Home</router-link
          >
          <hr class="sidebar-divider" />
          <router-link to="/menu" class="nav-link" data-bs-dismiss="offcanvas"
            >Menu</router-link
          >
          <hr class="sidebar-divider" />
          <router-link to="/about" class="nav-link" data-bs-dismiss="offcanvas"
            >About</router-link
          >
          <hr class="sidebar-divider" />
          <router-link to="/order" class="nav-link" data-bs-dismiss="offcanvas"
            >Order</router-link
          >
          <hr class="sidebar-divider" />
          <router-link to="/cart" class="nav-link" data-bs-dismiss="offcanvas">
            <i class="fas fa-shopping-cart"></i> Cart
          </router-link>
          <hr class="sidebar-divider" />
          <router-link
            to="/contact"
            class="nav-link"
            data-bs-dismiss="offcanvas"
          >
            Contact Us
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
@import "@/assets/Header.scss";
</style>
