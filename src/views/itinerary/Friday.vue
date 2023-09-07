<template>
  
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <div id="content">
          <ul class="timeline-1 text-black">
            <li class="event" data-date="1:00pm - 3:00pm">
              <h4 class="mb-3 pt-3">Wedding Ceremony</h4>
              <p>Jessica and John will be getting married at the Garden Chapel!</p>
            </li>
            <li class="event" data-date="4:00pm - 5:00pm">
              <h4 class="mb-3 pt-3">Cocktail Hour @ Buffalo Bar</h4>
              <p>Enjoy some drinks at the Buffalo Bar while we finish taking our photos and prepare for dinner. Beautiful views!</p>
              <p class="fst-italic fw-bolder pt-2">This event is being hosted</p>
            </li>
            <li class="event" data-date="5:00pm - 7:30pm">
              <h4 class="mb-3 pt-3">Wedding Dinner @ Osage</h4>
              <p class="mb-0">The wedding dinner will be taking place at the Osage restraunt at Top of the Rock.</p>
              <p class="fst-italic fw-bolder pt-2">This event is being hosted</p>
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
