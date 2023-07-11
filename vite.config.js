import { defineConfig } from 'vite';
import postcssPresetEnv from 'postcss-preset-env';

export default defineConfig({
  base: '/practise/',
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [postcssPresetEnv()],
    },
  },
});
