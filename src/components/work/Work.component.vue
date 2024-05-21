<template>
    <div class="references user-select-none">
        <header class="text-center">
            <h2 class="fw-bold">{{ $t('work.title') }}</h2>
            <div class="ref_gif_top display-flex justify-content-center py-5">
                <NuxtImg
                    src="/gif/developer_funny.gif"
                    class="w-100"
                    alt="Developer Typing on a old Apple MAC"
                />
            </div>
        </header>
        <main class="row">
            <div
                v-for="(project, index) in projects"
                v-show="project.titlepage"
                :key="index"
                class="work col-12 col-md-6 m-0 p-0"
            >
                <router-link :to="'/projects/' + index">
                    <NuxtImg
                        :src="'/img/projects/' + project.img"
                        width="100%"
                        class="w-100 h-100 object-fit-cover object-position-center opacity-50 z-n1"
                    />
                </router-link>
                <h1 class="work_name fw-bold z-1 text-center z-1 fs-1">{{ project.name }}</h1>
                <div class="work_name fw-bold z-1 text-center z-1 fs-1">
                    <ProjectTechAtom :techstack="project.tecstack" />
                </div>
            </div>
        </main>

        <div class="work_show_more text-center my-5">
            <router-link to="/overview" class="p-3 fw-bold rounded-1">{{
                $t('work.showMore')
            }}</router-link>
        </div>
    </div>
</template>

<script>
import projects from '~/assets/json/projects.json';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Slider',
    data() {
        return {
            projects,
        };
    },
};
</script>
