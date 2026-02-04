const form = document.querySelector("form");

function formEnviado(resposta) {
  if (resposta.ok) {
    form.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7; '><span style= 'color: #317a00;'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24h.</p>";
  } else {
    form.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7; '><span style= 'color: #e00000';>Erro no envio</span>, você pode enviar diretamente para o nosso email em: contato@bikcraft.net</p>";
  }
}

function enviarForm(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(form);

  fetch("./enviar.php", {
    method: "post",
    body: data,
  }).then(formEnviado);
}

form.addEventListener("submit", enviarForm);
