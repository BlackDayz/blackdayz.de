<template>
    <div>
        <ULandingSection>
            <ULandingHero
                :title="useI18n().t('general.company')"
                :description="useI18n().t('homepage.landing.top.description')"
            >
                <LandingpageTopComponent />
                <div class="mt-64">
                    <LandingpageTrustedByComponent />
                </div>
            </ULandingHero>
        </ULandingSection>
        <LandingpageWhatDoIDoComponent />
        <ProjectsComponent :limit="6" />
        <LandingpageCatEmoteComponent />
    </div>
</template>

<script lang="ts">
export default {
    name: 'IndexPage',
    data() {
        return {
            translate: useI18n(),
        };
    },
    mounted() {
        useHead({
            title: `${this.translate.t('general.company')} ${this.translate.t('homepage.meta.title')}`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.translate.t('homepage.meta.description'),
                },
            ],
        });
    },
};
</script>
