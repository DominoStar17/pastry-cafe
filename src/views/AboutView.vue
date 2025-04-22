<template>
  <div class="container about py-5">
    <h1 class="text-center mb-3">About Jiji’s Café</h1>
    <p class="text-center mb-4">Where every pastry is baked with love.</p>

    <h2>Meet the Team</h2>
    <div class="row row-cols-2 row-cols-md-3 g-4 mb-5">
      <div v-for="p in people" :key="p.name" class="col text-center">
        <img :src="p.photo" class="rounded-circle mb-2" width="80" alt="" />
        <h5>{{ p.name }}</h5>
        <p class="text-muted">{{ p.role }}</p>
      </div>
    </div>

    <h2>Our Story</h2>
    <ul class="timeline list-unstyled">
      <li v-for="(evt, i) in timeline" :key="i" class="mb-2">
        <strong>{{ evt.year }}</strong> — {{ evt.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      people: [
        {
          name: "Thing 1",
          role: "Founder",
          photo: "https://i.pravatar.cc/100?img=5",
        },
        {
          name: "Thing 2",
          role: "Head Baker",
          photo: "https://i.pravatar.cc/100?img=2",
        },
        {
          name: "Thing 3",
          role: "Chef Patissier",
          photo: "https://i.pravatar.cc/100?img=7",
        },
      ],
      timeline: [
        { year: "2005", text: "Jiji’s started in a small home kitchen." },
        { year: "2012", text: "We opened our first café on Main St." },
        { year: "2020", text: "Expanded to three new locations." },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/AboutView.scss";
</style>
