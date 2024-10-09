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
                label: this.$t('header.links.projects'),
                to: Routes.Projects
            },
            {
                label: this.$t('header.links.contact'),
                to: Routes.Contact
            }
        ]
    };
  },
};
</script>
