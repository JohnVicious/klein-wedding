<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
function days_between(date1, date2) {

  // The number of milliseconds in one day
  const ONE_DAY = 1000 * 60 * 60 * 24;

  // Calculate the difference in milliseconds
  const differenceMs = Math.abs(date1 - date2);

  // Convert back to days and return
  return Math.round(differenceMs / ONE_DAY);

}

//hooks
onMounted(() => {
  
  const daysLeftCount = days_between(
      new Date(),
      new Date("2023-11-03")
    );
    const divElement = document.getElementById('daysLeftCount');
    divElement.textContent = daysLeftCount;
});
onUnmounted(() => {
});
</script>

<template>
  
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row mt-6 inviteCard border-0 shadow p-4" >
      <div class="col-12 text-center">


        <div class="h-50 d-inline-block ">

          <!-- Header -->
          <div class="row">
            <div class="col-12 text-center nameSignature p-4">
              <span>John & Jessica</span>
            </div>
          </div>
          <div class="row">
            <div class="col-12 text-center subHeadText">
              November 3rd, 2023 | Ridgedale, MO
            </div>
          </div>
          <div class="row">
            <div class="col-12 text-center subHeadText">
              <span id="daysLeftCount"></span> Days To Go
            </div>
          </div>



        </div>

      </div>
    </div>
  </div>
   
</template>
