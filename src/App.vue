<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" :key="Component" v-if="route.meta.keepAlive"></component>
    </keep-alive>
    <component :is="Component" v-if="!route.meta.keepAlive"></component>
  </router-view>
</template>

<script setup lang="ts" name="">
import { onMounted } from 'vue'
</script>

<style lang="scss">
@import '@/assets/scss/reset.scss';
</style>
