<template>
    <div class="grid justify-center mt-10">
        <div class="px-4 sm:px-6 lg:px-8">
            <UButton
                to="/projects"
                class="mb-4"
                variant="outline"
                color="cyan"
                icon="i-heroicons-arrow-left"
                :label="useI18n().t('projects.detail.backbtn.label')"
            />
        </div>
        <ULandingSection
            v-if="projectData"
        >
            <template #title>
                <span v-html="useI18n().t(`projects.${projectName}.title`)" />
            </template>
            <template #description>
                <span v-html="useI18n().t(`projects.${projectName}.description`)" />
            </template>
            <div class="grid justify-center">
                <ProjectTechComponent :project-tech="projectData.tech" />
            </div>
            
            <NuxtImg
                :src="`/img/projects${projectData.img}`"
                :alt="useI18n().t(`projects.${projectName}.title`)"
                class="w-screen"
            />
            
            <div v-if="projectData.moreImg.length > 0">
                <NuxtImg
                    v-for="(img, index) in projectData.moreImg"
                    :key="index"
                    :src="`/img/projects${img}`"
                    :alt="useI18n().t(`projects.${projectName}.title`)"
                    class="w-screen"
                />
            </div>

            <div class="grid justify-center md:flex">            
                <div
                    v-for="link in projectData.links"
                    :key="link.key"
                >
                    <NuxtLink
                        :to="link.url"
                        :external="true"
                        target="_blank"
                        class="text-cyan-500 hover:text-cyan-700 flex items-center mx-3"
                    >
                        <UIcon
                            v-if="link.type === ProjectLinkTypes.Youtube"
                            name="i-mdi-youtube"
                            class="mr-2"
                        />
                        <UIcon
                            v-if="link.type === ProjectLinkTypes.Github"
                            name="i-mdi-github"
                            class="mr-2"
                        />
                        <UIcon
                            v-if="link.type === ProjectLinkTypes.Website"
                            name="i-mdi-web"
                            class="mr-2"
                        />
                        <span v-text="useI18n().t(`projects.${projectName}.links.${link.key}.label`)" />
                        <UIcon
                            name="i-ic-outline-launch"
                            class="ml-2"
                        />
                    </NuxtLink>
                </div>
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
      ProjectLinkTypes,
      translate: useI18n(),
    };
  },
  computed: {
    projectData(): ProjectDataInterface {
        return projectsData[this.projectName];
    },
  },
  mounted() {
    this.updateMeta();
  },
  methods: {
    updateMeta() {
      useHead({
        title: `${this.translate.t(`projects.${this.projectName}.title`)} | ${this.translate.t('general.company')}`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.translate.t(`projects.${this.projectName}.description`),
          },
        ],
      });
    }
  }
};
</script>
