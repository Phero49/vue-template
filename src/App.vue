<script setup>
import menuVue from './assets/menu.vue';
import closeVue from './assets/close.vue';
import {ref} from "vue"
const close = ref(false)

</script>
<template>
  <div class="container-home">
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

    <div class="">
      <div class="flex justify-center mx-10 py-28">
        <div></div>

        <div>
          <div class="my-6 ">
            <div class="mx-7">
              <button class="rounded hidden bg-black p-2 px-5 mr-3  text-white">
                Search
              </button>
              <input
                type="search"
                class="p-2 shadow-md outline-1 outline-hidden  rounded-md"
                placeholder="search"
              /> 
            </div>
            <p
              class="
                py-4
                my-2
                text-center
                shadow-inner shadow-slate-300
                text-white text-sm
              "
              style="background-color: rgba(0, 0, 0, 0.9)"
            >
              Lost i lenore of respiterespite uttered heart, me whose ah.
            </p>
          </div>

          <div
            class="text-white p-5 max-w-md"
            style="background-color: rgba(0, 0, 0, 0.9)"
          >
            <h1 class="text-2xl font-semibold text-center">
              Pallas upon peering.
            </h1>

            <p class="font-light mt-4 text-center">
              Marvelled bust this whether that relevancy here the tapping at, it
              made now the more .
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="lg:grid lg:grid-cols-3 space-y-8 gap-10 my-16">
    <div
      class="shadow-lg border-x-8 border-y-8 bg-slate-100 rounded mx-10"
      v-for="i in 3"
      :key="i"
    >
      <div>
        <img
          src="./assets/pexels-asad-photo-maldives-457882.jpg "
          class="h-1/5 rounded"
          alt=""
          srcset=""
        />
      </div>

      <div class="mx-2 mt-7">
        <div class="my-5 text-sm font-light">
          Duo sed sea duo erat lorem eirmod takimata sed rebum magna, clita est
          et magna et clita. Diam voluptua kasd.
        </div>

        <div class="text-sm mb-5 font-light">
          Of he perched thing the floor the tossed i metell, maiden other my and
          is, heard now my visiter and.
        </div>
      </div>
    </div>
  </div>
  
<footer class="bg-black">
 <div class="lg:grid lg:grid-cols-3 py-6 gap-10 space-y-10 text-white">
    <div class="ml-5">
      <h5 class="font-semibold text-2xl my-4">sign up for news letter</h5>
      <div>
        <form action="" method="post">
          <label for="email" class="font-semibold my-5">email</label>
          <br />
          <input
            type="email"
            required
            name="emall"
            id="email"
            placeholder="example@mail.com"
            class="
              outline
              shadow-md
              rounded-md
              my-4
              text-black
              py-1
              outline-slate-50
            "
          />
          <br />
          <button class="py-1 px-4 rounded-md text-black bg-white">
            Submit
          </button>
        </form>
      </div>
      <div class="my-5 text-sm text-light">
        Be shadows upon core a flitting dreaming. Engaged syllable only.
      </div>
    </div>

    <div class="lg:ml-10 ml-5">
      <h4 class="font-semibold text-gray-300 text-2xl my-4">services</h4>
      <ul class="text-gray-100 font-light">
        <li class="hover:underline hover:font-normal hover:text-base">
          Veces el sin hello
        </li>
        <li class="p-1">Utters truly.</li>
        <li>My deep.</li>
      </ul>
      <h4 class="font-semibold text-gray-300 text-2xl my-4">
        terms and conditions
      </h4>
      <div>
        More back flown curious upon is fancy, in help dreams eyes on an bust
        fluttered.
      </div>
    </div>

    <div class="mx-5">
      <h2 class="font-semibold text-xl mr-7 text-right my-6">follow us</h2>

      <div class="flex flex-wrap justify-end space-x-7">
        <div>
          <img src="./assets/snapchat-3649933.svg" height="30" alt="" />
        </div>

        <div>
          <img src="./assets/twitter-3649938.svg" height="30" alt="" />
        </div>
        <div>
          <img src="./assets/instagram-3649926.svg" height="30" alt="" />
        </div>
        <div>
          <img src="./assets/facebook-3649924.svg" height="30" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div class="text-center text-sm font-extralight mt-5 mb-2 text-white">
copyright pemphero mkuka 2022
  </div>
</footer>
 
</template>