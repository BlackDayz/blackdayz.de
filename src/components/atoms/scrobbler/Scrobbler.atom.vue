<template>
    <div class="text-white d-grid my-2 scrobbler">
        <span>{{ text.lastScrobbledSong }}</span>
        <span v-show="!lastScrobbledSong">Loading...</span>
        <span class="fw-bolder">{{ lastScrobbledSong }}</span>
    </div>
</template>

<script>
import { captureException } from '@sentry/browser';

export default {
    name: 'ScrobblerComponent',
    data() {
        return {
            lastScrobbledSong: null,
            text: {
                lastScrobbledSong: 'Last listened song',
            },
        };
    },
    mounted() {
        this.getLastScrobbler();
    },
    methods: {
        getLastScrobbler() {
            fetch(
                `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${this.$config.public.lastFMUsername}&api_key=${this.$config.public.lastFMApiKey}&format=json`,
            )
                .then((response) => response.json())
                .then((data) => {
                    const track = data.recenttracks.track[0];
                    this.lastScrobbledSong = track.name;
                })
                .catch((error) => {
                    captureException(error);
                    console.error(error);
                });
        },
    },
};
</script>

<style scoped lang="scss">
.scrobbler {
    span {
        font-size: 0.8rem;

        &:last-child {
            font-size: 0.9rem;
        }
    }
}
</style>
