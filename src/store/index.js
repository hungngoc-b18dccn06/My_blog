import { createStore } from 'vuex'
import firebase from "firebase/compat/app";
import db from "../firebase/firebaseInit"
import "firebase/auth";
export default createStore({
  state: {
    sampleBlogCard: [
      {
        blogTitle: "mot",
        blogCoverPhoto: "/src/assets/blogCards/stock-1.jpg",
        blogDate: "May 10, 1:46p",
      },
      {
        blogTitle: "hai",
        blogCoverPhoto: "/src/assets/blogCards/stock-2.jpg",
        blogDate: "May 11, 2022",
      },
      {
        blogTitle: "ba",
        blogCoverPhoto: "/src/assets/blogCards/stock-3.jpg",
        blogDate: "May 12, 2022",
      },
      {
        blogTitle: "bon",
        blogCoverPhoto: "/src/assets/blogCards/stock-4.jpg",
        blogDate: "May 13, 2022",
      },
    ],
    editPost: null,
    blogTitle: '',
    user: null,
    profileAdmin: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
  },
  mutations: {
    toggleEditPost(state,payload){
        state.editPost = payload;
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileInfo(state,doc){
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().username;
      console.log(state.user);
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName[0] +"-" + state.profileLastName[0];
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUsername(state, payload) {
      state.profileUsername = payload;
    },
  },
  actions: {
    async getCurrentUser({commit}){
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo",dbResults);
      commit("setProfileInitials");
    },
    async updateUserSettings({ commit, state }) {
      const dataBase = await db.collection("users").doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername,
      });
      commit("setProfileInitials");
    },

  },
  getters: {

  }
})