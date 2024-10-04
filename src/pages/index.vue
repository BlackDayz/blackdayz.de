<template>
    <div>
        <ULandingSection>
            <ULandingHero
                :title="$t('general.company')"
                :description="$t('homepage.landing.top.description')"
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
    mounted() {
        useHead({
            title: `${this.$t('general.company')} ${this.$t('homepage.meta.title')}`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$t('homepage.meta.description'),
                },
            ],
        });
    },
};
</script>
