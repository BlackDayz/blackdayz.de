<template>
    <UAlert
        :description="useI18n().t('legal.hint.description')"
        color="red"
        variant="outline"
    />
</template>

<script lang="ts">
export default {
  name: 'LegalHintAtom',
};
</script>
