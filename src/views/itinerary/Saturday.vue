<template>  
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <div id="content">
          <ul class="timeline-1 text-black">
            <li class="event" data-date="9:00am - 10:30am">
              <h4 class="mb-3 pt-3">Breakfast @ Devil's Pool</h4>
              <p>The newly wed's will be down at Devil's Pool for breakfast.</p>
            </li>
            <li class="event" data-date="5:00pm - 6:00pm">
              <h4 class="mb-3 pt-3">Fun Mountain - Bowling</h4>
              <p class="mb-0">We have 3 lanes available for at least an hour at this time.</p>
            </li>
            <li class="event" data-date="6:00pm - 10:00pm">
              <h4 class="mb-3 pt-3">Fun Mountain</h4>
              <p class="mb-0">We will be at fun mountain enjoying some pizza, games, and the LSU football game. Come by and have some fun with us!</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>
<style scoped>
.timeline-1 {
  border-left: 3px solid #7d333a;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  background: rgba(177, 99, 163, 0.09);
  margin: 0 auto;
  position: relative;
  padding: 50px;
  list-style: none;
  text-align: left;
  max-width: 40%;
  min-width: 40%;
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
  -webkit-box-shadow: 0 0 0 3px #bd4753;
  box-shadow: 0 0 0 3px #bd4753;
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
