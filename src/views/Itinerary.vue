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

          <!-- THURSDAY -->
          <div class="row mt-5 d-flex flex-nowrap">
            <div class="col-12 itinerary-dayheader allura text-center d-flex flex-nowrap">
              <img src="@/assets/img/dayheader_leftmark.svg" />
              <span>Thursday</span>
              <img src="@/assets/img/dayheader_rightmark.svg" />
            </div>
          </div>
          <div class="row mt-2 itinerary-eventpanel">
            <div class="col-12">
              <div class="row">
                <div class="col-6 itinerary-eventtitle py-2">
                  <div>GOLF CART TOUR</div>
                </div>
                <div class="col-6 itinerary-eventtime py-2">
                  2:00 P.M.
                </div>
              </div>
              <div class="row">
                <div class="col-6 itinerary-eventtitle py-2">
                  <div>REHERSAL DINNER</div>
                  <div class="font-italic">MOUNTAIN TOP</div>
                </div>
                <div class="col-6 itinerary-eventtime py-2">
                  5:00 P.M.
                </div>
              </div>
            </div>
          </div>

          <!-- FRIDAY -->
          <div class="row mt-5 d-flex flex-nowrap">
            <div class="col-12 itinerary-dayheader allura text-center d-flex flex-nowrap">
              <img src="@/assets/img/dayheader_leftmark.svg" />
              <span>Friday</span>
              <img src="@/assets/img/dayheader_rightmark.svg" />
            </div>
          </div>
          <div class="row mt-2 itinerary-eventpanel">
            <div class="col-12">
              <div class="row">
                <div class="col-6 itinerary-eventtitle py-2">
                  <div>WEDDING</div>
                </div>
                <div class="col-6 itinerary-eventtime py-2">
                  2:00 P.M.
                </div>
              </div>
              <div class="row">
                <div class="col-6 itinerary-eventtitle py-2">
                  <div>DINNER</div>
                  <div class="font-italic">TOP OF THE ROCK</div>
                </div>
                <div class="col-6 itinerary-eventtime py-2">
                  5:00 P.M.
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  </div>
   
</template>
