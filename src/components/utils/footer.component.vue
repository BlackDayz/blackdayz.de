<template>
    <UFooter :links="links">
        <template #left>
            <span
                v-text="$t('footer.copyright', {
                    year: new Date().getFullYear(),
                })"
            />
        </template>

        <template #right>
            <NuxtLink
                v-for="locale in availableLocales"
                :key="locale.code"
                class="cursor-pointer"
                @click.prevent.stop="updateLocale(locale.code)"
            >
                {{ $t('footer.langSwitcher.text', { lang: locale.name }) }}
            </NuxtLink>
            <UColorModeButton />
            <UButton
                icon="i-simple-icons-github"
                color="gray"
                variant="ghost"
                to="https://github.com/Mittelblut9"
                target="_blank"
            />
        </template>
    </UFooter>
</template>

<script lang="ts">
export default {
  name: 'FooterComponent',
  data() {
    return {
      links: [] as Array<{ label: string; icon: string; to: string }>,
      legalLinks: {
        'de-DE': {
          imprint: Routes.ImprintDE,
          privacy: Routes.PrivacyDE,
        },
        'en-US': {
          imprint: Routes.ImprintEN,
          privacy: Routes.PrivacyEN,
        },
      } as Record<'de-DE' | 'en-US', { imprint: Routes; privacy: Routes }>,
    };
  },
  computed: {
    availableLocales() {
      return useI18n().locales.value.filter(i => i.code !== useI18n().locale.value);
    }
  },
  mounted() {
    this.getLocaleLink();
  },
  methods: {
    getLocaleLink() {
      const locale = (useI18n().getLocaleCookie() || 'de-DE') as 'de-DE' | 'en-US';
      this.links = [
        {
          label: this.$t('footer.links.imprint.label'),
          icon: this.$t('footer.links.imprint.icon'),
          to: this.legalLinks[locale].imprint,
        },
        {
          label: this.$t('footer.links.privacy.label'),
          icon: this.$t('footer.links.privacy.icon'),
          to: this.legalLinks[locale].privacy,
        },
      ];
    },
    updateLocale(locale: string) {
      this.$i18n.setLocale(locale);
      useRouter().go(0);
    },
  }
};
</script>
