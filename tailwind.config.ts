import { _boxShadow } from "#tailwind-config/theme";

module.exports = {
    content: ['./src/**/*.{vue,ts}'],
    theme: {
        extend: {
          boxShadow: {
            hard: '5px 5px 0px 0px rgba(0, 0, 0, 0.5)',
          }
        },
      },
    plugins: [],
}