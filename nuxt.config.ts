// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      DATABASE_ID: process.env.DATABASE_ID,
      COLLECTION_ID: process.env.COLLECTION_ID,
      PROJECT_ID: process.env.PROJECT_ID,
      APPWRITE_URL: process.env.APPWRITE_URL,
      APPWRITE_API_KEY: process.env.APPWRITE_API_KEY,
    },
  }
})
