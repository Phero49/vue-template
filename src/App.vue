<script setup>
import { useRouter,useRoute } from "vue-router";
import navVue from "./components/nav.vue";

const route = useRoute()


</script>

<template>


   <nav-vue v-if="route.name != 'home'" TColor="" />
    <router-view>

      </router-view>
  
</template>

<style>

</style>