// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/styles/main.scss";
import { createPinia, PiniaVuePlugin } from "pinia";

export default function(Vue, { appOptions, router, head, isClient }) {
	// Set default layout as a global component
	Vue.component("Layout", DefaultLayout);
	Vue.use(PiniaVuePlugin);
	appOptions.pinia = createPinia();
}
