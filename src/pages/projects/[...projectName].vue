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
            v-if="projectData"
            :title="$t(`projects.${projectName}.title`)"
            :description="$t(`projects.${projectName}.description`)"
        >
            <div class="grid justify-center">
                <ProjectTechComponent :project-tech="projectData.tech" />
            </div>
            
            <NuxtImg
                :src="`/img/projects/${projectData.img}`"
                :alt="$t(`projects.${projectName}.title`)"
                class="w-screen"
            />
            
            <div v-if="projectData.moreImg.length > 0">
                <NuxtImg
                    v-for="(img, index) in projectData.moreImg"
                    :key="index"
                    :src="`/img/projects/${img}`"
                    :alt="$t(`projects.${projectName}.title`)"
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
                        <span v-text="$t(`projects.${projectName}.links.${link.key}.label`)" />
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
        title: `${this.$t(`projects.${this.projectName}.title`)} | ${this.$t('general.company')}`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t(`projects.${this.projectName}.description`),
          },
        ],
      });
    }
  }
};
</script>
