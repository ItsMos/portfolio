<template>
  <v-navigation-drawer v-model="open" permanent border="0" class="pa-12 bg-wave">
    <template v-slot:image>
      <v-img
        :src="wave"
        height="300"
      >
      </v-img>
    </template>
    <v-img
      class="mt-16 mb-12 mx-auto"
      width="120"
      :src="logoUrl"
    />

    <v-list
      density="compact"
      nav
      active-color="primary"
      variant="plain"
      width="70%"
      class="mx-auto text-center"
    >
      <v-list-item
        rounded="false"
        class="my-3"
        v-for="(link,i) in links"
        :key="i"
        :to="link.to"
        elevation="0"
      >
        <v-list-item-title class="font-weight-regular" style="font-size: 1em">
          {{ link.text }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import logoUrl from '@/assets/logo.svg'
import { ref, onMounted, onUnmounted } from 'vue'
import wave from '@/assets/img/wave.svg'

defineProps({ links: Object })
const open = ref(document.body.offsetWidth > 942)

function toggleSidebar() {
  if (document.body.offsetWidth > 942) {
    open.value = true
  } else {
    open.value = false
  }
}

onMounted(() => addEventListener('resize', toggleSidebar))
onUnmounted(() => removeEventListener('resize', toggleSidebar))
</script>

<!-- <style>
.bg-wave {
  background-image: url(../assets/img/wave.svg);
  background-repeat: no-repeat;
}
</style>
 -->