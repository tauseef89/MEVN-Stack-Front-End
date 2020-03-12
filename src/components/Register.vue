<template>
  <div>
    <Header />
    <main>
      <div class="form-wrrap">
        <h3>User Register</h3>
        <form @submit.prevent="register">
          <input type="text" v-model="name" placeholder="Enter Your Name" />
          <input type="email" v-model="email" placeholder="Enter Your Email" />
          <input
            type="password"
            v-model="password"
            placeholder="Enter Your Password"
          />
          <input type="submit" value="Register" />
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
const baseURL = "http://localhost:2000/api/user/register";
import Header from "@/components/Header.vue";

export default {
  name: "Register",
  components: {
    Header
  },
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      axios
        .post(baseURL, {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push("/login");
        })
        .catch(() => {});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
