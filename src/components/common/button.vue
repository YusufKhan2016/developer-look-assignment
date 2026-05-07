<script setup>
import { ArrowUpRight } from '@lucide/vue';
import gsap from 'gsap';
import { ref } from 'vue';

defineProps({
    bgColor: {
        type: String,
        default: '#000'
    },
    textColor: {
        type: String,
        default: '#fff'
    }
})

const buttonInner = ref(null);
const buttonWrapper = ref(null);

const mouseEnterEvent = () => {
    gsap.to(buttonWrapper.value, {
        borderRadius: '12px',
        ease: 'power3.out'
    })
    
    gsap.to(buttonInner.value, {
        y: '-50%',
        ease: 'power2.out',
    })

    
}

const mouseLeaveEvent = () => {
    gsap.to(buttonWrapper.value, {
        borderRadius: '50px',
        ease: 'power3.out'
    })

    gsap.to(buttonInner.value, {
        y: '0%',
        duration: 0.35,
        ease: 'power2.out',
    })

    
}
</script>

<template>
    <button 
        class="py-2.5 cursor-pointer rounded-full"
        :style="`background-color: ${bgColor}; color: ${textColor}`"
        ref="buttonWrapper"
        @mouseenter="mouseEnterEvent"
        @mouseleave="mouseLeaveEvent"
    >

        <div
            class="relative h-6 px-6 text-[16px]  overflow-hidden "
        >
            <div
                ref="buttonInner"
                class="flex flex-col"
                style="height: 200%;"
            >
                <span class="flex items-center justify-center gap-1.5 h-11">
                    <slot/>
                    <ArrowUpRight size="15" />
                </span>

                <span class="flex items-center justify-center gap-1.5 h-11">
                    <slot/>
                    <ArrowUpRight size="15" />
                </span>
            </div>
        </div>
    </button>
</template>