import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import {createAuth0} from '@auth0/auth0-vue';

const app = createApp(App)

app.use(router)

app.use(
    createAuth0({
      domain: "dev-gm2f3obz.us.auth0.com",
      clientId: "xyWK0YGIFZ15zGVoyuqiIzrTvKr7innY",
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: "http://teammanager/api",
      }
    })
  );


app.mount('#app')

