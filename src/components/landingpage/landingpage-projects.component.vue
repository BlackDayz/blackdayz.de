<template>
    <ULandingSection
        :title="$t('homepage.landing.projects.title')"
        :headline="$t('homepage.landing.projects.headline')"
    >
        <UPageGrid>
            <UPageCard
                v-for="(module, index) in modules"
                :key="index"
                v-bind="module"
                :to="module.to"
            >
                <template #icon>
                    <NuxtImg
                        :src="module.img"
                        class="h-48 w-full object-cover"
                    />
                </template>
                <template #description>
                    <span class="line-clamp-2">{{ module.description }}</span>
                </template>
            </UPageCard>
        </UPageGrid>
        <div class="grid justify-center">
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
  name: 'LandingpageProjectsComponent',
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
      ];

      return keys.map((key) => ({
        title: this.$t(`projects.${key}.title`),
        description: this.$t(`projects.${key}.description`),
        img: '/img/projects' + this.$t(`projects.${key}.img`),
        // @ts-expect-error
        to: ProjectRoutes[key.charAt(0).toUpperCase() + key.slice(1)],
      }));
    }
  },
};
</script>