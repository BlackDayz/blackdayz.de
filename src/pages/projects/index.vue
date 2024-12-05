<template>
    <ProjectsComponent :limit="0" />
</template>

<script lang="ts">
export default {
  name: 'ProjectsPage',
  data() {
    return {
      translate: useI18n(),
    };
  },
  mounted() {
    useHead({
      title: `${this.translate.t('projects.meta.title')} | ${this.translate.t('general.company')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.translate.t('projects.meta.description'),
        },
      ],
    });
  }
};
</script>