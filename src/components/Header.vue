<template>
  <nav>
    <h1>
      <router-link to="/">Vue Shop</router-link>
    </h1>
    <ul class="main-menu">
      <li>
        <router-link to="/">All Product</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
      <li>
        <router-link to="/register">Register</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>
