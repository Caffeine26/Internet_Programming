<template>
    <header class="menuContainer">
        <nav>
            <ul>
                <li class="feature"> {{ title }}</li>
                <li>All</li>
                <li class="options" v-for="(item, index) in nav" :key="index">{{ item }}</li>
              </ul>
        </nav>
    </header>
  </template>
  <script>
  export default {
    name: 'menuComponent',
    props: ["title", "nav"],
  }
  </script>
  <style >
  .menuContainer {
    max-width: 1650px;
    margin-top: 20px;
    margin-left: -30px;
    display: flex;
    flex-direction: column;
    font-family: 'Trebuchet MS', sans-serif;
  }
  ul {
    list-style: none;
    display: flex;
  }
  li {
    color: white;
    text-decoration: none;
    color: #0c3548;
  }
  .options{
    margin-left: 20px;
    margin-right: 30px;
  }
  .feature {
    margin-right: auto;
    font-size: 20px;
    font-weight: bold;
  }
  </style>