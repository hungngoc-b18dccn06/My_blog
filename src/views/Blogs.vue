<template>
  <div>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard
            :post="post"
            v-for="(post, index) in sampleBlogCard"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";
export default {
  data() {
    return {

    };
  },
  components: {
    BlogCard
  },
  computed: {
    sampleBlogCard(){
      return this.$store.state.sampleBlogCard;
    }
  }
};
</script>
<style lang="scss">


</style>
