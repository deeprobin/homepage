/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log("%cService Worker > %cApp is being served from cache by a service worker.", "color: #e67e22; font-weight: 700;", "color: #9b59b6;");
    },
    registered () {
      console.log("%cService Worker > %cService worker has been registered.", "color: #e67e22; font-weight: 700;", "color: #9b59b6;");
    },
    cached () {
      console.log("%cService Worker > %cContent has been cached for offline use.", "color: #e67e22; font-weight: 700;", "color: #9b59b6;");
    },
    updatefound () {
      console.log("%cService Worker > %cDownloading new update ...", "color: #e67e22; font-weight: 700;", "color: #9b59b6;");
    },
    updated () {
      console.log("%cService Worker > %cUpdate done [Please refresh the page]. ", "color: #e67e22; font-weight: 700;", "color: #9b59b6;");
    },
    offline () {
      console.log("%cService Worker > %cNo internet connection found. App is running in offline mode.", "color: #e67e22; font-weight: 700;", "color: #9b59b6;");
    },
    error (error) {
      console.error("%cService Worker > %cError during service worker registration: " + error, "color: #e67e22; font-weight: 700;", "color: #c0392b;");
    }
  })
}
