<template>
  <div class="container home py-5">
    <!-- Original Developer's Code: Welcome Section -->
    <div class="text-center bg-pink rounded p-4">
      <h1 class="display-5 accent">Welcome to Jiji’s Pastry Café</h1>
      <p class="lead">Lovingly handcrafted pastries & coffee.</p>
      <router-link to="/order" class="btn btn-copper btn-lg"
        >Order Now</router-link
      >
    </div>

    <!-- Header -->
    <header>
      <h1>Welcome to JIJI’s Treats!</h1>
      <p>Tasty treats, inspired by love and creativity.</p>
      <h2>Indulge in Milwaukee's Sweetest Creations</h2>
    </header>

    <!-- Our Story Section -->
    <section>
      <h2>Our Story</h2>
      <p>
        JIJI’s Treats began as a heartfelt dream—to create desserts that don’t
        just taste amazing, but feel special. Rooted in Milwaukee’s vibrant
        culture and a deep love for baking, every treat we make is a blend of
        creativity, care, and flavor. What started as a passion project quickly
        grew into a mission: to bring joy to our community, one bite at a time.
      </p>
      <p>
        Our website was made to spotlight the unique desserts and the feel-good
        experience that JIJI’s Treats brings to every order. We’re more than
        just sweets—we’re a small business built on connection, celebration, and
        a love for creating memories through food.
      </p>
      <p>
        Though we’re currently a virtual kitchen, our vision is growing. We
        dream of opening a storefront where we can welcome you in person. Until
        then, we're so excited to share our creations online and through local
        orders!
      </p>
    </section>

    <!-- Order Section -->
    <section>
      <h2>Order Your Treats</h2>
      <p>
        Craving a taste of JIJI’s Treats? Browse our menu, place an order, and
        choose delivery or pickup. Whether you're celebrating or just treating
        yourself, we’ve got something special for every craving.
      </p>
      <p>
        Check out our Instagram for inspiration, and reach out to place your
        order!
      </p>
    </section>

    <!-- Menu Highlights Section -->
    <section>
      <h2>Menu Highlights</h2>
      <ul>
        <li>
          <strong>Sweet Treats:</strong> Cupcakes and cookies—crafted with love
          and passion
        </li>
        <li>
          <strong>Savory Snacks:</strong> Cultural-inspired bites with a JIJI
          twist
        </li>
        <li>
          <strong>Special Occasions:</strong> Custom cakes for weddings,
          birthdays, and more
        </li>
      </ul>
    </section>

    <!-- Instagram Follow Section -->
    <section>
      <h2>Follow Us on Instagram</h2>
      <p>
        Join the fun and stay connected on Instagram! See our latest creations,
        behind-the-scenes peeks, and exclusive specials—all in one place.
      </p>
      <p>
        📸
        <a href="https://instagram.com/jiji_treats" target="_blank"
          >@jiji_treats</a
        >
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style lang="scss" scoped>
@import "@/assets/HomeView.scss";
</style>
