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
          <div class="row mt-6">
            <div class="col-12">
                <div class="row">
                  <div class="col-12 col-lg-6">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                      </div>
                      <div class="carousel-inner" >
                          <div class="carousel-item active">
                              <img src="@/assets/img/bigcedar/bc1.jpg" class="d-block w-100 rounded" >
                          </div>
                          <div class="carousel-item">
                            <img src="@/assets/img/bigcedar/bc2.jpg" class="d-block w-100 rounded" >
                          </div>
                          <div class="carousel-item">
                            <img src="@/assets/img/bigcedar/bc3.jpg" class="d-block w-100 rounded" >
                          </div>
                          <div class="carousel-item">
                            <img src="@/assets/img/bigcedar/bc4.jpg" class="d-block w-100 rounded" >
                          </div>
                          <div class="carousel-item">
                            <img src="@/assets/img/bigcedar/bc5.jpg" class="d-block w-100 rounded" >
                          </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6 mt-4">
                    <h4><a href="https://bigcedar.com/">Big Cedar</a></h4>
                    <div>
                      <p class="text-left">190 Top of the Rock Rd, Ridgedale, MO 65739<br/>Private Event - Invite Only</p>
                      <p>
                        <a href="https://bigcedar.com/events/#calendar">Big Cedar Calendar</a>
                      </p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   
</template>
