<template>
    <ULandingSection>
        <div class="text-center grid justify-center gap-3 mb-10">
            <h1
                class="text-5xl font-bold"
                v-text="$t('contact.page.headline')"
            />
            <h2
                class="text-3xl"
                v-text="$t('contact.page.subheadline')"
            />
            <div class="grid justify-center mt-4">
                <NuxtImg 
                    :src="contactEmote"
                    width="100"
                />
            </div>
        </div>
        <div class="flex justify-center gap-3">
            <UButton 
                variant="outline"
                icon="i-simple-icons-github"
                :label="$t('contact.page.buttons.discord')"
                size="lg"
                type="link"
                :to="contact.discord"
            />
            <UButton 
                variant="outline"
                size="lg"
                icon="i-material-symbols-alternate-email"
                type="link"
                :to="`mailto:${contact.email}`"
                :label="$t('contact.page.buttons.email')"
            />
        </div>
    </ULandingSection>
</template>

<script lang="ts">
export default {
  name: 'ContactPage',
  setup() {
    useHead({
      title: useI18n().t('contact.page.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: useI18n().t('contact.page.meta.description')
        }
      ]
    });
  },
  data() {
    return {
      contactEmote: use7tv().getEmoteUrl('614fa7f320eaf897465a692b'),
      contact: {
        discord: 'https://discord.com/users/395923095472570368',
        email: 'info@blackdayz.de'
      }
    };
  },
};
</script>
