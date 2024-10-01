<template>
    <UAlert
        :description="$t('legal.hint.description')"
        color="red"
        variant="outline"
    />
</template>

<script lang="ts">
export default {
  name: 'LegalHintAtom',
};
</script>
