<template>
    <header class="top_page width-100 d-grid justify-content-center align-items-end">
        <div class="head_text text-center mb-5 text-white">
            <h1 class="fw-bold display-1">{{ $t('company') }}</h1>
            <div class="head_text_big d-flex justify-content-between">
                <span class="h2 head_text_change m-0">{{ defaultTitle }}</span>
                <span class="h2 head_text_second_dev m-0">{{ $t('developer') }}</span>
            </div>
        </div>

        <div class="head_arrows text-center m-5 pt-5">
            <p class="m-0 text-white">{{ $t('homepage.header.hint') }}</p>
            <a href="#me">
                <NuxtImg
                    width="24"
                    height="24"
                    alt="expand-arrow"
                    class="m-0"
                    src="https://img.icons8.com/material-sharp/24/FFFFFF/expand-arrow--v1.png"
                />
            </a>
        </div>
    </header>
    <main>
        <div id="me" class="row bg-white py-5 align-items-center">
            <div class="col-12 col-lg-6">
                <AboutMeComponent />
            </div>
            <div class="col-12 col-lg-6 d-flex justify-content-center">
                <DcProfileComponent />
            </div>
        </div>

        <div>
            <WorkComponent />
        </div>

        <!-- <mybots />
        <work />
        <contribution /> -->
    </main>
</template>

<script>
export default {
    name: 'IndexPage',
    data() {
        return {
            titles: ['WEB', 'BOT', 'JUNIOR'],
            intervalTime: 3000,
            lastTitle: '',
            defaultTitle: 'WEB',
        };
    },
    mounted() {
        this.lastTitle = this.defaultTitle;
        setInterval(() => {
            this.changeHeaderTitle();
        }, this.intervalTime);
    },

    methods: {
        changeHeaderTitle() {
            const div = document.querySelector('.head_text_change');
            if (!div) return;

            const title = this.getTitle();

            if (!this.lastTitle) {
                this.lastTitle = title;
            }

            if (title !== this.lastTitle) {
                this.triggerAnimation();

                setTimeout(() => {
                    div.innerHTML = title;
                    this.lastTitle = title;
                }, 500);
            } else {
                this.changeHeaderTitle();
            }
        },

        getTitle() {
            return this.titles[Math.floor(Math.random() * this.titles.length)];
        },

        triggerAnimation() {
            const div = document.querySelector('.head_text_change');
            if (!div) return;

            div.classList.add('head_text_change_animation');
            setTimeout(() => {
                div.classList.remove('head_text_change_animation');
            }, 1000);
        },
    },
};
</script>
