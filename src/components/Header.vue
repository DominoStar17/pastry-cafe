<template>
  <header class="app-header sticky-top bg-white shadow-sm">
    <div
      class="container d-flex align-items-center justify-content-between py-2"
    >
      <!-- Hamburger menu (mobile only) -->
      <button
        class="hamburger-btn d-lg-none"
        @click="toggleSidebar"
        aria-label="Toggle navigation"
      >
        <span class="hamburger-icon"></span>
      </button>

      <!-- Mobile Centered Logo -->
      <router-link to="/" class="mx-auto d-lg-none logo-mobile">
        <img
          src="@/assets/images/jijilogo.png"
          alt="Jiji's Pastries Logo"
          class="logo-sm"
        />
      </router-link>

      <!-- Desktop Layout: Logo left, nav right -->
      <div
        class="d-none d-lg-flex w-100 justify-content-between align-items-center"
      >
        <router-link to="/" class="navbar-brand">
          <img
            src="@/assets/images/jijilogo.png"
            alt="Jiji's Pastries Logo"
            class="logo-sm"
          />
        </router-link>
        <ul class="nav align-items-center mb-0 gap-4">
          <li class="nav-item">
            <router-link to="/" class="nav-link link-style">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/menu" class="nav-link link-style"
              >Menu</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link link-style"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/order" class="nav-link link-style"
              >Order</router-link
            >
          </li>

          <div class="vr mx-3 d-none d-lg-block"></div>

          <li class="nav-item">
            <router-link to="/cart" class="nav-link cart-link">
              <i class="fas fa-shopping-cart"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="btn btn-contact ms-2">
              Contact Us
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- Sidebar Offcanvas (Mobile Menu) -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebar">
      <div class="offcanvas-header">
        <router-link to="/" class="offcanvas-brand" @click="closeSidebar">
          <img
            src="@/assets/images/jijilogo.png"
            alt="Jiji's Pastries Logo"
            class="logo-sm"
          />
        </router-link>
        <button type="button" class="btn-close" @click="closeSidebar"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="nav flex-column gap-3">
          <li class="nav-item">
            <router-link to="/" class="sidebar-link" @click="closeSidebar"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/menu" class="sidebar-link" @click="closeSidebar"
              >Menu</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="sidebar-link" @click="closeSidebar"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/order" class="sidebar-link" @click="closeSidebar"
              >Order</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="sidebar-link" @click="closeSidebar">
              <i class="fas fa-shopping-cart"></i> Cart
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/contact"
              class="sidebar-link"
              @click="closeSidebar"
              >Contact Us</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { Offcanvas } from "bootstrap";

export default {
  name: "AppHeader",
  data() {
    return {
      sidebar: null,
    };
  },
  mounted() {
    this.sidebar = Offcanvas.getOrCreateInstance(
      document.getElementById("sidebar")
    );
  },
  methods: {
    toggleSidebar() {
      this.sidebar.toggle();
    },
    closeSidebar() {
      this.sidebar.hide();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/Header.scss";
</style>
