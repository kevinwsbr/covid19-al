<template>
  <section class="about mb-4">
    <about-card />
  </section>
</template>
<script>
import AboutCard from "../components/cards/AboutCard";

export default {
  name: "Home",
  components: {
    "about-card": AboutCard,
  },
};
</script>
