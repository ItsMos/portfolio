<template>
<v-container class="px-12">
  <Breadcrumb item="portfolio" />
  <h4 class="mb-10 text-subtitle-1 font-weight-light">Here you can find my previous work</h4>

  <v-tabs v-model="tab" class="mb-5" density="compact">
    <v-tab
      v-for="category in tabs"
      :value="category"
      :key="category"
    >
      {{ category }}
    </v-tab>
  </v-tabs>

  <v-row>
    <!-- <transition-group name="fade"> -->
      <v-col
        v-for="project in getTabContents(tab.toLocaleLowerCase())"
        class="d-flex child-flex isotopeItem"
        cols="12" sm="4" lg="3"
      >
        <transition name="fade">
          <v-img
            :src="`/portfolio/${project.image}`"
            aspect-ratio="1"
            cover
            class="project-image"
            @mouseenter="hoveredProject = project"
            @mouseleave="hoveredProject = null"
            @click="displayProject(project)"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </transition>
      </v-col>
    <!-- </transition-group> -->
  </v-row>

  <div class="project-tooltip" v-if="hoveredProject" :style="tooltipStyle">
    <h3 class="text-h5 font-weight-medium px-4 pt-2 bg-surface">{{ hoveredProject.title }}</h3>
    <h4 class="text-subtitle-1 px-4 py-2 bg-surface">{{ hoveredProject.subtitle }}</h4>
  </div>


</v-container>

<v-dialog v-model="dialog" scrim max-width="900px">
  <v-toolbar color="indigo-lighten-1" height="10px">
    <v-toolbar-title>{{ currentProject.title }}</v-toolbar-title>
    <v-btn icon="fa-xmark" color="white" @click="dialog = false" />
  </v-toolbar>
  <v-card class="p">
    <v-img
      :src="`/portfolio/${currentProject.images[0].image}`"
      class="align-end mb-10"
      :gradient="currentProject.images[0].title ? 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)' :  null"
      height="500px"
    >
      <v-card-title v-if="currentProject.images[0].title" class="text-white" v-text="currentProject.images[0].title" />
    </v-img>

    <v-row>
      <v-col cols="12" align-self="center" class="justfy-self-center v-col-md-6">
        <v-card-text class="border mx-4">
          {{ currentProject.describtion }}
          <div
            v-if="currentProject.links"
            v-for="link in currentProject.links"
            class="my-2"
          >
            <a :href="link.link" target="_blank" class="text-white text-decoration-none">
              <v-icon size="x-small" :icon="link.icon" class="mr-2" />{{ link.text }}
            </a>
          </div>
          <div v-if="currentProject.tags" class="mt-5">
            <v-chip color="green-lighten-2" class="mr-1 mt-1" v-for="tag in currentProject.tags">
              {{ tag }}
            </v-chip>
          </div>
        </v-card-text>
      </v-col>

      <v-col cols="12" v-for="image in currentProject.images.slice(1)" class="col-xs-12 v-col-md-6">
        <a :href="'/portfolio/'+image.image" target="_blank" class="text-decoration-none">
          <v-img
            :src="`/portfolio/${image.image}`"
            class="align-end"
            :gradient="image.title ? 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)' :  null"
            height="300px"
            :cover="!mobile && image.cover !== false"
          >
            <v-card-title v-if="image.title" class="text-white" v-text="image.title" />
          </v-img>
        </a>
      </v-col>
    </v-row>
  </v-card>
</v-dialog>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref, reactive, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useDisplay } from 'vuetify'
import allProjects from '@/assets/portfolio.json'

const router = useRouter()
const route = useRoute()
const { mobile } = useDisplay()

const tab = ref('All')
const tabs = [ 'All', 'Frontend', 'Fullstack', 'Codepen' ]
const getTabContents = (tab) => {
  if (tab == 'all') return allProjects
  return allProjects.filter(project => project.type == tab)
}

const hoveredProject = ref(null)
const tooltipStyle = reactive({ left: 0, top: 0 })
function trackMouse(ev) {
  tooltipStyle.left = ev.clientX + 'px'
  tooltipStyle.top = ev.clientY + 20 + 'px'
}
onMounted(() => addEventListener('mousemove', trackMouse))
onUnmounted(() => removeEventListener('mousemove', trackMouse))

const dialog = ref(false)
const currentProject = ref(null)
function displayProject(project, setQuery = true) {
  if (project.type == 'codepen') {
    window.open(project.url, '_blank')
  } else {
    dialog.value = true
    currentProject.value = project
    if (setQuery)
      router.push({ path: route.path, query: { p: project.title.replaceAll(' ', '_') } })
  }
}

const query = route.query
if (query.p) {
  let project = allProjects.find(p => p.title == query.p.replaceAll('_', ' '))
  if (project)
    displayProject(project, false)
}

// remove query on dialog close
watch(dialog, open => !open && router.push({ path: route.path }))
</script>

<style scoped>
.project-tooltip {
  position: fixed;
  top: 0;
  left: 0;
  /* white-space: nowrap; */
  z-index: 1;
}

.project-tooltip h3, .project-tooltip h4 {
  width: fit-content;
}

.project-image {cursor: pointer}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s;
}
</style>
