import { defineStore, acceptHMRUpdate } from "pinia";
import darijaLib from "@lib/darija";
import axios from "axios";
import { ref } from "vue";

const instance = axios.create({
  timeout: process.env.NODE_ENV === "production" ? 10000 : 400000, // 10 seconds
});

export const useMainStore = defineStore("mainStore", () => {
  const arabic = ref(null);
  const favorites = ref([]);
  const allData = ref([]);
  const loading = ref(true);
  const runtimeConfig = useRuntimeConfig();

  async function getContent() {
    const baseUrl = runtimeConfig.public.baseUrl;

    const { data } = await instance.get(`${baseUrl}/arabic.md`);
    const { value, all } = darijaLib.getArabic(data);

    arabic.value = value;
    allData.value = all;
    favorites.value = JSON.parse(localStorage.getItem("favorites")) || [];

    _forEach(arabic.value, function (lession) {
      lession.favorite = !_isNil(
        _find(favorites.value, function (o) {
          return o === lession.lession;
        }),
      );
      lession.open = lession.favorite;
    });

    arabic.value = _orderBy(
      arabic.value,
      ["favorite", "lession"],
      ["desc", "asc"],
    );

    loading.value = false;
  }

  function setFavorite(lession) {
    if (!lession.favorite) {
      favorites.value.push(lession.lession);
      localStorage.setItem("favorites", JSON.stringify(favorites.value));
    } else {
      favorites.value = _filter(favorites.value, function (o) {
        return o !== lession.lession;
      });
      localStorage.setItem("favorites", JSON.stringify(favorites.value));
    }

    _forEach(arabic.value, function (lession) {
      lession.favorite = !_isNil(
        _find(favorites.value, function (o) {
          return o === lession.lession;
        }),
      );

      // if (lession.favorite) {
      //   lession.open = true;
      // }

      lession.open = lession.favorite;
    });

    arabic.value = _orderBy(
      arabic.value,
      ["favorite", "lession"],
      ["desc", "asc"],
    );
  }

  return {
    arabic,
    favorites,
    allData,
    loading,
    setFavorite,
    getContent,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}
