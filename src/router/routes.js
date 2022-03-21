 const routes = [
     {
         path:"/",
         name:"home",
         component:()=>import("../pages/index.vue")
     },    {
         path:"/about",
         name:"about",
         component:()=>import("../pages/about.vue")
     },    {
         path:"/service",
         name:"services",
         component:()=>import("../pages/service.vue")
     },    {
         path:"/places",
         name:"places",
         component:()=>import("../pages/places.vue")
     },  {
         path:"/gallery",
         name:"gallery",
         component:()=>import("../pages/gallery.vue")
     },{
         path:"/contact",
         name:"contact",
         component:()=>import("../pages/contact.vue")
     },
     {
         path:"/:catchAll*",
         name:"note-found",
         component:()=>import("../pages/notfound.vue")
     },
     
 ]


 export default routes