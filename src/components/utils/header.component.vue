<template>
    <UHeader :links="links">
        <template #logo>
            <NuxtImg
                src="/img/logo/BlackDayzLogo.png"
                alt="BlackDayz Logo"
                width="200"
            />
        </template>
    </UHeader>
</template>

<script lang="ts">
export default {
  name: 'HeaderComponent',
  data() {
    return {
        links: [
            {
                label: useI18n().t('header.links.projects'),
                to: Routes.Projects
            },
            {
                label: useI18n().t('header.links.contact'),
                to: Routes.Contact
            }
        ]
    };
  },
};
</script>
