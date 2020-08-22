
openMenu = () => {
    console.log('Menu Opened')
    document.getElementById('hamburger').classList.toggle('changed');
    document.getElementById('menu').classList.toggle('remove-menu');
    document.getElementById('menu-bg').classList.toggle('change-bg');
}

/*--------Glide.js for the Carosel --------*/

var before = document.querySelector('.glide')
var after = document.querySelector('.glide')
var input = document.querySelector('.glide')

var glide = new Glide('.glide', {
        type: 'carousel',
        focusAt: 'center',
        animationDuration: 1000,
        autoplay: 2500,
        hoverpause: false,
        perView: 3,
        peek: {
            before: 25,
            after:  25
        },
        startAt: 2,
      breakpoints: {
        860: {
          perView: 2
        },
        560: {
          perView: 1
        }
      }
})

input.addEventListener('input', function (event) {
  glide.update({
    autoplay: (event.target.value != 0) ? event.target.value : false
  })
})
glide.mount()