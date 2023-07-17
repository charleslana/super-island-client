import App from './App.vue';
import interact from 'interactjs';
import router from './router';
import { createApp } from 'vue';
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import './assets/main.css';
import './assets/lib/bulma.min.css';
import './assets/lib/bulma-tooltip.min.css';
import './assets/lib/animate.min.css';

library.add(faAt, faLock);

const app = createApp(App);

app.directive('interact-draggable', {
  beforeMount(el, binding) {
    interact(el).draggable(binding.value);
  }
});

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.mount('#app');
