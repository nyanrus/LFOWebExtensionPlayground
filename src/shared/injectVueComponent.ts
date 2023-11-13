import { createApp, defineCustomElement } from "vue";
import FooBar from "./FooBar.vue";

// in Chrome, We should use CustomElement Polyfill
// because on customElements.define(),
// occurs the error `TypeError: Cannot read properties of null (reading 'define')`
import "@webcomponents/custom-elements";

export const injectVue = () => {
  const ce = defineCustomElement(FooBar);
  customElements.define("lfo-elem", ce);
};
