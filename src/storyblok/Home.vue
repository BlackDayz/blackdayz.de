<template>
    <div v-editable="blok" class="px-4">
      <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
    </div>
  </template>
   
<script>
export default {
    name: 'StoryblokComponent',
    props: {
      blok: {
        type: Object,
        required: true,
      },
    },
}
</script>