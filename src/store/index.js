import { createStore } from 'vuex'

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
  },
  mutations: {
    toggleEditPost(state,payload){
        state.editPost = payload;
    },
  },
  actions: {

  },
  getters: {

  }
})