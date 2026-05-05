<script setup>
import { ArrowUpRight } from '@lucide/vue';
import gsap from 'gsap';
import { ref } from 'vue';

const buttonInner = ref(null);
const buttonWrapper = ref(null);

const mouseEnterEvent = () => {
    gsap.to(buttonInner.value, {
        y: '-50%',
        duration: 0.35,
        ease: 'power2.out',
    })

    gsap.to(buttonWrapper.value, {
        borderRadius: '12px',
        ease: 'power3.out'
    })
}

const mouseLeaveEvent = () => {
    gsap.to(buttonInner.value, {
        y: '0%',
        duration: 0.35,
        ease: 'power2.out',
    })

    gsap.to(buttonWrapper.value, {
        borderRadius: '50px',
        ease: 'power3.out'
    })
}
</script>

<template>
    <button 
        class="py-2.5 bg-black rounded-full cursor-pointer"
        ref="buttonWrapper"
        @mouseenter="mouseEnterEvent"
        @mouseleave="mouseLeaveEvent"
    >

        <div
            class="relative bg-black h-6 px-6 rounded-full text-white text-[16px]  overflow-hidden "
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