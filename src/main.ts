import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import UICard from '@/ui/Card.vue';
import UIButton from '@/ui/Button.vue';
import SvgIcon from '@/components/SvgIcon.vue';

const app = createApp(App);

const req = require.context('@/assets/images/svg', false, /\.svg$/);
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
requireAll(req);

app.component('UICard', UICard);
app.component('UIButton', UIButton);
app.component('SvgIcon', SvgIcon);

app.use(store).use(router).mount('#app');