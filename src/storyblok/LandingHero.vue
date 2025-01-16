<template>
    <div v-editable="blok" class="px-4">
        {{ block }}
    </div>
  </template>
   
<script>
export default {
    name: 'LandingHeroStoryblokComponent',
    props: {
      blok: {
        type: Object,
        required: true,
      },
    },
}
</script>