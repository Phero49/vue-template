<script setup>
import navVue from '../components/nav.vue';


</script>
<template>
  <div class="container-home">
  <nav-vue />
    <div class="">
      <div class="flex justify-center mx-10 py-28">
        <div></div>

        <div>
          <div class="my-6 ">
            <div class="mx-7">
              <button  class="rounded  bg-black p-2 px-5 mr-3  text-white">
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

  <div class="lg:grid lg:grid-cols-3 space-y-8 lg:space-y-0 gap-10 my-16">
    <div
      class="shadow-lg border-x-8 border-y-8 bg-slate-100 rounded mx-10"
      v-for="i in 3"
      :key="i"
    >
      <div>
        <img
          src="../assets/pexels-asad-photo-maldives-457882.jpg "
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
 <div class="grid lg:grid-cols-3 md:grid-cols-2 py-6 gap-10 space-y-10 text-white">
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

    <div class="md:ml-10 ml-5">
      <h4 class="font-semibold text-gray-300 text-2xl lg:my-4 ">services</h4>
      <ul class="text-gray-100 font-light ">
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
      
      <h2 class="font-semibold text-xl mr-7 text-right md:text-left md:ml-10 my-6">follow us</h2>

      <div class="flex flex-wrap justify-end space-x-7">
        <div>
          <img src="../assets/snapchat-3649933.svg" height="30" alt="" />
        </div>

        <div>
          <img src="../assets/twitter-3649938.svg" height="30" alt="" />
        </div>
        <div>
          <img src="../assets/instagram-3649926.svg" height="30" alt="" />
        </div>
        <div>
          <img src="../assets/facebook-3649924.svg" height="30" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div class="text-center text-sm font-extralight mt-5 mb-2 text-white">
copyright pemphero mkuka 2022
  </div>
</footer>
 
</template>