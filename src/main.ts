import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import UIButton from '@/ui/Button.vue';
import SvgIcon from '@/components/SvgIcon.vue';

const app = createApp(App);

app.component('UIButton', UIButton);
app.component('SvgIcon', SvgIcon);

const req = require.context('@/assets/images/svg', false, /\.svg$/);
const requireAll = (requireContext: any) => requireContext.keys().map(requireContext);
requireAll(req);

app.use(store).use(router).mount('#app');