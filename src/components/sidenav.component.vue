<template>
    <nav
        class="l-side-nav position-absolute left-0 d-flex h-100 align-items-center d-none d-xl-flex z-3"
    >
        <ul class="side-nav position-relative d-flex flex-column justify-content-between m-0 p-0">
            <li class="is-active">
                <span>{{ $t('sidenav.home') }}</span>
            </li>
            <li>
                <span>{{ $t('sidenav.works') }}</span>
            </li>
            <li>
                <span>{{ $t('sidenav.about') }}</span>
            </li>
            <li>
                <span>{{ $t('sidenav.contact') }}</span>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
export default {
    name: 'SidenavComponent',
};
</script>
