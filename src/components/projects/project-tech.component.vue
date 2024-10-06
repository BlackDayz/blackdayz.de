<template>
    <div
        v-if="projectTech"
        class="flex"
    >
        <NuxtImg
            v-if="projectTech.html"
            src="https://img.icons8.com/windows/48/000000/html.png"
            title="html"
            class="me-2"
        />
        <NuxtImg
            v-if="projectTech.vue"
            src="https://img.icons8.com/color/48/vue-js.png"
            title="vue.js"
            class="me-2"
        />
        <NuxtImg
            v-if="projectTech.node"
            src="https://img.icons8.com/color/48/000000/nodejs.png"
            title="node.js"
            class="me-2"
        />
        <!-- <NuxtImg
        :src="require('@/assets/img/icons/axios_logo.png')"
        title="axios.js"
        width="48"
        v-if="projectTech.axios"
        class="me-2"
    /> -->
        <NuxtImg
            v-if="projectTech.jquery"
            src="https://img.icons8.com/ios-filled/48/000000/jquery.png"
            title="jquery"
            class="me-2"
        />
        <NuxtImg
            v-if="projectTech.javascript"
            src="https://img.icons8.com/color/48/000000/javascript--v1.png"
            title="javascript"
            class="me-2"
        />
        <NuxtImg
            v-if="projectTech.php"
            src="https://img.icons8.com/officel/48/null/php-logo.png"
            title="php"
            class="me-2"
        />
        <NuxtImg
            v-if="projectTech.css"
            src="https://img.icons8.com/color/48/000000/css3.png"
            title="css"
            class="me-2"
        />
        <NuxtImg
            v-if="projectTech.yii"
            src="https://img.icons8.com/ios-filled/48/null/yii-framework.png"
            title="yii"
            class="me-2"
        />
        <NuxtImg
            v-if="projectTech.shopify"
            src="https://img.icons8.com/color/48/shopify.png"
            title="shopify"
            class="me-2"
        />
        <NuxtImg
            v-if="projectTech.shopify"
            src="https://img.icons8.com/ios/48/shopify.png"
            title="liquid"
            class="me-2"
        />
        <NuxtImg
            v-if="projectTech.nuxt"
            src="https://img.icons8.com/color/48/nuxt-jc.png"
            title="nuxt.js"
            class="me-2"
        />
        <NuxtImg
            v-if="projectTech.typescript"
            src="https://img.icons8.com/color/48/typescript.png"
            title="typescript"
            class="me-2"
        />
        <NuxtImg
            v-if="projectTech.supabase"
            src="https://img.icons8.com/fluency/48/supabase.png"
            title="supabase"
            class="me-2"
        />
        <NuxtImg
            v-if="projectTech.websocket"
            src="https://img.icons8.com/color/48/azure-relay-hybrid-connection.png"
            title="websocket"
            class="me-2"
        />
    </div>
</template>

<script lang="ts">
interface ProjectTech {
  html: boolean;
  vue: boolean;
  node: boolean;
  axios: boolean;
  jquery: boolean;
  javascript: boolean;
  php: boolean;
  css: boolean;
  yii: boolean;
  shopify: boolean;
  liquid: boolean;
  nuxt: boolean;
  typescript: boolean;
  supabase: boolean;
  websocket: boolean;
}
export default {
  name: 'ProjectTechComponent',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      projectTech: {} as ProjectTech,
    };
  },
  mounted() {
    const localeMessages = useI18n().getLocaleMessage(useI18n().locale.value) as Record<string, any>;

    let projectStrings = {};

    if(!this.project.projectKey) {
      const searchedProject: string | undefined = Object.keys(localeMessages.projects).find(key => 
        localeMessages.projects[key].title?.body.static === this.project.title
      );

      if(!searchedProject) {
        return;
      }
      projectStrings = localeMessages.projects[searchedProject];
    }else {
      projectStrings = localeMessages.projects[this.project.projectKey];
    }
  
    if (!projectStrings) {
      return;
    }

    // @ts-expect-error
    this.projectTech = projectStrings.tech;
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 32px;
  height: 32px;
}
</style>
