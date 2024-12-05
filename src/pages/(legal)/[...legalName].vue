<template>
    <div class="w-1/2 mx-auto py-14">
        <div class="mb-10">
            <LegalHintAtom />
        </div>
        <div v-if="type === 'imprint'">
            <LegalImprintDeComponent v-if="locale === 'de-DE'" />
            <LegalImprintEnComponent v-else />
        </div>
        <div v-else>
            <LegalPrivacyDeComponent v-if="locale === 'de-DE'" />
            <LegalPrivacyEnComponent v-else />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'LegalPage',
    data() {
        return {
            locale: useI18n().locale as unknown as 'de-DE' | 'en-US',
            legalLinks: {
                'de-DE': {
                    imprint: Routes.ImprintDE.replaceAll('/', ''),
                    privacy: Routes.PrivacyDE.replaceAll('/', ''),
                },
                'en-US': {
                    imprint: Routes.ImprintEN.replaceAll('/', ''),
                    privacy: Routes.PrivacyEN.replaceAll('/', ''),
                },
            } as Record<'de-DE' | 'en-US', { imprint: Routes; privacy: Routes; }>,
            type: '' as 'imprint' | 'privacy',
            translate: useI18n(),
        };
    },
    beforeMount() {
        this.checkForCorrectPage();
    },
    mounted() {
        useHead({
        title: `${this.translate.t('legal.meta.imprint.title')} | ${this.translate.t('general.company')}`,
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: this.translate.t('legal.meta.imprint.title'),
            },
        ],
        });
    },
    methods: {
        checkForCorrectPage() {
            const legalName = useRoute().params.legalName[0];
            if (legalName === this.legalLinks[this.locale].imprint) {
                this.type = 'imprint';
                return;   
            }

            if (legalName === this.legalLinks[this.locale].privacy) {
                this.type = 'privacy';
                return;
            }

            // Redirect to Locale Imprint page if no match was found
            useRouter().push(
                this.legalLinks[this.locale].imprint
            );
        }
    }
};
</script>