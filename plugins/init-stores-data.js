export default defineNuxtPlugin(async (nuxtApp) => {
  if (process.client) {
    const store = MainStore();

    await store.getContent();
  }
});
