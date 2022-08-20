// const toggleBtn = document.querySelector('.nav_logo_mo');
// const tit = document.querySelector('.nav_tit');
// const link = document.querySelector('.nav_link');

// toggleBtn.addEventListener('click', () => {
//     tit.classList.toggle('active');
//     link.classList.toggle('active');
// });


$('.nav_logo_mo').on('click',function(){
    $(this).parent().siblings().toggleClass('active');
});