<template>
    <ULandingSection class="grid justify-center">
        <NuxtImg
            :src="use7tv().getEmoteUrl('636f1f13cd0b9515ad700087')"
            class="w-80"
        />
    </ULandingSection>
</template>

<script lang="ts">
export default {
  name: 'LandingpageCatEmoteComponent',
  data() {
    return {
      use7tv,
    };
  },
};
</script>