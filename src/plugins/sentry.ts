import * as Sentry from '@sentry/browser';

export default defineNuxtPlugin((nuxtApp) => {
    const {
        public: { sentryDsn },
    } = useRuntimeConfig();

    if (!sentryDsn) {
        return;
    }

    Sentry.init({
        dsn: sentryDsn,
        environment: process.env.NODE_ENV,
        integrations: [
            Sentry.browserTracingIntegration(),
            Sentry.browserProfilingIntegration(),
            Sentry.replayIntegration({
                maskAllText: true,
                blockAllMedia: true,
            }),
        ],
        tracesSampleRate: 0.25,
        profilesSampleRate: 0.5,

        replaysSessionSampleRate: 0.5,
        replaysOnErrorSampleRate: 0.5,
    });

    nuxtApp.hooks.hook('app:error', (error) => {
        Sentry.captureException(error);
    });
});
