<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import Banner from "../components/banner.vue";
import Navlinks from "../components/navlinks.vue";

//hooks
onMounted(() => {
 
});
onUnmounted(() => {
});
</script>

<template>
  
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row mt-6 mb-6 inviteCard border-0 shadow p-4" >
      <div class="col-12 text-center">
        <div class="h-50 d-inline-block ">
          <Banner/>
          <Navlinks/>

          <!-- Location content -->
          <div class="row mt-4">
            <div class="col-12">
              <p>Join us in celebrating our love by listening to the music for our wedding weekend!</p>
              <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/25dfCZWt1mDAM3FOouWmhs?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   
</template>
