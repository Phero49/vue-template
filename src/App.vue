<script setup>
import menuVue from './assets/menu.vue';
import closeVue from './assets/close.vue';
import {ref} from "vue"
const close = ref(false)

</script>\
<template>
  <div class="container-home" v-if="$route.name == 'home'">
    <div class="h-full fixed  w-full blur-1 bg-cyan-300 " v-show="close" >
      <close-vue class="float-right"  @click="close = false" v-show="close"/>

    <div class="py-28 ">
         <h5 class="text-center my-5 text-xl">Menu</h5>
 <ul class="text-center text-2xl font-semibold space-y-5 text-black ">
    <li>
            <router-link to="">About</router-link>
          </li>
          <li>
            <router-link to="">photography</router-link>
          </li>
          <li>
            <router-link to="">services</router-link>
          </li>
          <li>
            <router-link to="">contact</router-link>
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
            <router-link to="">About</router-link>
          </li>
          <li>
            <router-link to="">photography</router-link>
          </li>
          <li>
            <router-link to="">services</router-link>
          </li>
          <li>
            <router-link to="">contact</router-link>
          </li>
        </ul>
      </div>
    </div>

<router-view>

</router-view>

</div>
</template>