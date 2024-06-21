import { defineStore } from "pinia";
import darijaLib from "@lib/darija";
import axios from "axios";

const instance = axios.create({
  timeout: process.env.NODE_ENV === "production" ? 10000 : 400000, // 10 seconds
});

export const MainStore = defineStore({
  id: "MainStore",
  state: () => ({
    arabic: null,
    favorites: [],
    allData: [],
    loading: true,
  }),
  getters: {},
  actions: {
    async getContent() {
      const { data } = await instance.get("arabic.md");
      const { value, all } = darijaLib.getArabic(data);
      this.arabic = value;
      this.allData = all;
      this.favorites = JSON.parse(localStorage.getItem("favorites")) || [];

      const favorites = this.favorites;

      _forEach(this.arabic, function (lession) {
        lession.favorite = !_isNil(
          _find(favorites, function (o) {
            return o === lession.lession;
          }),
        );
        lession.open = lession.favorite;
      });

      this.arabic = _orderBy(
        this.arabic,
        ["favorite", "lession"],
        ["desc", "asc"],
      );

      this.loading = false;
    },
    setFavorite(lession) {
      if (!lession.favorite) {
        this.favorites.push(lession.lession);
        localStorage.setItem("favorites", JSON.stringify(this.favorites));
      } else {
        this.favorites = _filter(this.favorites, function (o) {
          return o !== lession.lession;
        });
        localStorage.setItem("favorites", JSON.stringify(this.favorites));
      }

      const favorites = this.favorites;
      _forEach(this.arabic, function (lession) {
        lession.favorite = !_isNil(
          _find(favorites, function (o) {
            return o === lession.lession;
          }),
        );

        // if (lession.favorite) {
        //   lession.open = true;
        // }

        lession.open = lession.favorite;
      });

      this.arabic = _orderBy(
        this.arabic,
        ["favorite", "lession"],
        ["desc", "asc"],
      );
    },
  },
});
