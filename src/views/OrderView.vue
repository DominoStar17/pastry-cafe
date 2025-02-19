<template>
  <div class="container mt-5">
    <h1 class="text-primary text-center">Place Your Order</h1>
    <form class="mt-4">
      <div class="mb-3">
        <label class="form-label">Your Name</label>
        <input type="text" class="form-control" placeholder="Enter your name" />
      </div>
      <div class="mb-3">
        <label class="form-label">Select Pastry</label>
        <select class="form-control">
          <option>Croissant</option>
          <option>Cake</option>
          <option>Donut</option>
          <option>Muffin</option>
        </select>
      </div>
      <button type="submit" class="btn btn-success w-100">Submit Order</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "OrderView",
};
</script>

<style scoped>
h1 {
  font-family: "Georgia", serif;
}
</style>
