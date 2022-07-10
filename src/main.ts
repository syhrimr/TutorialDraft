import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// node modules import
import { Quasar } from 'quasar'

// styling import
// - import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// - import main Quasar css
import 'quasar/src/css/index.sass'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, {
  plugins: {} // for import Quasar plugins
})

app.mount('#app')
