<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
*,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  background: #f5f6fa;
}
main {
  max-width: 1200px;
  margin: 0 auto;
}
.form-wrrap {
  max-width: 500px;
  padding: 20px;
  background: #fff;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  border-radius: 10px;
}
.form-wrrap input {
  width: 100%;
  margin-top: 15px;
  height: 40px;
}
.form-wrrap input[type="text"],
.form-wrrap input[type="email"],
.form-wrrap input[type="password"] {
  background: #edeef6;
  border: 2px solid #edeef6;
  padding-left: 10px;
  color: #000000;
  font-size: 15px;
  border-radius: 5px;
}
.form-wrrap input[type="submit"] {
  background: #34a853;
  border: 2px solid #34a853;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 35px;
  border-radius: 20px;
  cursor: pointer;
}
.form-wrrap input[disabled] {
  opacity: 0.5;
  cursor: auto;
}

nav {
  background: #fff;
  padding: 15px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
nav h1 a {
  color: #0176ff;
}
nav li {
  list-style: none;
  display: inline-block;
  vertical-align: middle;
}
nav a {
  color: #242939;
  padding: 0 15px;
  text-decoration: none;
  line-height: 30px;
  display: block;
}
nav a:hover {
  color: #0176ff;
}
.dashboard {
  display: flex;
}
.side-bar {
  background: #fff;
  flex: 2;
  height: 100vh;
  padding: 15px;
}
.side-bar h1 {
  color: #242939;
}
.side-menu li {
  list-style: none;
}
.side-menu li a {
  display: block;
  line-height: 20px;
  padding: 15px;
  color: #242939;
  text-decoration: none;
  background: #f5f6fa;
  margin-top: 15px;
  border-radius: 8px;
}
.side-menu li a:hover {
  background: #4285f4;
  color: #fff;
}
.main-wrrap {
  flex: 10;
  padding: 15px;
}
</style>
