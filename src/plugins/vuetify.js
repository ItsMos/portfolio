/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa-svg'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: '#da5161'
          // secondary: '#5CBBF6'
        }
      },

      light: {
        colors: {
          primary: '#011628',
          surface: '#c4c4c4'
        }
      }
    }
  },

  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa
    }
  }
})
