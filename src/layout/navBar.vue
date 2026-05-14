<script setup>
import Button from '@/components/common/button.vue';
import DropDown from '@/components/common/dropDown.vue';
import Logo from '@/components/svg/logo.vue';
import { Plus } from '@lucide/vue';
import { ref } from 'vue';

const navItems = [
  { label: 'Services', hasIcon: true },
  { label: 'Industries', hasIcon: true },
  { label: 'International', hasIcon: true },
  { label: 'About', hasIcon: true },
  { label: 'Work' },
  { label: 'Careers' },
  { label: 'Blog' },
  { label: 'Webinar' },
];


const dropDownActive = ref(false);
const activeIndex = ref(null);
const highlightStyle = ref({});
const isHovering = ref(false);
const isFirstHover = ref(true);
const navRef = ref(null);
const itemRefs = ref([]);

function updateHighlight(index) {
  const el = itemRefs.value[index];
  if (!el || !navRef.value) return;
  const navRect = navRef.value.getBoundingClientRect();
  const itemRect = el.getBoundingClientRect();
  highlightStyle.value = {
    width: `${itemRect.width}px`,
    transform: `translateX(${itemRect.left - navRect.left}px)`,
    transition: isFirstHover.value ? 'none' : 'all 300ms ease',
  };
}

function onMouseEnter(index) {
  dropDownActive.value = true;
  isFirstHover.value = !isHovering.value;
  isHovering.value = true;
  activeIndex.value = index;
  updateHighlight(index);
}

function onMouseLeave() {
  dropDownActive.value = false;
  activeIndex.value = null;
  highlightStyle.value = {};
  isHovering.value = false;
  isFirstHover.value = true;
}
</script>

<template>
  <header class="font-semibold mx-auto fixed z-1000 w-full">
    <div class="flex justify-between items-center bg-[#EFEEEC] mx-4 h-16 px-3 mt-2 rounded-full">

      <Logo class="h-5 ml-3" />

      <ul
        ref="navRef"
        class="relative flex text-[15px]"
        @mouseleave="onMouseLeave"
      >
        <span
          class="absolute top-0 h-full pointer-events-none"
          aria-hidden="true"
        >
          <span
            class="block h-full bg-white rounded-full transition-all duration-300 "
            :style="highlightStyle"
          />
        </span>

        <li
          v-for="(item, index) in navItems"
          :key="item.label"
          ref="itemRefs"
          @mouseenter="onMouseEnter(index)"
          class="relative flex justify-center items-center gap-1 px-3 py-1 cursor-pointer select-none z-10"
        >
          {{ item.label }}
          <Plus v-if="item.hasIcon" size="13" :stroke-width="2.5" />
        </li>
      </ul>

      <Button>Get in touch</Button>
    </div>
  </header> 

  <DropDown v-if="dropDownActive " />
</template>