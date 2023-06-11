document.addEventListener("DOMContentLoaded", function() {
  // Carregar opções de eventos no seletor de eventos
  const eventoSelect = document.getElementById("evento");
  // ... código para carregar os eventos disponíveis no seletor ...

  // Manipular o envio do formulário
  const ticketForm = document.getElementById("ticketForm");
  ticketForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar o envio do formulário por padrão

    // Obter os valores dos campos do formulário
    const evento = eventoSelect.value;
    const nome = document.getElementById("nome").value;
    const sexo = document.getElementById("sexo").value;
    const preco = document.getElementById("preco").value;
    const qrCode = generateQRCode(nome, evento, sexo, preco); // Gerar o código QR com base nos dados

    // Criar um objeto com os dados do ticket
    const ticketData = {
      evento: evento,
      nome: nome,
      sexo: sexo,
      preco: preco,
      qrCode: qrCode
    };

    // Armazenar os dados no Local Storage
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    tickets.push(ticketData);
    localStorage.setItem("tickets", JSON.stringify(tickets));

    // Redirecionar para outra página, exibir uma mensagem de sucesso, etc.
    window.location.href = "/asssets/html/index.htl";
  });
});

// Função para gerar um código QR com base nos dados fornecidos
function generateQRCode(nome, evento, sexo, preco) {
  const qrCodeData = `${nome},${evento},${sexo},${preco}`;

  const qrCode = new qrCode(document.getElementById("qrCode"), {
    text: qrCodeData,
    width: 128,
    height: 128,
  });

  // Retorne o código QR gerado como uma imagem base64
  return qrCode.toDataURL();
}


