document.addEventListener("DOMContentLoaded", function () {
  // Recupere os dados do usuário armazenados no localStorage
  const listaUser = JSON.parse(localStorage.getItem("listaUser"));
  
  // Recupere o último usuário cadastrado
  const ultimoUsuario = listaUser[listaUser.length - 1];
  
  // Exiba os detalhes do usuário na página
  const nomeUsuarioElement = document.getElementById("nome-usuario");
  const nomeCompletoElement = document.getElementById("nome-completo");
  
  nomeUsuarioElement.textContent = ultimoUsuario.userCad;
  nomeCompletoElement.textContent = ultimoUsuario.nomeCad;
});


  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "/assets/html/login.html";
  }
  