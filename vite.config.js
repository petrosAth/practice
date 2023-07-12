import { defineConfig } from 'vite';
import postcssPresetEnv from 'postcss-preset-env';

export default defineConfig({
  base: '/practice/',
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [postcssPresetEnv()],
    },
  },
});
