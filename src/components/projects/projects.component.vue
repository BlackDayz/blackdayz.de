<template>
    <ULandingSection
        :title="$t('homepage.landing.projects.title')"
        :headline="limit === 0 ? '' : $t('homepage.landing.projects.headline')"
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
                    />
                </template>
                <template #description>
                    <span class="line-clamp-2">{{ module.description }}</span>
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
                :label="$t('homepage.landing.projects.btn.label')"
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
    };
  },
  computed: {
    modules() {
      const keys = [
        'mittlay',
        'mostscuffed',
        'mostscuffedv2',
        'rumathrabingo', 
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
        title: this.$t(`projects.${key}.title`),
        description: this.$t(`projects.${key}.description`),
        projectData: projectsData[key],
        // @ts-expect-error
        to: ProjectRoutes[key.charAt(0).toUpperCase() + key.slice(1)],
      }));
    }
  },
};
</script>