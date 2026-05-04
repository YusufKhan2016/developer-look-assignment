<script setup lang="ts">
import BottomBar from './bottomBar.vue';
import NavBar from './navBar.vue';

</script>

<template>
    <NavBar />
    <main>
        <router-view />
    </main>
    <BottomBar />
</template>