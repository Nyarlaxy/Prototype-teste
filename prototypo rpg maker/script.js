console.log('olá mundo!')

// Menu lateral
const img= document.querySelector("img.IconeMenu")
const MenuLateral= document.querySelector("nav.lateral")
var itemAtivo= "ativo"
var itemdesativado= "desativado"
function ativar(){
 MenuLateral.classList.toggle(itemAtivo)
 MenuLateral.classList.toggle(itemdesativado)

}
//////////////////////////////

/* Mudança de sections */

const linksInternos= document.querySelectorAll('.lateral a[href^="#"]');
const hrefs =[]
linksInternos.forEach((link) => {
  console.log(link.attributes[1].value)
  hrefs.push(link.attributes[1].value)
  
})
var sections = document.querySelectorAll("section")
sections.forEach((section) => {
  console.log(section.id)
})
function ativarAtalho(selecionado) {
  console.log(selecionado)
  var linkAtivado= hrefs[selecionado]
  console.log(linkAtivado)
  const sectionSelecionada = sections[selecionado]
  console.log(sectionSelecionada)

  sections.forEach((item) =>{
    item.classList.remove("ativado")
    item.classList.add("desativado")
    if (item == sectionSelecionada){
      item.classList.remove('desativado')
      item.classList.add('ativado')
    }
  })
}

///////////////////////////////////////////