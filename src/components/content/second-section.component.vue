<template>
    <div class="work position-relative d-flex h-100 flex-column justify-content-center my-0 mx-auto">
        <h2
            class="text-center mb-3 fs-2"
            v-html="$t('second-section.title')"
        />
        <div class="work--lockup position-relative">
            <ul class="slider position-relative d-flex my-0 mx-auto p-0 list-unstyled">
                <li class="slider--item slider--item-left text-center">
                    <a
                        href="#0"
                        class="text-decoration-none"
                    >
                        <div class="slider--item-image overflow-hidden rounded-circle my-0 mx-auto">
                            <img
                                src="/img/work-victory.jpg"
                                alt="Victory"
                                class="w-100"
                            >
                        </div>
                        <p
                            class="slider--item-title text-uppercase fw-bold"
                            v-html="$t('second-section.clients.left.title')"
                        />
                        <p
                            class="slider--item-description"
                            v-html="$t('second-section.clients.left.text')"
                        />
                    </a>
                </li>
                <li class="slider--item slider--item-center text-center">
                    <a
                        href="#0"
                        class="text-decoration-none"
                    >
                        <div class="slider--item-image overflow-hidden rounded-circle my-0 mx-auto">
                            <img
                                src="/img/clients/rumathra-client.png"
                                alt="Metiew and Smith"
                                class="w-100"
                            >
                        </div>
                        <p
                            class="slider--item-title text-uppercase fw-bold"
                            v-html="$t('second-section.clients.center.title')"
                        />
                        <p
                            class="slider--item-description"
                            v-html="$t('second-section.clients.center.text')"
                        />
                    </a>
                </li>
                <li class="slider--item slider--item-right text-center">
                    <a
                        href="#0"
                        class="text-decoration-none"
                    >
                        <div class="slider--item-image overflow-hidden rounded-circle my-0 mx-auto">
                            <img
                                src="/img/work-alex-nowak.jpg"
                                alt="Alex Nowak"
                                class="w-100"
                            >
                        </div>
                        <p
                            class="slider--item-title text-uppercase fw-bold"
                            v-html="$t('second-section.clients.right.title')"
                        />
                        <p
                            class="slider--item-description"
                            v-html="$t('second-section.clients.right.text')"
                        />
                    </a>
                </li>
            </ul>
            <div class="slider--prev position-absolute d-flex align-items-center rounded-circle justify-content-center cursor-pointer start-0 z-3">
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
                >
                    <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                        <path
                            d="M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
                    c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
                    c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z"
                        />
                    </g>
                </svg>
            </div>
            <div class="slider--next position-absolute d-flex align-items-center rounded-circle justify-content-center cursor-pointer end-0 z-3">
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
                >
                    <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                        <path
                            d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"
                        />
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'SecondSectionComponent',
};
</script>