<template>
    <div class="device-notification">
        <a
            class="device-notification--logo"
            href="#0"
        >
            <img
                src="/img/logo.png"
                alt="Global"
            >
            <p>Global</p>
        </a>
        <p class="device-notification--message">
            Global has so much to offer that we must request you orient your device to portrait or
            find a larger screen. You won't be disappointed.
        </p>
    </div>

    <div class="perspective effect-rotate-left">
        <div class="container">
            <div class="outer-nav--return" />
            <div
                id="viewport"
                class="l-viewport"
            >
                <div class="l-wrapper">
                    <HeaderComponent />
                    <SidenavComponent />
                    <ul class="l-main-content main-content">
                        <li class="l-section section section--is-active">
                            <FirstSectionComponent />
                        </li>
                        <li class="l-section section">
                            <SecondSectionComponent />
                        </li>
                        <li class="l-section section">
                            <div class="about">
                                <div class="about--banner">
                                    <h2>We<br>believe in<br>passionate<br>people</h2>
                                    <a href="#0">Career
                                        <span>
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
                                                <g
                                                    transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)"
                                                >
                                                    <path
                                                        d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                    </a>
                                    <img
                                        src="/img/about-visual.png"
                                        alt="About Us"
                                    >
                                </div>
                                <div class="about--options">
                                    <a href="#0">
                                        <h3>Winners</h3>
                                    </a>
                                    <a href="#0">
                                        <h3>Philosophy</h3>
                                    </a>
                                    <a href="#0">
                                        <h3>History</h3>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="l-section section">
                            <div class="contact">
                                <div class="contact--lockup">
                                    <div class="modal">
                                        <div class="modal--information">
                                            <p>Pawia 5, 31-154 Kraków, Poland</p>
                                            <a href="mailto:ouremail@gmail.com">ouremail@gmail.com</a>
                                            <a href="tel:+148126287560">+48 12 628 75 60</a>
                                        </div>
                                        <ul class="modal--options">
                                            <li><a href="#0">Bēhance</a></li>
                                            <li><a href="#0">dribbble</a></li>
                                            <li>
                                                <a href="mailto:ouremail@gmail.com">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="l-section section">
                            <div class="hire">
                                <h2>You want us to do</h2>
                                <!-- checkout formspree.io for easy form setup -->
                                <form class="work-request">
                                    <div class="work-request--options">
                                        <span class="options-a">
                                            <input
                                                id="opt-1"
                                                type="checkbox"
                                                value="app design"
                                            >
                                            <label for="opt-1">
                                                <svg
                                                    id="Layer_1"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 150 111"
                                                    style="enable-background: new 0 0 150 111"
                                                    xml:space="preserve"
                                                >
                                                    <g
                                                        transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)"
                                                    >
                                                        <path
                                                            d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"
                                                        />
                                                    </g>
                                                </svg>
                                                App Design
                                            </label>
                                            <input
                                                id="opt-2"
                                                type="checkbox"
                                                value="graphic design"
                                            >
                                            <label for="opt-2">
                                                <svg
                                                    id="Layer_1"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 150 111"
                                                    style="enable-background: new 0 0 150 111"
                                                    xml:space="preserve"
                                                >
                                                    <g
                                                        transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)"
                                                    >
                                                        <path
                                                            d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"
                                                        />
                                                    </g>
                                                </svg>
                                                Graphic Design
                                            </label>
                                            <input
                                                id="opt-3"
                                                type="checkbox"
                                                value="motion design"
                                            >
                                            <label for="opt-3">
                                                <svg
                                                    id="Layer_1"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 150 111"
                                                    style="enable-background: new 0 0 150 111"
                                                    xml:space="preserve"
                                                >
                                                    <g
                                                        transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)"
                                                    >
                                                        <path
                                                            d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"
                                                        />
                                                    </g>
                                                </svg>
                                                Motion Design
                                            </label>
                                        </span>
                                        <span class="options-b">
                                            <input
                                                id="opt-4"
                                                type="checkbox"
                                                value="ux design"
                                            >
                                            <label for="opt-4">
                                                <svg
                                                    id="Layer_1"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 150 111"
                                                    style="enable-background: new 0 0 150 111"
                                                    xml:space="preserve"
                                                >
                                                    <g
                                                        transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)"
                                                    >
                                                        <path
                                                            d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"
                                                        />
                                                    </g>
                                                </svg>
                                                UX Design
                                            </label>
                                            <input
                                                id="opt-5"
                                                type="checkbox"
                                                value="webdesign"
                                            >
                                            <label for="opt-5">
                                                <svg
                                                    id="Layer_1"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 150 111"
                                                    style="enable-background: new 0 0 150 111"
                                                    xml:space="preserve"
                                                >
                                                    <g
                                                        transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)"
                                                    >
                                                        <path
                                                            d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"
                                                        />
                                                    </g>
                                                </svg>
                                                Webdesign
                                            </label>
                                            <input
                                                id="opt-6"
                                                type="checkbox"
                                                value="marketing"
                                            >
                                            <label for="opt-6">
                                                <svg
                                                    id="Layer_1"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 150 111"
                                                    style="enable-background: new 0 0 150 111"
                                                    xml:space="preserve"
                                                >
                                                    <g
                                                        transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)"
                                                    >
                                                        <path
                                                            d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"
                                                        />
                                                    </g>
                                                </svg>
                                                Marketing
                                            </label>
                                        </span>
                                    </div>
                                    <div class="work-request--information">
                                        <div class="information-name">
                                            <input
                                                id="name"
                                                type="text"
                                                spellcheck="false"
                                            >
                                            <label for="name">Name</label>
                                        </div>
                                        <div class="information-email">
                                            <input
                                                id="email"
                                                type="email"
                                                spellcheck="false"
                                            >
                                            <label for="email">Email</label>
                                        </div>
                                    </div>
                                    <input
                                        type="submit"
                                        value="Send Request"
                                    >
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <ul class="outer-nav">
            <li class="is-active">
                Home
            </li>
            <li>Works</li>
            <li>About</li>
            <li>Contact</li>
            <li>Hire us</li>
        </ul>
    </div>
</template>

<script lang="ts">
export default {
    name: 'IndexPage',
};
</script>
