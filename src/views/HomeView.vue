<template>
  <div class="container home py-5">
    <div class="text-center bg-pink rounded p-4">
      <h1 class="display-5 accent">Welcome to Jiji’s Pastry Café</h1>
      <p class="lead">Lovingly handcrafted pastries & coffee.</p>
      <router-link to="/order" class="btn btn-copper btn-lg"
        >Order Now</router-link
      >
    </div>
  </div>
</template>

<script>
export default { name: "HomeView" };
</script>

<style lang="scss" scoped>
@import "@/assets/HomeView.scss";
</style>
