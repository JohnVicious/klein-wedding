<script setup>

</script>
<template>
    <div>
        <div class="row mt-4">
            <div class="col-12 text-center">
                <div>
                    <RouterLink
                        class="h5 px-4 font-italic border-bottom navTxt"                
                        to="/"
                        rel="tooltip"
                    >
                        Home
                    </RouterLink>
                    
                    <RouterLink
                        class="h5 px-4 font-italic border-bottom navTxt"
                        to="/itinerary"
                        rel="tooltip"
                    >
                        Itinerary
                    </RouterLink>

                    <RouterLink
                        class="h5 px-4 font-italic border-bottom navTxt"
                        to="/location"
                        rel="tooltip"
                    >
                        Location
                    </RouterLink>                
                </div>
            </div>
          </div>
    </div>
</template>
