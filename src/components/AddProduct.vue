<template>
  <div class="dashboard">
    <Sidebar />
    <div class="main-wrrap">
      <h3>Add Product</h3>
      <div class="form-wrrap">
        <form @submit.prevent="addProduct">
          <input type="text" v-model="title" placeholder="Enter Title" />
          <input type="text" v-model="price" placeholder="Enter Price" />
          <input type="submit" value="Add Product" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

import axios from "axios";
const baseURL = "http://localhost:2000/api/products";

const headers = {
  "Content-Type": "application/json",
  "auth-token": localStorage.getItem("token")
};

export default {
  name: "AddProduct",
  components: {
    Sidebar
  },
  data() {
    return {
      title: "",
      price: ""
    };
  },
  methods: {
    addProduct() {
      axios
        .post(
          baseURL,
          {
            title: this.title,
            price: this.price
          },
          {
            headers: headers
          }
        )
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(() => {});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
