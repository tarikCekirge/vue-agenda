<template>
  <NavBar />
  <!-- <RouterView /> -->
  <div class="container is-max-desktop px-2 py-4">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style>
@import url("bulma/css/bulma.min.css");
</style>

<script setup>
import NavBar from "@/components/Layout/NavBar.vue";
</script>
