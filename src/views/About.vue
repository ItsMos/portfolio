<template>
  <v-container class="px-12">
    <Breadcrumb item="about" />

    <h2 class="mb-1 text-h5 text-primary">Mostafa M. Syam</h2>
    <h4 class="mb-10 text-subtitle-1 font-weight-light">Web Developer</h4>

    <v-divider class="my-10" />
    <p class="mb-5 text-body-1 font-weight-light">Continually learning front end and programming in general from a young age, realizing that the future is dominated by tech.</p>

    <p class="mb-5 text-body-1 font-weight-light">Working as a web developer at day and game scripter at night, with a goal to build a SAAS startup but maybe all the startup ideas are already taken 😄</p>
    <v-divider class="my-10" />

    <v-row class="info-table flex-column flex-md-row">
      <v-col cols="md-6" class="mb-5 mb-md-0">
        <p><span>Birthday:</span>{{ dob.toLocaleString().replace(/,.*$/, '') }}</p>
        <p><span>Age:</span>{{ age }}</p>
        <p><span>Nationality:</span>Egypt</p>
      </v-col>
      <v-col cols="md-6">
        <p><span>Degree:</span>Computer Science Bachelor's</p>
        <p><span>Freelance:</span>Available</p>
        <p><span>Military Service:</span>Completed</p>
      </v-col>
    </v-row>
    <v-divider class="my-10" />

    <v-btn class="mb-10" variant="flat" prepend-icon="far fa-file-lines" size="large" rounded="0" href="/Mostafa_Syam.pdf" download>
      Download CV
    </v-btn>

  </v-container>
  <v-sheet>
    <v-container class="px-12 py-16">
      <v-row class="flex-column flex-md-row">
        <v-col cols="md-5" class="mb-5 mb-md-0">
          <h2 class="mb-8 text-h5 font-weight-medium">Skills</h2>

          <template v-for="[skill, percentage] in skills">
            <p class="mb-3">{{ skill }} <span class="float-right">{{ percentage }}%</span></p>
            <v-progress-linear class="mb-4" :model-value="percentage" />
          </template>
        </v-col>

        <v-col cols="md-5" offset="md-1" class="mb-5 mb-md-0">
          <h2 class="mb-8 text-h5 font-weight-medium">Languages</h2>

          <template v-for="[language, percentage] in languages">
            <p class="mb-3">{{ language }} <span class="float-right">{{ percentage }}%</span></p>
            <v-progress-linear class="mb-4" :model-value="percentage" :stream="percentage < 25" />
          </template>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>

  <v-container class="px-12 py-16">
    <v-row class="flex-column flex-md-row text-body-1 font-weight-light">
      <v-col cols="md-6" class="mb-5 mb-md-0">
        <h2 class="mb-8 text-h5 font-weight-medium">Tools</h2>
        <ul class="fa-ul ml-5">
          <li v-for="tool in tools" :key="tool">
            <span class="fa-li">
              <v-icon color="primary" size="x-small" icon="fa-caret-right"/>
            </span>{{ tool }}
          </li>
        </ul>
      </v-col>
      <!-- <v-col cols="md-6" class="">
        <h2 class="mb-8 text-h5 font-weight-medium">Interests</h2>
        <ul class="fa-ul ml-5">
          <li v-for="tool in tools" :key="tool">
            <span class="fa-li">
              <v-icon color="primary" size="x-small" icon="fa-caret-right"/>
            </span>{{ tool }}
          </li>
        </ul>
      </v-col> -->
    </v-row>
  </v-container>

  <v-sheet>
    <v-container class="px-12 py-16">
      <v-row class="flex-column flex-lg-row">
        <v-col cols="lg-6" class="mb-15">
          <h2 class="mb-8 text-h5 font-weight-medium">Experience</h2>

          <v-timeline side="end" class="justify-start">
            <v-timeline-item
              v-for="[time, title, subtitle] in expierences"
              :key="title"
              size="x-small" dot-color="surface" density="compact"
            >
              <div class="d-flex align-center">
                <v-chip size="large" class="mr-10 flex-shrink-0">{{ time }}</v-chip>
                <div>
                  <p class="text-body-1">{{ title }}</p>
                  <p class="text-body-2 font-weight-thin">{{ subtitle }}</p>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col>

        <v-col cols="lg-6" class="mb-15">
          <h2 class="mb-8 text-h5 font-weight-medium">Education</h2>

          <v-timeline side="end" class="justify-start">
            <v-timeline-item
              v-for="[time, title, subtitle] in education"
              :key="title"
              size="x-small" dot-color="surface" density="compact"
            >
              <div class="d-flex align-center">
                <v-chip size="large" class="mr-10 flex-shrink-0">{{ time }}</v-chip>
                <div>
                  <p class="text-body-1">{{ title }}</p>
                  <p v-if="subtitle.externalLink" class="text-body-2 font-weight-thin">
                    {{ subtitle.text }}
                    <a :href="subtitle.externalLink" target="_blank">{{ subtitle.linkText }}</a>
                  </p>
                  <p v-else class="text-body-2 font-weight-thin">{{ subtitle }}</p>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'

const dob = new Date('04/15/1998')
const age = Math.abs(new Date(Date.now() - dob).getUTCFullYear() - 1970)

const skills = [
  ['JavaScript', 80],
  ['Vue.js', 100],
  ['Node.js', 90],
  ['MongoDB', 85],
  ['MySQL', 80]
]

const languages = [
  ['Arabic', 100],
  ['English', 90],
  ['Turkish', 5]
]

const tools = [
  'HTML5, CSS3',
  'Sass',
  'Vuetify, PrimeVue, Bootstrap, Tailwind',
  'Vue, Pinia, Vue Router',
  'Vite.js, Webpack',
  'Node.js, Express.js',
  'MongoDB, Mongoose'
]

const expierences = [
  ['2023', 'Freelance Frontend Developer', 'Mushor.com'],
  ['2021', 'Freelance Frontend Developer', 'aplusplumbingpros.com'],
  ['2020', 'Fullstack Developer', 'Liberty City Roleplay project'],
  ['2017', 'CSS Messenger Bot', 'Winner of Facebook Circles (best student)']
]

const education = [
  ['2021', 'Misr University for Science and Technology', "Computer Science Bachelor's"],
  ['2017', 'FreeCodeCamp Frontend Track', {
    externalLink: 'https://www.freecodecamp.org/certification/pro-mos/legacy-front-end',
    linkText: 'Certificate',
    text: ''
  }],
  ['2016', 'Javascript Track', {
    externalLink: 'https://www.sololearn.com/Certificate/CT-6UDYSDA4/pdf',
    linkText: 'Certificate',
    text: 'Sololearn'
  }],
  ['2014', 'CS 101', {
    externalLink: 'https://verify.class.stanford.edu/SOA/d953afd22c4347c5b775b05c1179bd2c',
    linkText: 'Certificate',
    text: 'Stanford University Online'
  }]
]
</script>

<style scoped>
.info-table p {
  font-weight: 300;
}
.info-table p > span {
  font-weight: 500;
  min-width: 150px;
  display: inline-block;
}
</style>
