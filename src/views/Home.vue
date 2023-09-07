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

          <!-- Home content -->
          <div class="row">
            <div class="col-12 col-lg-6 p-4">
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src="@/assets/img/johnjess3.jpg" class="d-block w-100 rounded" >
                  </div>
                  <div class="carousel-item">
                      <img src="@/assets/img/johnjess4.jpg" class="d-block w-100 rounded" >
                  </div>
                  <div class="carousel-item">
                      <img src="@/assets/img/johnjess1.jpg" class="d-block w-100 rounded" >
                  </div>
                  <div class="carousel-item">
                      <img src="@/assets/img/johnjess2.jpg" class="d-block w-100 rounded" >
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
            <div class="col-12 col-lg-4 p-4 text-start">
              <p class="lh-sm">
                My love, today you are my person
                <br/>
                and I am yours to love.
                <br/>
                <br/>
                With all that I am and all that I will ever be,
                <br/>
                I stand here before you
                <br/>
                to join my life with yours.
                <br/>
                <br/>
                Just as this circle is without end,
                <br/>
                my love for you is never-ending.
                <br/>
                Just as it is made of incorruptible substance,
                <br/>
                my commitment to you is unbreakable.
                <br/>
                <br/>
                I promise to be there when you need me,
                <br/>
                to fill your days with sunshine,
                <br/>
                to comfort you and encourage you,
                <br/>
                to help you reach your goals,
                <br/>
                to wipe your tears, and
                <br/>
                to laugh with you in times of joy.
                <br/>
                <br/>
                I pledge to respect your unique talents and abilities,
                <br/>
                to lend you strength when you need it,
                <br/>
                to hold you up when you falter,
                <br/>
                to listen to you when you need to talk,
                <br/>
                and to support you in all that you do.
                <br/>
                <br/>
                I will be your partner in parenthood,
                <br/>
                your ally in conflict,
                <br/>
                and your greatest fan and confidant.
                <br/>
                Together, we will face all of life's experiences and share one another's dreams.
                <br/>
                <br/>
                I love you now and forever.
                <br/>
                <br/>
                 "The Wedding Vow" by Lang Leav
              </p>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
   
</template>
