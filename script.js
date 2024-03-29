const linksInternos = document.querySelectorAll('a[href^="#"]')
function scrollSuave(){
linksInternos.forEach(item =>
  {
    item.addEventListener('click', (e)=>
   {  e.preventDefault()
        const href = e.target.getAttribute('href')
        const buscarId = document.querySelector(href)
          window.scroll({
            top:buscarId.offsetTop,
            behavior: "smooth",
          })
  } ) })
}
scrollSuave()

const secoes = document.querySelectorAll('.js-animacao')
secoes[0].classList.add('ativo')
function animarItens(){
secoes.forEach((item) =>
{ const metadeTela = window.innerWidth * 0.5
  const topItem = item.getBoundingClientRect().top - metadeTela;
  if(topItem < 0 )
  item.classList.add('ativo')
})
}
  window.addEventListener('scroll', animarItens)


  const menuMobile = document.querySelector('.menu-mobile')
  const navHeader = document.querySelector('.flex-lista')
  const events = ['click','touchstart']
  function mobile(){
  const navHeaderItem = document.querySelectorAll('.flex-lista li')
  function ativarMenuMobile(event){
    if(event.type==='touchstart')
    event.preventDefault()

    menuMobile.classList.toggle('ativo')
    navHeader.classList.toggle('ativo')
    outsideClick(this)
  }

  events.forEach(event=>{
    menuMobile.addEventListener(event, ativarMenuMobile)
  })
  
}
mobile()

function outsideClick(element){
  const html = document.documentElement
  html.addEventListener('click', handleOutsideClick)
    function handleOutsideClick(e){
      if(!e.target.contains(element) && !e.target.contains(navHeader)){
        menuMobile.classList.remove('ativo')
        navHeader.classList.remove('ativo')
        html.removeEventListener('click', handleOutsideClick)
      }
      }

  
}
