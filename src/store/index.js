import { createStore } from 'vuex'

export default createStore({
  state: {
    sampleBlogCard: [
      {
        blogTitle: "mot",
        blogCoverPhoto: "stock-1",
        blogDate: "May 10, 1:46p",
      },
      {
        blogTitle: "hai",
        blogCoverPhoto: "stock-2",
        blogDate: "May 11, 2022",
      },
      {
        blogTitle: "ba",
        blogCoverPhoto: "stock-3",
        blogDate: "May 12, 2022",
      },
      {
        blogTitle: "bon",
        blogCoverPhoto: "stock-4",
        blogDate: "May 13, 2022",
      },
    ],
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
})