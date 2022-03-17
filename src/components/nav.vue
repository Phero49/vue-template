<script setup>
import menuVue from '../assets/menu.vue';
import closeVue from '../assets/close.vue';
import {ref} from "vue"
import {useRouter } from "vue-router"
const props = defineProps({
  TColor:String

})
const close = ref(false)
const router = useRouter()





const Events = defineEmits(["closed"])



</script>

<template>

    <div class="h-full fixed  w-full blur-1 bg-cyan-300 " v-show="close" >
      <close-vue class="float-right"  @click="close = false" v-show="close"/>

    <div class="py-28 "> 
         <h5 class="text-center my-5 text-xl">Menu</h5>
 <ul class="text-center text-2xl font-semibold space-y-5 text-black ">
    <li>
            <router-link to="/about" >About</router-link>
          </li>
          <li>
            <router-link to="/gallery">photography</router-link>
          </li>
          <li>
            <router-link to="/service">services</router-link>
          </li>
          <li>
            <router-link to="/contact">contact</router-link>
          </li>
 </ul>
    </div>


    </div>
    
    <div
      class="flex py-5 justify-between text-white"
      style="background-color: rgba(0, 0, 0, 0.5)"
    >
      <div class="mx-4">
        <h1 class="font-bold text-2xl">Some title</h1>
      </div>
      <div>
      <div class="lg:hidden">
    <menu-vue  @click="close = true" v-show="!close" />
      </div>
        <ul class="lg:flex hidden justify-between space-x-6 mx-5">
         <li>
            <router-link to="/" class="">Home</router-link>
          </li>   <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/gallery" :class="$props.TColor">photography</router-link>
          </li>
          <li>
            <router-link to="/service">services</router-link>
          </li>
          <li>
            <router-link to="/contact">contact</router-link>
          </li>
        </ul>
      </div>
    </div>

</template>
<style scoped>
.router-link-active{
  --tw-text-opacity: 1;
    color: rgb(236 72 153 / var(--tw-text-opacity));
    font-weight: 700;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75re;
    --tw-border-opacity: 1;
    border-bottom-color: rgb(147 51 234 / var(--tw-border-opacity));
    border-bottom-width: 2px;

}
</style>
