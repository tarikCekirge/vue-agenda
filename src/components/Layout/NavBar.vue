<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 has-text-weight-bold">Agenda</div>

        <a @click.prevent="navToggle" :class="{ 'is-active': showMobileNav }" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" ref="navbarBurgerRef">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showMobileNav }" ref="target">
        <div class="navber-start">
          <button v-if="storeAuth.user.id" @click="storeAuth.logoutUser" class="button is-small is-info mt-3 ml-3">Logout</button>
        </div>
        <div class="navbar-end">
          <router-link @click="showMobileNav = false" class="navbar-item" active-class="is-active" :to="'/'">Notes</router-link>
          <router-link @click="showMobileNav = false" class="navbar-item" active-class="is-active" :to="'/stats'">Stats</router-link>
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
import { onClickOutside } from "@vueuse/core";
import { useStoreAuth } from "@/stores/storeAuth";

/**
 * Sign Out
 */

const storeAuth = useStoreAuth();

/**
 * Mobile Nav
 */

const showMobileNav = ref(false);
const navToggle = () => {
  showMobileNav.value = !showMobileNav.value;
};

/**
 * Click outside to close
 */
const target = ref(null);
const navbarBurgerRef = ref(null);
onClickOutside(
  target,
  (event) => {
    showMobileNav.value = false;
  },
  {
    ignore: [navbarBurgerRef],
  }
);
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
