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
      } as Record<'de-DE' | 'en-US', { imprint: Routes; privacy: Routes }>
    };
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
          to: '/' + locale + this.legalLinks[locale].imprint,
        },
        {
          label: this.$t('footer.links.privacy.label'),
          icon: this.$t('footer.links.privacy.icon'),
          to: '/' + locale + this.legalLinks[locale].privacy,
        },
      ];
    },
  }
};
</script>
