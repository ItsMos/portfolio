<template>
  <v-container fluid class="d-flex h-100 flex-column justify-center align-center">

    <v-card class="headshot"></v-card>

    <h1 class="text-h3 my-10 text-center text-primary">Mostafa Syam</h1>
    <p class="px-10">I am a Web Developer with much love to Vue.js and Node.js with a hobby of scripting games.</p>

    <div class="d-flex justify-center mt-14">
      <v-btn 
        v-for="btn in social"
        :key="btn.icon"
        class="mx-3"
        :href="btn.link"
        target="_blank"
        :icon="btn.icon"
      />
    </div>
  </v-container>
</template>

<script setup>
  const social = [
    { link: 'https://twitter.com/JustMos_', icon: 'fab fa-twitter' },
    { link: 'http://discordapp.com/users/182829946220183563', icon: 'fab fa-discord' },
    { link: 'https://github.com/ItsMos', icon: 'fab fa-github' },
    { link: 'https://www.linkedin.com/in/mostafa-syam-994ba813a', icon: 'fab fa-linkedin' }
  ]
</script>

<style scoped>
.headshot {
  background-image: url(/src/assets/img/headshot.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, .25);
  animation: 4s tokyo-morph infinite;
}

@keyframes tokyo-morph {
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%
  }

  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%
  }

  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%
  }
}
</style>
