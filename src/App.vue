<template>
  <v-app>
    <Sidebar width="400" :links="links" />
    <Header class="d-md-none w-100" :links="links" />

    <v-main>
      <RouterView #default="{ Component, route }">
        <transition name="slide-fade" mode="out-in">
          <div :key="route.path">
            <component :is="Component" />
          </div>
        </transition>
      </RouterView>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
export default {
  components: { Header, Sidebar },
  data() {
    return {
      links: [
        { text: 'Home', to: { name: 'Home' }},
        { text: 'About', to: { name: 'About' }},
        { text: 'Portfolio', to: { name: 'Portfolio' }},
        { text: 'Contact', to: { name: 'Contact' }}
      ]
    }
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
