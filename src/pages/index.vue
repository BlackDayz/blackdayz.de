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
};
</script>
