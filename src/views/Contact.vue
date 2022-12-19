<template>
  <v-container class="px-12">
    <Breadcrumb item="Contact" />
    <v-form
      action="https://formspree.io/f/mnqrekro"
      method="POST"
    >
      <v-text-field :rules="[rules.required, rules.length(3)]" label="Name" name="name" required/>
      <v-text-field :rules="[rules.required, rules.email]" label="Email" name="email" type="email" required/>
      <v-textarea rows="8" label="Message" name="message" :rules="[rules.required, rules.length(6)]"/>

      <v-btn size="large" type="submit">Send Message</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'

const rules = {
  required: v => !!v || 'Required.',
  length: l => {
    return v => v.length >= l || `At least ${l} characters required.`
  },
  email: v => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(v) || 'Invalid e-mail.'
  }
}
</script>
