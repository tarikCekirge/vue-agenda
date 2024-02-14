<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 has-text-weight-bold">Agenda</div>

        <a @click.prevent="navToggle" :class="{ 'is-active': showMobileNav }" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showMobileNav }">
        <div class="navbar-end">
          <router-link class="navbar-item" active-class="is-active" :to="'/'">Notes</router-link>
          <router-link class="navbar-item" active-class="is-active" :to="'/stats'">Stats</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
/**
 * imports
 */
import { ref } from "vue";
import { useRouter } from "vue-router";
import router from "@/router";

/**
 * Mobile Nav
 */

const showMobileNav = ref(false);
const navToggle = () => {
  showMobileNav.value = !showMobileNav.value;
};

// Function to handle route change
const handleRouteChange = () => {
  showMobileNav.value = false; // Close mobile nav when route changes
};

// Register beforeRouteUpdate guard to handle route changes
// router.beforeRouteUpdate(handleRouteChange);
router.beforeEach((to, from, next) => {
  handleRouteChange(); // Call the handleRouteChange function directly
  next();
});
</script>

<style>
@media (max-width: 1024px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
