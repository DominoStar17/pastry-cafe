<template>
  <footer class="app-footer">
    <div class="container footer-main">
      <div class="row gy-4">
        <!-- Logo -->
        <div class="col-12 col-md-3">
          <div class="footer-section text-center text-md-start">
            <div class="footer-logo mb-3">
              <img
                src="@/assets/images/jijilogo.png"
                alt="Jiji's Pastries Logo"
                class="logo-sm"
              />
            </div>
          </div>
        </div>

        <!-- Useful Links -->
        <div class="col-6 col-md-3">
          <div class="footer-section text-center text-md-start">
            <h5>Useful Links</h5>
            <ul class="list-unstyled footer-links">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/menu">Menu</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/order">Order</router-link></li>
            </ul>
          </div>
        </div>

        <!-- Socials -->
        <div class="col-6 col-md-3">
          <div class="footer-section text-center text-md-start">
            <h5>Follow Us</h5>
            <div
              class="footer-socials d-flex gap-3 justify-content-center justify-content-md-start"
            >
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>

        <!-- Address -->
        <div class="col-12 col-md-3">
          <div class="footer-section text-center text-md-start">
            <h5>Visit Us</h5>
            <address>
              123 Some St.<br />
              Milwaukee, WI 12345
            </address>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
      © 2025 Jiji’s Pastry Café. All Rights Reserved.
    </div>

    <!-- Scroll to Top Button -->
    <button v-show="showScrollTop" class="scroll-to-top" @click="scrollToTop">
      ↑
    </button>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      showScrollTop: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showScrollTop = window.scrollY > 300;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/Footer.scss";
</style>
