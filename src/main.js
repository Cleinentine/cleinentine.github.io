import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/style.css'

import Anchor from './components/Anchor.vue'
import Button from './components/Button.vue'
import Heading from './components/Heading.vue'

const app = createApp(App)

app.component('Anchor', Anchor)
app.component('Button', Button)
app.component('Heading', Heading)

app.mount('#app')