<script setup>
import Logo from '@/components/svg/logo.vue';
import { ArrowUpRight } from '@lucide/vue';
import gsap from 'gsap';
import { onMounted, ref } from 'vue';

const buttonText = ref(null);

const mouseLeaveEvent = () => {
    gsap.fromTo(buttonText.value,
        {
            marginTop: -34,
            duration: 0.1,
        },
        {
            marginTop: 10,
        }
    )
}

const mouseEnterEvent = () => {
    gsap.fromTo(buttonText.value,
        {
            marginTop: 10,
            duration: 0.1,
        },
        {
            marginTop: -34,
        }
    )
}



</script>

<template>
    <header class="font-semibold mx-auto">
        <div class="flex justify-between items-center bg-[#EFEEEC] mx-4 h-16  px-6 mt-4 rounded-full">

            <Logo class="h-5"/>
            
            <ul class="flex gap-10 text-lg">
                <li>Services</li>
                <li>International</li>
                <li>About</li>
                <li>Work</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Webinar</li>
            </ul>
    
            <button 
                class="bg-black overflow-hidden text-lg h-12 px-7 rounded-full text-white"
                @mouseenter="mouseEnterEvent"
                    @mouseleave="mouseLeaveEvent"
            >
                
                <div 
                    ref="buttonText"  
                    class="flex flex-col gap-2 cursor-pointer mt-2 "
                    
                >
                    <span  class="flex items-center justify-center gap-1 ">
                        Get In Touch
                        <ArrowUpRight size="18"/>
                    </span> 
                    <span class="flex items-center justify-center gap-1 ">
                        Get In Touch
                        <ArrowUpRight size="18"/>
                    </span> 
                </div>
            </button>
        </div>
        
    </header>
</template>