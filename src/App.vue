<template>
  <router-link :to="'/'">Notes</router-link>
  <router-link :to="'/stats'">Stats</router-link>
  <!-- <RouterView /> -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
