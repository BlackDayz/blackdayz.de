<template>
    <div>
        <UButton
            color="cyan"
            variant="outline"
            :to="Routes.Projects"
        >
            <NuxtImg
                :src="projectImg"
                alt="Meine Projekte"
                width="32"
            />
            <span v-text="$t('projects.link.button')" />
        </UButton>
    </div>
</template>

<script lang="ts">
export default {
  name: 'ProjectLinkBtnAtom',
  data() {
    return {
      projectImg: use7tv().getEmoteUrl('615cc1e96fe89bccc37c9442'),
      Routes,
    };
  },
};
</script>
