<template>
    <ULandingSection>
        <div class="grid justify-center">
            <NuxtImg 
                :src="`https://http.cat/${error.statusCode}`"
                :alt="error.message"
                :width="700"
            />
            <div class="mt-5 text-center">
                <h1
                    class="h2"
                    v-html="useI18n().t('error.base')"
                />
                <h4 v-html="useI18n().t(`error.${error.statusCode}`)" />
                <p
                    class="fw-bold"
                    v-html="error.message"
                />
                <p
                    class="mt-3"
                    v-html="useI18n().t('error.hint')"
                />
                <UButton
                    :label="useI18n().t('error.back2home')"
                    class="mt-5"
                    @click="handleError"
                />
            </div>
        </div>
    </ULandingSection>
</template>


<script lang="ts">
import type { NuxtError } from '#app';
export default {
  name: 'ErrorPage',
  props: {
    error: {
      type: Object as () => NuxtError,
      required: true
    }
  },
  methods: {
    handleError () {
      clearError({ redirect: '/' });
    }
  }
};
</script>