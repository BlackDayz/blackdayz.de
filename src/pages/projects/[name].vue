<template>
    <div class="row p_detail">
        <a :href="backLink" class="position-absolute top-0">home</a>
        <header class="col-12 text-center mb-5">
            <h1 class="mt-5 text-uppercase fw-bold">{{ work_name }}</h1>
            <p class="text-center">
                <ProjectTechAtom :techstack="techstack" />
            </p>
        </header>
        <main class="col-12 col-lg-6 p_info bg-black px-5 py-4 text-white">
            <p class="fs-2 fw-bold text-uppercase">Die Grundidee ...</p>
            <p class="mb-5">{{ info_text }}</p>
            <div class="p_links d-flex justify-content-center align-items-center">
                <div v-for="link in links" :key="link.name" class="px-3">
                    <img :src="link.icon" class="mb-2" />
                    <p class="fs-6">
                        <a :href="link.link">{{ link.name }}</a>
                    </p>
                </div>
            </div>
        </main>
        <footer class="col-12 col-lg-6 p_img text-black">
            <span v-for="item in footer" :key="item.src">
                <video v-if="item.isVideo" autoplay muted loop>
                    <source :src="item.src" />
                </video>
                <img v-if="item.isImg" :src="'/img/projects' + item.src" />

                <iframe v-if="item.isIframe" :src="item.src"></iframe>
            </span>
        </footer>
    </div>
</template>

<script>
import projects from '~/assets/json/projects.json';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Projects',
    data() {
        return {
            backLink: window.location.origin,
            work_name: '',
            info_text: '',
            techstack: [],
            links: [],
            footer: [],
        };
    },
    beforeMount() {
        const work = this.$route.params.name;
        const selectedWork = projects[work];
        this.work_name = work;
        this.info_text = selectedWork.description;
        this.links = selectedWork.links;
        this.footer = selectedWork.footer;
        this.techstack = selectedWork.tecstack;
    },
};
</script>
