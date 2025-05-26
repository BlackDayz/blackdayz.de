<template>
    <div>
        <ULandingLogos
            :title="useI18n().t('homepage.landing.trustedBy.title')"
            align="center"
            :ui="{
                title: 'text-3xl font-bold',
                images: 'flex justify-center gap-7',
            }"
        >
            <NuxtLink
                v-for="client in clients"
                :key="client"
                :to="useI18n().t(`clients.${client}.url`)"
                class="w-32 h-40 grid gap-3 mx-5"
            >
                <NuxtImg
                    :src="useI18n().t(`clients.${client}.img`)"
                    class="w-32 h-32 object-fill rounded-lg"
                />
                <p
                    class="font-bold text-xl"
                    v-text="useI18n().t(`clients.${client}.name`)"
                />
            </NuxtLink>
        </ULandingLogos>
    </div>
</template>

<script lang="ts">
export default {
  name: 'LandingpageTrustedByComponent',
  data() {
    return {
      clients: [
        'rumathra',
        'hautnah',
        'geilevideossos',
        'trymacs',
        'chefstrobel'
      ]
    };
  }
};
</script>
