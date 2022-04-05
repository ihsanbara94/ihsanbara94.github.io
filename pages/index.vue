<template>
  <div>
    <Navbar />
    <div class="flex bg-gray-900">
      <div class="w-2/5">
        <p class="block text-center text-2xl font-body mt-5 mb-9 text-white">
          Trending Movies
        </p>
        <Caraousel :dataTrendingContent="TrendingMovie" />
      </div>
      <div class="w-3/5">
        <p class="block text-center text-2xl font-body mt-5 text-white">
          On Cinema
        </p>
        <ContentCard :dataMovies="Movies" />
        <div class="flex justify-center my-10">
          <div
            class="text-white text-center text-lg bg-blue-700 px-3 py-2 hover:cursor-pointer rounded-xl"
            @click="setPage()"
          >
            More
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Caraousel from "../components/Caraousel.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import ContentCard from "../components/ContentCard.vue";
export default {
  components: { Navbar, Footer, Caraousel, ContentCard },
  name: "IndexPage",
  data() {
    return {
      apiKey: "6de3c0f0176c22fabe34c6be66fa8cae",
      Movies: [],
      TrendingMovie: [],
      Search: [],
      page: 1,
    };
  },
  watch: {
    page() {
      this.getDataMovies();
    },
  },
  mounted() {
    this.getDataMovies();
    this.getTrendingMovie();
  },
  methods: {
    getDataMovies() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&page=${this.page}`
        )
        .then((res) => {
          this.Movies = [...this.Movies, ...res.data.results];
          console.log(Movies);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setPage() {
      this.page += 1;
    },
    getTrendingMovie() {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.apiKey}`
        )
        .then((res) => {
          this.TrendingMovie = res.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
