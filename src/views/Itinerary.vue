<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import Banner from "../components/banner.vue";
import Navlinks from "../components/navlinks.vue";
import NavlinksItinerary from "../components/navlinksitinerary.vue";

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

          <NavlinksItinerary/>    

          <router-view></router-view>

          <!-- Location content -->
          <div v-if="this.$route.path == '/itinerary'" class="row mt-4">
            <div class="col-6 offset-3 text-start">
              <p class="indent" >
                We are thrilled to have you join us on this incredible journey as we embark on a beautiful weekend of love, laughter, and lifelong memories. 
                This wedding itinerary calendar is your guide to all the exciting events and moments that will make our special weekend even more unforgettable, and we can't wait to share them with you. 
                So, grab your calendars and get ready for a weekend filled with joy and happiness!
              </p>
              <p class="indent">
                For things to do while Jessica and John are busy, check the <a href="https://bigcedar.com/events/#calendar">Big Cedar Calendar</a> for additional events and activites.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
   
</template>
<style scoped>
.indent {
  text-indent: 50px;
}
.timeline-1 {
  border-left: 3px solid #b565a7;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  background: rgba(177, 99, 163, 0.09);
  margin: 0 auto;
  position: relative;
  padding: 50px;
  list-style: none;
  text-align: left;
  max-width: 40%;
}

@media (max-width: 767px) {
  .timeline-1 {
    max-width: 98%;
    padding: 25px;
  }
}

.timeline-1 .event {
  border-bottom: 1px dashed #000;
  padding-bottom: 25px;
  margin-bottom: 25px;
  position: relative;
}

@media (max-width: 767px) {
  .timeline-1 .event {
    padding-top: 30px;
  }
}

.timeline-1 .event:last-of-type {
  padding-bottom: 0;
  margin-bottom: 0;
  border: none;
}

.timeline-1 .event:before,
.timeline-1 .event:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline-1 .event:before {
  left: -207px;
  content: attr(data-date);
  text-align: right;
  font-weight: 100;
  font-size: 0.9em;
  min-width: 120px;
}

@media (max-width: 767px) {
  .timeline-1 .event:before {
    left: 0px;
    text-align: left;
  }
}

.timeline-1 .event:after {
  -webkit-box-shadow: 0 0 0 3px #b565a7;
  box-shadow: 0 0 0 3px #b565a7;
  left: -55.8px;
  background: #fff;
  border-radius: 50%;
  height: 9px;
  width: 9px;
  content: "";
  top: 5px;
}

@media (max-width: 767px) {
  .timeline-1 .event:after {
    left: -31.8px;
  }
}
</style>