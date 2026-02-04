let count = 0; // Initialize count to 0

function displayCount() {
  document.getElementById('countDisplay').innerHTML = count; // Exibir a contagem no HTML
}

function checkCountValue() {
  if (count === 10) {
    alert("Seu post no Instagram ganhou 10 seguidores! Parabéns!");
  } else if (count === 20) {
    alert("Seu post no Instagram ganhou 20 seguidores! Continue assim!");
  }
}

function increaseCount() {
  count++; // Incrementa o count em 1
  displayCount(); // Exibe o count
  checkCountValue(); // Verifica o valor do count e exibe mensagens
}