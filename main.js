let arrow = document.getElementById('arrow-down')

arrow.addEventListener('click', ()=> {fullpage_api.moveSectionDown()});


$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

  var myFullpage = new fullpage('#fullpage');
