<template>
    <header
        class="header position-absolute top-0 left-0 d-flex w-100 align-items-center z-3 justify-content-between"
    >
        <a
            class="header--logo d-flex align-items-center text-decoration-none text-white"
            href="#0"
        >
            <img
                src="/img/logo.png"
                alt="Global"
            >
            <p class="ms-2 m-0 fs-6 fw-bold text-uppercase">Global</p>
        </a>
        <div
            class="header--nav-toggle d-flex flex-column align-items-center justify-content-center cursor-pointer"
        >
            <span />
        </div>
    </header>
</template>

<script lang="ts">
export default {
    name: 'HeaderComponent',
};
</script>
