<template>
  <v-app-bar>
    <template #prepend>
      <router-link to="/">
        <v-img width="32" src="/src/assets/logo.svg" />
      </router-link>
    </template>

    <v-app-bar-nav-icon id="nav-activator" />

    <v-menu class="mobile-nav" activator="#nav-activator" transition="slide-y-transition">
      <v-list
        active-color="primary"
        variant="elevated"
        width="100vw"
      >
        <v-list-item
          elevation="0"
          v-for="(link,i) in links"
          :title="link.text"
          :value="link.text"
          :to="link.to"
        >
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
const props = defineProps({ links: Object })


</script>

<style>
.mobile-nav > .v-overlay__content {
  left: 0 !important;
}
</style>
