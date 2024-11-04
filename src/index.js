import { AppRouter } from './router.js'

// Components
import './components/CardCreatorPage.js'
import './components/CardSharePage.js'
import './components/CardViewerPage.js'
import './components/NotFoundPage.js'

window.addEventListener('DOMContentLoaded', () => {
  const router = AppRouter.init()

  window.app = {
    router
  }
})