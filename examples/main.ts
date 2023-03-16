import { createApp } from 'vue'
import App from './app.vue'
const app = createApp(App)
import { test } from '@fiction-ui/utils'
import { Button } from 'fiction-ui'
console.log(Button);

app.use(Button)

test()
app.mount('#app') 