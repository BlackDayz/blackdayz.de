<template>
    <div class="grid justify-center mt-10">
        <div class="px-4 sm:px-6 lg:px-8">
            <UButton
                to="/projects"
                class="mb-4"
                variant="outline"
                color="cyan"
                icon="i-heroicons-arrow-left"
                :label="$t('projects.detail.backbtn.label')"
            />
        </div>
        <ULandingSection
            :title="project.title"
            :description="project.description"
        >
            <NuxtImg
                :src="project.img"
                :alt="project.title"
                class="w-screen"
            />
            <div v-if="project.moreImgs.length > 0">
                <NuxtImg
                    v-for="(img, index) in project.moreImgs"
                    :key="index"
                    :src="img"
                    :alt="project.title"
                    class="w-screen"
                />
            </div>
        </ULandingSection>
    </div>
</template>

<script lang="ts">
export default {
  name: 'ProjectsDetailPage',
  data() {
    return {
      projectName: useRoute().params.projectName[0],
      project: {
        title: '',
        description: '',
        img: '',
        moreImgs: [] as string[],
      },
    };
  },
  mounted() {
    const localeMessages = useI18n().getLocaleMessage(useI18n().locale.value) as Record<string, any>;
    const projectStrings = localeMessages.projects[this.projectName];
    if(!projectStrings) {
      throw createError({
        statusCode: 404,
      });
    }
    useHead({
      title: projectStrings.title.body.static, 
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: projectStrings.description.body.static,
        },
      ],
    });

    const detailImgs = Object.keys(projectStrings.detail || {});
    if(detailImgs.length > 0) {
      detailImgs.forEach((key) => {
        this.project.moreImgs.push('/img/projects' + projectStrings.detail[key].body.static);
      });
    }

    this.project = {
      title: projectStrings.title.body.static,
      description: projectStrings.description.body.static,
      img: '/img/projects' + projectStrings.img.body.static,
      moreImgs: detailImgs || [],
    };
  }
};
</script>
