<script setup>
import drum from '@/assets/images/heroBanner/drum.webp';
import globalSearchAwards from '@/assets/images/heroBanner/global-search-awards.webp';
import heroBanner from '@/assets/images/heroBanner/hero-banner.webp';
import ukContentAwards from '@/assets/images/heroBanner/uk-content-awards.webp';
import ukSocialMedia from '@/assets/images/heroBanner/uksocial-media.webp';
import LeftWing from '@/components/svg/leftWing.vue';
import RightWing from '@/components/svg/rightWing.vue';

import gsap, { SplitText } from 'gsap/all';
import { onMounted, ref } from 'vue';

const imageDatas = [ 
    globalSearchAwards, 
    drum, 
    ukSocialMedia,
    ukContentAwards, 
]

const headingText = ref(null);
const heroBannerTextImg = ref(null);

gsap.registerPlugin(SplitText)

onMounted(() => {
    let split = SplitText.create(headingText.value, { type: 'chars' })

    const tl = gsap.timeline();

    tl.from(split.chars, {
        y:50,
        ease: 'power3.out',
        stagger: {
            from: "end",
            amount: -0.4,
            ease:'power2.inOut'
        },
    })

    tl.from(heroBannerTextImg.value, {
        width: 0
    })
})
</script>

<template>
    <section>
        <div class="relative text-white h-[calc(100vh-12px)] w-[98.5%] rounded-3xl overflow-hidden mx-auto mt-2">
            <div class="absolute inset-0">
                <img :src="heroBanner" class="object-cover h-full w-full blur-[10px]">
            </div>
            <div class="bg-black/30 absolute inset-0"></div>
            <div class="relative z-4 h-screen top-18 flex flex-col items-center">
                <p class="mx-auto text-xs font-medium text-center uppercase">#1 Most Recommended <br> content marketing agency</p>
                
                <div class="flex items-center justify-center gap-4 mt-2">
                    <LeftWing />
                    <img v-for="value in imageDatas" class="h-4" :src="value">
                    <RightWing />
                </div>

                <div 
                    class="flex flex-col items-center mt-2 text-[120px]/28 font-medium"
                    ref="headingText"
                >
                    <h1 class="overflow-hidden">We Create</h1>
                    <div class="flex items-center justify-center gap-3"> 
                        <h1 class="overflow-hidden pb-5">Category</h1> 
                        <div ref="heroBannerTextImg" class="h-30 w-30 rounded-2xl overflow-hidden">
                            <img :src="heroBanner" class="h-full w-full object-cover" alt="">
                        </div>
                        <h1 class="overflow-hidden pb-5">Leaders</h1>
                    </div>
                </div>

                <h2 class="text-3xl font-semibold mt-8">on every searchable platform</h2>
                <div class="flex justify-between mt-1 px-5 w-full ">
                    <p>
                        Organic media planners creating, distributing & optimising <br> search-first content for SEO, Social, PR, Ai and LLM search
                    </p>
                    <p class="text-end font-semibold">
                        4 Global Offices serving <br> UK, USA (New York) & EU
                    </p>
                </div>
            </div>
        </div>

    </section>
</template>