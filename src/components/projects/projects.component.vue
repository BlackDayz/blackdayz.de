<template>
    <ULandingSection
        :title="useI18n().t('homepage.landing.projects.title')"
        :headline="limit === 0 ? '' : useI18n().t('homepage.landing.projects.headline')"
    >
        <UPageGrid>
            <UPageCard
                v-for="(module, index) in modules.slice(0, limit === 0 ? modules.length : limit)"
                :key="index"
                :prefetch="true"
                :prefetch-on="{ interaction: true }"
                v-bind="module"
                :to="module.to"
            >
                <template #icon>
                    <NuxtImg
                        :src="`/img/projects/${module.projectData.img}`"
                        class="h-48 w-full object-cover"
                        loading="lazy"
                    />
                </template>
                <template #description>
                    <span
                        class="line-clamp-2"
                        v-html="module.description"
                    />
                    <div class="mt-3">
                        <ProjectTechComponent :project-tech="module.projectData.tech" />
                    </div>
                </template>
            </UPageCard>
        </UPageGrid>
        <div
            v-if="limit > 0"
            class="grid justify-center"
        >
            <UButton
                :to="Routes.Projects"
                class="mt-8 w-28"
                size="lg"
                :label="useI18n().t('homepage.landing.projects.btn.label')"
            />
        </div>
    </ULandingSection>
</template>

<script lang="ts">
export default {
  name: 'ProjectsComponent',
  props: {
    limit: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      Routes,
      translate: useI18n(),
    };
  },
  computed: {
    modules() {
      const keys = [
        'mostscuffedep7',
        'mostscuffedep6',
        'mittlay',
        'mostscuffed',
        'mostscuffedv2',
        'rumathrabingo', 
        'notionclockify',
        'mittelbot',
        'derduemmstefliegt',
        'studiodevoyage',
        'scarexportfolio',
        'phenixgamesteam',
        'phenixgameshomepage',
        'phenixgamesgtaroleplay',
        'cookieclicker',
        'nobadvibesshop',
        'dazshop',
        'nounfollowtwitch',
        'voteplusshopwareplugin',
        'changerjslibrary',
        'subscriptor',
        'lacampanadesign',
        'easylogindesign',
        'mediengestaltungredesign',
        'calculator',
      ];

      return keys.map((key) => ({
        projectKey: key,
        title: this.translate.t(`projects.${key}.title`),
        description: this.translate.t(`projects.${key}.description`),
        projectData: projectsData[key],
        // @ts-expect-error
        to: ProjectRoutes[key.charAt(0).toUpperCase() + key.slice(1)]
      }));
    }
  },
};
</script>