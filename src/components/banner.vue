<script setup>
import { onMounted } from "vue";

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

</script>
<template>
    <div>
        <div class="row">
            <div class="col-12 text-center nameSignature allura p-4">
                <span>John & Jessica</span>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center subHeadText allura">
                <span>November 3rd, 2023 | Ridgedale, MO</span>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center subHeadText allura">
                <span id="daysLeftCount"></span> Days To Go
            </div>
        </div>
    </div>
</template>
