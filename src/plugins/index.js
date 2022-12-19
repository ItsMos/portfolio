/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import fontawesome from './fontawesome'

export function registerPlugins (app) {
  loadFonts()
  app.use(vuetify)
  app.use(fontawesome)
}
