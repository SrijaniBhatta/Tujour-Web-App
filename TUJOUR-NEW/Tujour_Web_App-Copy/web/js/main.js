// slider js
var swiper = new Swiper(".our-partner" , {
    slidesPerView:5,
    spaceBetween:30,
    loop:true,
    autoplay:{
      delay:1000,
    },
    breakpoints:{
      '991':{
        slidesPerView:5,
        spaceBetween:10,
      },
      '767':{
        slidesPerView:3,
        spaceBetween:10,
      },
      '220':{
        slidesPerView:2,
        spaceBetween:8,
      },
    }
  })


//   count js
document.addEventListener("DOMContentLoaded",()=>{
 function counter(id, start, end, duration){
    let obj=document.getElementById(id),
    current=start,
    range=end-start,
    increment= end > start ? 1 : -1 ,
    step=Math.abs(Math.floor(duration / range)),
    timer=setInterval(()=>{
        current+=increment;
        obj.textContent=current;
        if(current== end){
            clearInterval(timer);
        }
    }, step);
 }
 counter("count1", 0 , 45287, 3000);
 counter("count2", 100 ,15687, 4000);
 counter("count3", 0 , 18541, 3000);
});

