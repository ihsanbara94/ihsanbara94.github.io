<template>
  <div>
    <Navbar />
    <div class="flex my-8 bg-gray-900 text-white" v-if="type === 'movie'">
      <div class="flex w-2/6 items-center justify-center">
        <img
          class="h-[570px]"
          :src="`http://image.tmdb.org/t/p/w500/${dataDetail.poster_path}`"
          alt="poster"
        />
      </div>
      <div class="w-4/6 mr-16">
        <h1 class="text-4xl font-extrabold">{{ dataDetail.title }}</h1>
        <div class="mt-5">
          Release Date:
          <span class="font-bold">{{ dataDetail.release_date }}</span
          ><br />
          Genre:
          <span class="font-bold">{{ setNames(dataDetail.genres) }}-</span>
          <br />
          Run Time: <span class="font-bold">{{ dataDetail.runtime }}m</span>
          <br />
        </div>
        <div class="mt-5 border-b-2 pb-5 border-slate-900">
          <p>{{ dataDetail.overview }}</p>
        </div>
        <div class="mt-5 border-b-2 pb-5 border-slate-900">
          Production Studio:
          <p class="font-bold">
            {{ setNames(dataDetail.production_companies) }}-
          </p>
          Stars:
          <p class="mt-5 font-bold">{{ setNames(cast) }}-</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "../../components/Footer.vue";
import Navbar from "../../components/Navbar.vue";
export default {
  components: { Navbar, Footer },
  data() {
    return {
      type: "",
      typeId: "",
      apiKey: "6de3c0f0176c22fabe34c6be66fa8cae",
      dataDetail: [],
      cast: [],
    };
  },
  beforeMount() {
    this.type = this.$route.query.type;
    this.typeId = this.$route.query.typeId;
    this.getDataDetail();
    this.getCast();
  },
  methods: {
    setNames(arrayNames) {
      let names = "";
      arrayNames &&
        arrayNames.forEach((element) => {
          names += ` ${element.name},`;
        });
      return names;
    },
    getDataDetail() {
      axios
        .get(
          `https://api.themoviedb.org/3/${this.type}/${this.typeId}?api_key=${this.apiKey}`
        )
        .then((res) => {
          this.dataDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCast() {
      axios
        .get(
          `https://api.themoviedb.org/3/${this.type}/${this.typeId}/credits?api_key=${this.apiKey}`
        )
        .then((res) => {
          this.cast = res.data.cast.slice(0, 10);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
