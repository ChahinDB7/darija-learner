export default defineNuxtPlugin(async (nuxtApp) => {
  const store = useMainStore();

  await store.getContent();
});
