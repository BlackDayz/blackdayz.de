<template>
    <ProjectsComponent :limit="0" />
</template>

<script lang="ts">
export default {
  name: 'ProjectsPage',
  mounted() {
    useHead({
      title: `${this.$t('projects.meta.title')} | ${this.$t('general.company')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('projects.meta.description'),
        },
      ],
    });
  }
};
</script>