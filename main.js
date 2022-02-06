// DOM Document Object Model
//Abre e fecha o menu ao clicar no icone
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

//Quando clicar em um item do menu, esconde-lo
const links = document.querySelectorAll('div ul li a')
for(link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}


const header = document.querySelector("#header")
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {

  if(window.scrollY >= navHeight) {
    //scroll maior que a altura do header
    header.classList.add('scroll')
  } else {
    //scroll menor que a altura do header
    header.classList.remove('scroll')
  }
}

//Swiper API: Adiciona funções de slides na página
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: 2
    }
  }
})

//Scroll Reveal API: Adiciona elementos quando fizer scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 1000,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .text, #about .image,
  #services header, #services .card,
  #testimonials header, #testimonials .swiper,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `, {interval: 100})


const backButton = document.querySelector('.back-to-top')
function backToTop() {

  if (window.scrollY >= 780) {
    backButton.classList.add('show')
  }else {
    backButton.classList.remove('show')
  }
}

// Menu ativo conforme a seção visivel na página
// Procura no documento seções com id (#)
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  // Verifica em que seção está "visivel" para o usuario
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4 

  for (const section of sections) {
    const sectionTop = section.offsetTop // Verifica o topo da seção
    const sectionHeight = section.offsetHeight // Verifica a altura da seção
    const sectionId = section.getAttribute('id') // Pega o id da seção

    const checkpointStart = checkpoint > sectionTop
    const checkpointEnd = checkpoint < sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active')
    } else {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function() {
  changeHeaderWhenScroll() //Adicionar sombra no header da pagina no scroll
  backToTop() //botão para voltar ao topo
  activateMenuAtCurrentSection()
})
