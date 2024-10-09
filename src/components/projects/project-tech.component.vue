<template>
    <div
        v-if="projectTech"
        class="flex"
    >
        <!-- @vue-expect-error -->
        <NuxtImg
            v-for="(tech, index) in projectTech"
            :key="index"
            :src="projectTechImg[tech]"
            :title="tech"
            class="me-2 w-full"
        />
    </div>
</template>

<script lang="ts">
export default {
  name: 'ProjectTechComponent',
  props: {
    projectTech: {
      type: Array as () => ProjectTech[],
      required: true,
    },
  },
  data() {
    return {
      projectTechImg,
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 32px;
  height: 32px;
}
</style>
