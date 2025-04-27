<template>
  <div class="container order py-5">
    <h1 class="text-center mb-4">Place Your Order</h1>
    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <div class="card p-4">
          <form @submit.prevent="submit">
            <div class="mb-3">
              <label class="form-label">Your Name</label>
              <input v-model="name" type="text" class="form-control" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Choose Pastry</label>
              <select v-model="pastry" class="form-select">
                <option v-for="i in menu" :key="i">{{ i }}</option>
              </select>
            </div>
            <div class="mb-3 d-flex align-items-center gap-3">
              <label class="form-label mb-0">Quantity</label>
              <button
                type="button"
                class="btn btn-outline-secondary"
                @click="qty = Math.max(1, qty - 1)"
              >
                –
              </button>
              <span>{{ qty }}</span>
              <button
                type="button"
                class="btn btn-outline-secondary"
                @click="qty++"
              >
                +
              </button>
            </div>
            <button type="submit" class="btn btn-copper w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderView",
  data() {
    return {
      name: "",
      pastry: "Croissant",
      qty: 1,
      menu: ["Croissant", "Cake", "Donut", "Muffin", "Macaron", "Eclair"],
    };
  },
  methods: {
    submit() {
      alert(`Thanks ${this.name}! ${this.qty}× ${this.pastry} on its way!`);
      this.name = "";
      this.qty = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/OrderView.scss";
</style>
