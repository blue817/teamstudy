const btnMy = document.querySelector('.ico__myinfo');
const myBx = document.querySelector('.info_bx');
let btnTxt = document.querySelectorAll('.btn__txt');

btnMy.addEventListener('click',function(){
  myBx.classList.contains('is_act') ? myBx.classList.remove('is_act') : myBx.classList.add('is_act');
});

const swiper = new Swiper('.swiper__filter', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  navigation: {
    nextEl: '.lnb .btn__prev',
    prevEl: '.lnb .btn__next',
  },
});

btnTxt.forEach( item=>{
  item.addEventListener('click',function(){
    for(let i=0;i<btnTxt.length;i+=1){
      btnTxt[i].classList.remove('is_act');
    }
    if (!item.classList.contains('is_act')){
      item.classList.add('is_act');
    }
  });
});
