<template>
  <div class="container menu py-4">
    <h1 class="text-center mb-4">Our Pastry Menu</h1>
    <div class="row gy-4">
      <div
        v-for="(item, i) in menuItems"
        :key="i"
        class="col-6 col-md-4 col-lg-3 d-flex align-items-stretch"
      >
        <div class="card w-100">
          <img :src="item.image" class="card-img-top" :alt="item.name" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text text-muted mb-4">
              ${{ item.price.toFixed(2) }}
            </p>
            <button class="mt-auto btn btn-outline-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuView",
  data() {
    return {
      menuItems: [
        {
          name: "Croissant",
          price: 2.99,
          image: "https://source.unsplash.com/200x150/?croissant",
        },
        {
          name: "Chocolate Cake",
          price: 4.5,
          image: "https://source.unsplash.com/200x150/?cake",
        },
        {
          name: "Donut",
          price: 1.75,
          image: "https://source.unsplash.com/200x150/?donut",
        },
        {
          name: "Muffin",
          price: 2.25,
          image: "https://source.unsplash.com/200x150/?muffin",
        },
        {
          name: "Macaron",
          price: 3.0,
          image: "https://source.unsplash.com/200x150/?macaron",
        },
        {
          name: "Eclair",
          price: 3.5,
          image: "https://source.unsplash.com/200x150/?eclair",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/MenuView.scss";
</style>
