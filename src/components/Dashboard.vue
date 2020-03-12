<template>
  <div class="dashboard">
    <Sidebar />
    <div class="main-wrrap">
      <h3>Dashboard</h3>
      <ul class="products">
        <li v-for="product of products" :key="product._id">
          <h4>{{ product.title }}</h4>
          <router-link :to="`/edit-product/${product._id}`">Edit</router-link>
          <button class="btn-delete" @click="deleteProduct(product._id)">
            Delete
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const baseURL = "http://localhost:2000/api/products";

const headers = {
  "Content-Type": "application/json",
  "auth-token": localStorage.getItem("token")
};

import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "Dashboard",
  components: {
    Sidebar
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    deleteProduct(id) {
      axios
        .delete(`${baseURL}/${id}`, {
          headers: headers
        })
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(() => {});
    }
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

<style scoped>
.products {
  background: #ffffff;
  padding: 15px;
  margin-top: 15px;
  border-radius: 10px;
}
.products li {
  list-style: none;
  border-bottom: 1px solid #f5f6fa;
  display: flex;
  padding: 10px 0;
  align-items: center;
}
.products li h4 {
  flex: 10;
}
.products li a {
  flex: 1;
}
.products li a,
.products li .btn-delete {
  text-align: center;
  background: #4285f4;
  border: 2px solid #4285f4;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 35px;
  border-radius: 20px;
  cursor: pointer;
  width: 45%;
  display: inline-block;
  text-decoration: none;
}
.products li .btn-delete {
  flex: 1;
  background: #ea4335;
  border: 2px solid #ea4335;
  margin: 0px 0px 0px 10px;
}
</style>
