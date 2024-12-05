<template>
    <div>
        <UButton
            color="cyan"
            variant="outline"
            class="shadow-md"
            :to="Routes.Contact"
        >
            <NuxtImg
                :src="contactImg"
                alt="Contact me"
                width="32"
            />
            <span v-text="useI18n().t('contact.button')" />
        </UButton>
    </div>
</template>

<script lang="ts">
export default {
  name: 'ContactBtnAtom',
  data() {
    return {
      contactImg: use7tv().getEmoteUrl('60af7e3935c50a7792de4db7'),
      Routes,
    };
  },
};
</script>
