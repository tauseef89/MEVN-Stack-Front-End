<template>
  <div class="dashboard">
    <Sidebar />
    <div class="main-wrrap">
      <h3>Edit Product</h3>
      <div class="form-wrrap">
        <form @submit.prevent="editProduct">
          <input
            type="text"
            v-model="product.title"
            placeholder="Enter Title"
          />
          <input
            type="text"
            v-model="product.price"
            placeholder="Enter Price"
          />
          <input type="submit" value="Save Product" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
// import axios from "axios";
// const baseURL = "http://localhost:2000/api/products";

// const headers = {
//   "Content-Type": "application/json",
//   "auth-token": localStorage.getItem("token")
// };
import { HTTP } from "../http-common";

export default {
  name: "EditProduct",
  components: {
    Sidebar
  },
  data() {
    return {
      id: this.$route.params.id,
      product: {}
    };
  },
  methods: {
    editProduct() {
      let upadetdProduct = {
        title: this.product.title,
        price: this.product.price
      };
      HTTP.put(`products/${this.id}`, upadetdProduct)
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(() => {});
    }
  },
  created() {
    HTTP.get(`products/${this.id}`)
      .then(res => {
        this.product = res.data;
      })
      .catch(() => {});
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info-wrrap {
  max-width: 500px;
  padding: 20px;
  background: #fff;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  margin: 15px auto;
  border-radius: 10px;
  text-align: center;
}
.info-wrrap h4 {
  font-size: 20px;
}
.info-wrrap h5 {
  margin: 10px 0;
}
.info-wrrap button {
  background: #4285f4;
  border: 2px solid #4285f4;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 35px;
  border-radius: 20px;
  cursor: pointer;
  width: 45%;
  margin: 15px 10px 0px 10px;
}
.info-wrrap .btn-delete {
  background: #ea4335;
  border: 2px solid #ea4335;
}
</style>
