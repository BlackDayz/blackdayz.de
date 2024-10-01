<template>
    <ULandingSection
        :title="$t('homepage.landing.whatDoIDo.title')"
        :description="$t('homepage.landing.whatDoIDo.description')"
        :headline="$t('homepage.landing.whatDoIDo.headline')"
    >
        <UPageGrid
            id="features"
            class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
            :ui="{
                wrapper: 'xl:grid-cols-4',
            }"
        >
            <ULandingCard
                v-for="(item, index) in items"
                :key="index"
                v-bind="item"
            />
        </UPageGrid>
    </ULandingSection>
</template>

<script lang="ts">
interface ItemsInterface {
  title: string;
  description: string;
  icon: string;
}

export default {
  name: 'LandingpageWhatDoIDoComponent',
  computed: {
    items(): ItemsInterface[] {
      const keys = [
        'webdev',
        'gameshows',
        'twitchdev',
        'gaming',
      ];

      return keys.map((key) => ({
        title: this.$t(`homepage.landing.whatDoIDo.items.${key}.title`),
        description: this.$t(`homepage.landing.whatDoIDo.items.${key}.description`),
        icon: this.$t(`homepage.landing.whatDoIDo.items.${key}.icon`),
      }));
    }
  },
};
</script>
