// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar Itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Galeria de Bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

console.log(galeria, galeriaContainer);

function trocarImagem(event) {
  const img = event.currentTarget;

  const media = matchMedia("(min-width: 1000px)").matches;

  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
