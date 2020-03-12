<template>
  <div>
    <Header />
    <main>
      <div class="form-wrrap">
        <h3>User Login</h3>
        <form @submit.prevent="login">
          <input v-model="email" type="email" placeholder="Enter Your Email" />
          <input
            v-model="password"
            type="password"
            placeholder="Enter Your Password"
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
const baseURL = "http://localhost:2000/api/user/login";

import Header from "@/components/Header.vue";

export default {
  name: "Login",
  components: {
    Header
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      axios
        .post(baseURL, {
          email: this.email,
          password: this.password
        })
        .then(res => {
          localStorage.setItem("token", res.data.token),
            this.$router.push("/dashboard");
        })
        .catch(() => {});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
