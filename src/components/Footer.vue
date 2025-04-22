<template>
  <footer class="app-footer">
    <div
      class="container d-flex flex-column flex-md-row justify-content-between gap-4 py-4"
    >
      <!-- Logo -->
      <div class="footer-logo">
        <img
          src="https://via.placeholder.com/150x60.png?text=Logo"
          alt="Logo"
          class="img-fluid"
        />
      </div>
      <!-- Useful Links -->
      <div class="footer-links">
        <h5>Useful Links</h5>
        <ul class="list-unstyled">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/menu">Menu</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/order">Order</router-link></li>
        </ul>
      </div>
      <!-- Socials -->
      <div class="footer-socials">
        <h5>Follow Us</h5>
        <a href="#" class="me-3"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="me-3"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
      </div>
      <!-- Address -->
      <div class="footer-address">
        <h5>Visit Us</h5>
        <address>
          123 Some St.<br />
          Milwaukee, WI 12345
        </address>
      </div>
    </div>
  </footer>
</template>

<script>
export default { name: "AppFooter" };
</script>

<style lang="scss" scoped>
@import "@/assets/Footer.scss";
</style>
