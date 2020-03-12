<template>
  <div>
    <Header />
    <main>
      <ul class="products">
        <li v-for="product of products" :key="product._id">
          <h4>{{ product.title }}</h4>
          <h5>Price: {{ product.price }}</h5>
          <router-link :to="`/product-details/${product._id}`"
            >View Details</router-link
          >
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import axios from "axios";
const baseURL = "http://localhost:2000/api/products";

import Header from "@/components/Header.vue";

export default {
  name: "Products",
  components: {
    Header
  },
  data() {
    return {
      products: []
    };
  },
  created() {
    axios
      .get(baseURL)
      .then(res => {
        this.products = res.data;
      })
      .catch(() => {});
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.products li {
  list-style: none;
  width: 30%;
  padding: 20px;
  background: #fff;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  margin: 10px;
  border-radius: 10px;
  text-align: center;
}
.products h5 {
  margin: 10px 0;
}
.products a {
  background: #34a853;
  color: #fff;
  display: block;
  text-align: center;
  line-height: 35px;
  text-decoration: none;
  border-radius: 20px;
}
</style>
