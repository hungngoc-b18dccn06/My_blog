import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import firebase from "firebase/compat/app";
import "firebase/auth";

const app = createApp(App);

firebase.auth().onAuthStateChanged(() => {
  if (app) {
    app.use(router);
    app.use(store);
    app.use(Vue2Editor);
    app.mount("#app");
  }
});
