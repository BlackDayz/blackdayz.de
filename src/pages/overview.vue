<template>
    <div class="row">
        <div
            v-for="(project, index) in projects"
            v-show="!project.titlepage"
            :key="index"
            class="work col-12 col-md-6 m-0 p-0"
        >
            <router-link :to="'/projects?work=' + index">
                <img
                    :src="'/img/projects/' + project.img"
                    width="100%"
                    class="w-100 h-100 object-fit-cover object-position-center opacity-50 z-n1"
                >
            </router-link>
            <h1 class="work_name fw-bold z-1 text-center z-1">
                {{ project.name }}
            </h1>
            <div class="work_name fw-bold z-1 text-center z-1 fs-1">
                <ProjectTechAtom :techstack="project.tecstack" />
            </div>
        </div>
        <!-- To show all titlepage projects on the bottom to not show them twice -->
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
            <h1 class="work_name fw-bold z-1 text-center z-1">
                {{ project.name }}
            </h1>
            <div class="work_name fw-bold z-1 text-center z-1 fs-1">
                <ProjectTechAtom :techstack="project.tecstack" />
            </div>
        </div>
    </div>
</template>

<script>
import projects from '~/assets/json/projects.json';

export default {
    name: 'ProjectsOverviewPage',
    data() {
        return {
            projects,
        };
    },
};
</script>
