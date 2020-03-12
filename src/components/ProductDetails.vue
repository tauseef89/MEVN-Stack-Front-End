<template>
  <div>
    <Header />
    <main>
      <div class="info-wrrap">
        <h4>{{ product.title }}</h4>
        <h5>Price: {{ product.price }}</h5>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
const baseURL = "http://localhost:2000/api/products";

import Header from "@/components/Header.vue";

export default {
  name: "ProductDetails",
  components: {
    Header
  },
  data() {
    return {
      id: this.$route.params.id,
      product: []
    };
  },
  created() {
    axios
      .get(`${baseURL}/${this.id}`)
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
</style>
