<template>
    <div class="container mx-0 mx-md-5">
        <div>
            <div class="d-flex">
                <h2 class="fw-bolder">{{ $t('aboutme.aboutme.title') }}</h2>
            </div>
            <div>
                <span v-html="$t('aboutme.aboutme')"></span>
            </div>
        </div>
        <div class="mt-4">
            <div class="d-flex">
                <h2 class="fw-bolder">{{ $t('aboutme.title.title') }}</h2>
            </div>
            <div>
                <span v-html="$t('aboutme.title')"></span>
            </div>
        </div>
        <div class="mt-4">
            <div class="d-flex">
                <h2 class="fw-bolder">{{ $t('aboutme.current.title') }}</h2>
            </div>
            <div>
                <span v-html="$t('aboutme.current')"></span>
            </div>
        </div>
        <div class="mt-4">
            <div class="d-flex">
                <h2 class="fw-bolder">{{ $t('aboutme.imdoing.title') }}</h2>
            </div>
            <div>
                <span v-html="$t('aboutme.imdoing')"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMeComponent',
};
</script>
