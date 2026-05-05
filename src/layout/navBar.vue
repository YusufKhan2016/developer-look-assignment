<script setup>
import Button from '@/components/common/button.vue';
import Logo from '@/components/svg/logo.vue';
import { Plus } from '@lucide/vue';

</script>

<template>
    <header class="font-semibold mx-auto fixed z-1000 w-full">
        <div class="flex justify-between items-center bg-[#EFEEEC] mx-4 h-16 px-3 mt-2 rounded-full">
            <Logo class="h-5 ml-3" />

            <ul class="flex gap-6 text-[15px]">
                <li class="flex justify-center items-center gap-1">Services <Plus size="13" :stroke-width="2.5" /></li>
                <li class="flex justify-center items-center gap-1">Industries <Plus size="13" :stroke-width="2.5" /></li>
                <li class="flex justify-center items-center gap-1">International <Plus size="13" :stroke-width="2.5" /></li>
                <li class="flex justify-center items-center gap-1">About <Plus size="13" :stroke-width="2.5" /></li>
                <li>Work</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Webinar</li>
            </ul>

            <Button>Get in touch</Button>
        </div>
    </header>
</template>