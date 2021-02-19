<template>
  <header>
    <ul>
      <li v-for="(element, index) in menu" :key="index">
        <nuxt-link :to="element.path"> {{ element.text }} </nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { text: "Home", path: "/" },
        { text: "Contacts", path: "/contacts" },
        { text: "About", path: "/about" },
      ],
    };
  },
};
</script>

<style></style>
