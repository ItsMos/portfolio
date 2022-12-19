<template>
  <v-breadcrumbs class="mb-5" bg-color="surface" :items="[{title: item, disabled: false}]" />
</template>

<script setup>
defineProps({item: String})
</script>

<style scoped>
.v-breadcrumbs {
  text-transform: uppercase;
  display: inline-block;
}
</style>
