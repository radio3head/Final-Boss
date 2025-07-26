<template>
    <div>
        <header1/>
        <slot></slot>
        <Footer></Footer>
    </div>
</template>

<script setup>
import header1 from '@/components/icons/header1.vue';
import Footer from '@/components/icons/footer.vue';
</script>