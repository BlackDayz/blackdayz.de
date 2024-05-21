<template>
    <div class="card-container d-flex">
        <div class="card d-block my-0 mx-auto rounded-2 bg-black border-5 border-white">
            <div class="card-header p-0">
                <div class="banner-image w-100 bg-white"></div>
                <div class="infos px-3 position-relative">
                    <div class="profil-logo position-absolute bg-black rounded-circle">
                        <NuxtImg src="/img/logo.png" class="rounded-circle" />
                    </div>
                    <div
                        class="badges-container position-absolute end-0 d-flex justify-content-end me-3"
                    >
                        <div class="badge-item position-relative ms-2">
                            <NuxtImg
                                src="/img/badges/hypesquad.webp"
                                alt="hypesquad"
                                class="h-100"
                            />
                        </div>
                        <div class="badge-item position-relative ms-2">
                            <NuxtImg
                                src="/img/badges/moderator.webp"
                                alt="Discord Moderator"
                                class="h-100"
                            />
                        </div>
                        <div class="badge-item position-relative ms-2">
                            <NuxtImg
                                src="/img/badges/nitro.webp"
                                alt="Discord Nitro"
                                class="h-100"
                            />
                        </div>
                        <div class="badge-item position-relative ms-2">
                            <NuxtImg
                                src="/img/badges/boost.webp"
                                alt="Discord boost"
                                class="h-100"
                            />
                        </div>
                    </div>
                    <div class="username text-white mt-5 fw-bold fs-4">
                        {{ $t('dcProfile.username') }}
                    </div>
                    <div class="my-2">
                        <ScrobblerAtom />
                    </div>
                    <hr class="border-1 border-white mt-1" />
                </div>
            </div>
            <div class="card-content px-3">
                <div class="about-me mb-2">
                    <div class="category-title fw-bold text-uppercase mb-2">
                        {{ $t('dcProfile.aboutMe') }}
                    </div>
                    <div>
                        <p class="my-1 text-white" v-html="$t('dcProfile.webDeveloper')"></p>
                        <p class="my-1 text-white" v-html="$t('dcProfile.mod')"></p>
                    </div>
                </div>
                <div class="roles mb-3">
                    <div class="category-title fw-bold text-uppercase mb-2">
                        {{ $t('dcProfile.roles') }}
                    </div>
                    <div class="roles-list d-flex flex-wrap">
                        <div
                            v-for="skill in skills"
                            :key="skill"
                            class="role rounded-1 text-white fw-light py-1 px-2 me-1 mt-1 d-flex align-items-center flex-row"
                        >
                            <div class="color rounded-circle me-1"></div>
                            <span class="fw-normal">{{ skill }}</span>
                        </div>
                    </div>
                </div>
                <div class="note mb-3">
                    <div class="category-title fw-bold text-uppercase mb-2">
                        {{ $t('dcProfile.note') }}
                    </div>
                    <textarea
                        id="dc_profile_note"
                        :placeholder="$t('dcProfile.noteInput')"
                        class="border-0 w-100 text-white rounded-2 p-2"
                    ></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DcProfileComponent',
    data() {
        return {
            skills: [
                'Nuxt.js',
                'Node.js',
                'Vue.js',
                'JavaScript',
                'Typescript',
                'PHP',
                'Yii2',
                'Shopware',
                'Symfony',
                'Discord.js',
                'Docker',
                'Sequelize',
                'Bootstrap',
                'CSS3',
            ],
        };
    },
};
</script>
