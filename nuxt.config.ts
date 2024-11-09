// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nitroの設定
  nitro: {
    preset: 'cloudflare-pages',
    // 出力ディレクトリの設定
    output: {
      dir: '.output',
      publicDir: '.output/public',
    },
  },
  // 互換性の日付を設定
  compatibilityDate: '2024-11-09',
});
