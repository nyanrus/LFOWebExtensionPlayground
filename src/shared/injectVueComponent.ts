/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

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
