const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
 });

  $(document).ready(function() {
   $('.burger').click(function(event) {
     $('.burger,.nav__list').toggleClass('active')
   })
 })
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

     document.querySelectorAll('.tab__content').forEach(function(tabContent) {
       tabContent.classList.remove('tab__content-active')
     })
     document.querySelector(`[data-target="${path}"]`).classList.add('tab__content-active')
  })
 })
});

$(document).ready(function() {

  $("#ui-id-1").tabindex(function(){alert("Первый вопрос!");});
})
