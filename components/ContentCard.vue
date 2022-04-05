<template>
  <div>
    <div v-if="dataMovies.length > 0" class="flex flex-wrap justify-center">
      <div
        v-for="(movie, idMovie) in dataMovies"
        :key="idMovie"
        @click="openDetail('movie', movie)"
        class="rounded-lg shadow-lg w-40 h-52 mb-7 mt-8"
      >
        <a href="#!">
          <img
            class="rounded-t-lg h-full"
            :src="`http://image.tmdb.org/t/p/w500${movie.poster_path}`"
          />
        </a>
        <p class="text-gray-100 text-sm">
          {{ movie.title }} ({{ changeDate(movie.release_date) }})
        </p>
      </div>
    </div>

    <div v-if="dataTv.length > 0" class="flex flex-wrap justify-center">
      <div
        v-for="(tv, idTv) in dataTv"
        :key="idTv"
        @click="openDetail('tv', tv)"
        class="rounded-lg shadow-lg w-40 h-52 mb-7 mt-8"
      >
        <a href="#!">
          <img
            class="rounded-t-lg h-full"
            :src="`http://image.tmdb.org/t/p/w500${tv.poster_path}`"
          />
        </a>
        <p class="text-gray-100 text-sm">
          {{ tv.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataMovies: {
      type: Array,
      default: () => [],
    },
    dataTv: {
      type: Array,
      default: () => [],
    },
    page: Number,
  },
  data() {
    return {};
  },

  methods: {
    changeDate(date) {
      var d = new Date(date);
      var n = d.getFullYear();
      return n;
    },
    openDetail(type, value) {
      this.$router.push(`/detail?type=${type}&typeId=${value.id}`);
    },
  },
};
</script>

<style></style>
