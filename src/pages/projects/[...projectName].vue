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
            v-if="project.title"
            :title="project.title"
            :description="project.description"
        >
            <div class="grid justify-center">
                <ProjectTechComponent :project="project" />
            </div>
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

            <div class="flex justify-center">
                <div
                    v-for="link in project.links"
                    :key="link.key"
                >
                    <NuxtLink
                        :to="link.link"
                        :external="true"
                        target="_blank"
                        class="text-cyan-500 hover:text-cyan-700 flex items-center mx-3"
                    >
                        <UIcon
                            v-if="link.type === 'youtube'"
                            name="i-mdi-youtube"
                            class="mr-2"
                        />
                        <UIcon
                            v-if="link.type === 'github'"
                            name="i-mdi-github"
                            class="mr-2"
                        />
                        <UIcon
                            v-if="link.type === 'website'"
                            name="i-mdi-web"
                            class="mr-2"
                        />
                        <span v-text="link.label" />
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
interface ProjectLink {
  key: string;
  label: string;
  link: string;
  type: 'youtube' | 'github' | 'website';
}

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
        links: [] as ProjectLink[],
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
      title: `${projectStrings.title.body.static} | ${this.$t('general.company')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: projectStrings.description.body.static,
        },
      ],
    });

    const detailImgs = Object.keys(projectStrings.detail || {});
    const newImgs: string[] = [];
    if(detailImgs.length > 0) {
      detailImgs.forEach((key) => {
        newImgs.push('/img/projects' + projectStrings.detail[key].body.static);
      });
    }

    const links = Object.keys(projectStrings.links || {});
    const newLinks: ProjectLink[] = [];
    if(links.length > 0) {
      links.forEach((key) => {
        newLinks.push({
          key,
          type: projectStrings.links[key].type.body.static,
          label: projectStrings.links[key].label.body.static,
          link: projectStrings.links[key].url.body.static
        });
      });
    }

    this.project = {
      title: projectStrings.title.body.static,
      description: projectStrings.description.body.static,
      img: '/img/projects' + projectStrings.img.body.static,
      moreImgs: newImgs || [],
      links: newLinks || [],
    };
  }
};
</script>
