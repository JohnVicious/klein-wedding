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
    <div class="row mt-6 inviteCard border-0 shadow p-4" >
      <div class="col-12 text-center">
        <div class="h-50 d-inline-block ">
          <Banner/>
          <Navlinks/>

          <div class="row mt-4">
            <div class="col-12">
              TBA
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
   
</template>
