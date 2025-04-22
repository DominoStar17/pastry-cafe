<template>
  <AppHeader />
  <main class="app-main">
    <router-view />
  </main>
  <AppFooter />
</template>

<script>
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";

export default {
  name: "App",
  components: { AppHeader, AppFooter },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";

#app {
  color: #333;
  font-family: $font-body;
}

.app-main {
  padding-bottom: 80px;
  min-height: calc(100vh - 80px);
}
</style>
