<template>
  <div>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'SlugPage',
  data() {
    return {
      story: null as any,
    };
  },
  async created() {
    const { slug } = useRoute().params;
    const slugPath = Array.isArray(slug) ? slug.join('/') : slug;
    const story = await useAsyncStoryblok(
      slugPath && slugPath.length > 0 ? slugPath : 'home',
      {
        version: useRuntimeConfig().public.storyblokVersion as any,
        language: 'de',
      },
    );
    console.log(story);
    this.story = story;
  }
}
</script>