import { createApp, defineCustomElement } from "vue";
import FooBar from "./FooBar.vue";

export const injectVue = () => {
  const ce = defineCustomElement(FooBar);
  customElements.define("lfo-elem", ce);
};
