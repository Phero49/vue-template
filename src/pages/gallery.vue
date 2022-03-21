<script setup>

const root = "src/assets/"

const imgs =["bg.jpg","pexels-vincent-rivaud-2265876.jpg","pexels-belle-co-847393.jpg","pexels-pixabay-302549.jpg","pexels-vincent-rivaud-2265876.jpg","pexels-belle-co-847393.jpg",]

const imgList =  imgs.map((img)=>{

    return root+img

})

console.log(imgList)
</script>
<template>

<div class="p-20" >

</div>
    <div class="grid grid-cols-4">
          <div>
              <img src="src/bg.jpg" alt="">
          </div>


        </div>
    
</template> 