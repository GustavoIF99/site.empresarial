function mudarDescricao() {
  const novaDescricao = prompt("Digite uma nova descrição:");
  if (novaDescricao) {
    document.getElementById("descricao").textContent = novaDescricao;
  }
}