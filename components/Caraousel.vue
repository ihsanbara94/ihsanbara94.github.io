<template>
  <div>
    <div
      id="carouselExampleCaptions"
      class="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div
        class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
      >
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>

      <div
        class="carousel-inner relative w-full max-h-screen overflow-hidden"
        v-if="dataTrendingContent.length > 0"
      >
        <div
          v-for="(trendingContent, id) in dataTrendingContent.slice(0, 1)"
          :key="id"
          class="carousel-item active relative float-left w-full"
        >
          <img
            :src="`http://image.tmdb.org/t/p/w500${trendingContent.poster_path}`"
            class="object-scale-down h-[570px] w-full"
            alt="..."
          />
        </div>

        <div
          v-for="(trendingContent, id) in dataTrendingContent.slice(1, 5)"
          :key="id"
          class="carousel-item relative float-left w-full"
        >
          <img
            :src="`http://image.tmdb.org/t/p/w500${trendingContent.poster_path}`"
            class="object-scale-down h-[570px] w-full"
            alt="..."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataTrendingContent: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
