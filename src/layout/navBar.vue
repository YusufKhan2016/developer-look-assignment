<script setup>
import Button from '@/components/common/button.vue';
import Logo from '@/components/svg/logo.vue';
import { Plus } from '@lucide/vue';
import { ref, watch } from 'vue';

const mousePoint = ref(null);

function onMouseEnterEvent(event) {
    console.log(event.clientX)
    mousePoint.value = event.clientX
}

function onMouseLeaveEvent(event) {
    mousePoint.value = null;
}

watch(mousePoint, function (newVal, oldVal) {
    console.log("New Value", newVal)
    console.log("Old Value", oldVal)
})

</script>

<template>
    <header 
        class="font-semibold mx-auto fixed z-1000 w-full"
    >
        <div class="flex justify-between items-center bg-[#EFEEEC] mx-4 h-16 px-3 mt-2 rounded-full">

            <Logo class="h-5 ml-3" />

            <ul class="flex gap-6 text-[15px]" @mouseleave="onMouseLeaveEvent">
                <li @mouseenter="onMouseEnterEvent" class="flex justify-center items-center gap-1">
                    Services <Plus size="13" :stroke-width="2.5" />
                </li>

                <li @mouseenter="onMouseEnterEvent" class="flex justify-center items-center gap-1">
                    Industries 
                    <Plus size="13" :stroke-width="2.5" />
                </li>

                <li @mouseenter="onMouseEnterEvent" class="flex justify-center items-center gap-1">
                    International 
                    <Plus size="13" :stroke-width="2.5" />
                </li>
                <li 
                    @mouseenter="onMouseEnterEvent" 
                    class="flex justify-center items-center gap-1"
                >
                    About 
                    <Plus size="13" :stroke-width="2.5" />
                </li>
                <li @mouseenter="onMouseEnterEvent">Work</li>
                <li @mouseenter="onMouseEnterEvent">Careers</li>
                <li @mouseenter="onMouseEnterEvent">Blog</li>
                <li @mouseenter="onMouseEnterEvent">Webinar</li>
            </ul>

            <Button>Get in touch</Button>
        </div>
    </header>
</template>