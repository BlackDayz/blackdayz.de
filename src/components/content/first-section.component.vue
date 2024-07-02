<template>
    <div
        class="intro position-relative d-flex h-100 flex-column justify-content-center my-0 mx-auto w-75 mw-xl-100"
    >
        <div class="intro--banner position-relative">
            <h1
                class="position-relative display-2 lh-1 z-1"
                v-html="$t('first-section.title')"
            />
            <button class="cta text-white">
                <span>{{ $t('sidenav.contact') }}</span>
                <svg
                    id="Layer_1"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 150 118"
                    style="enable-background: new 0 0 150 118"
                    xml:space="preserve"
                    class="position-relative"
                >
                    <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                        <path
                            d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"
                        />
                    </g>
                </svg>
                <span class="btn-background position-absolute top-0 end-0 h-100 z-n1" />
            </button>
            <img
                src="/img/introduction-visual.png"
                alt="Welcome"
                class="position-absolute"
            >
        </div>
        <div class="intro--options d-flex justify-content-around m-0 p-0 list-unstyled">
            <a
                href="#0"
                class="mb-2 mb-md-0"
            >
                <h3
                    class="fs-5 text-uppercase"
                    v-html="$t('first-section.case-one.title')"
                />
                <p
                    class="mb-0"
                    v-html="$t('first-section.case-one.text')"
                />
            </a>
            <a
                href="#0"
                class="mb-2 mb-md-0"
            >
                <h3
                    class="fs-5 text-uppercase"
                    v-html="$t('first-section.case-two.title')"
                />
                <p
                    class="mb-0"
                    v-html="$t('first-section.case-two.text')"
                />
            </a>
            <a
                href="#0"
                class="mb-2 mb-md-0"
            >
                <h3
                    class="fs-5 text-uppercase"
                    v-html="$t('first-section.case-third.title')"
                />
                <p
                    class="mb-0"
                    v-html="$t('first-section.case-third.text')"
                />
            </a>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'FirstSectionComponent',
};
</script>
