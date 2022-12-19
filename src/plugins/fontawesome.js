import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faDiscord, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCaretRight, faGlobeAmericas, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
library.add( faBars, faDiscord, faGithub, faTwitter, faFileLines, faCaretRight, faXmark, faLinkedin, faGlobeAmericas )

export default (app) => {
  app.component('font-awesome-icon', FontAwesomeIcon)
}
