<template>
  <div class="side-bar">
    <h1>Vue Shop</h1>
    <ul class="side-menu">
      <li>
        <router-link to="/dashboard">Dashboard</router-link>
      </li>
      <li>
        <router-link to="/add-product">Add Product</router-link>
      </li>
      <li>
        <a style="cursor: pointer;" @click="logOut">Logout</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    logOut() {
      localStorage.removeItem("token"), this.$router.push("/login");
    }
  }
};
</script>
