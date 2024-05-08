function calcularTotal(ferramentas, comprar) {
  if (ferramentas.length == 0 || comprar.length == 0) {
    throw new Error("Ambas as listas precisam ter ao menos um item.");
  }

  let total = 0;
  let ferramentasEncontradas = "";
  let encontrouAlguma = false;

  for (let include = 0; include < ferramentas.length; include++) {
    let ferramenta = ferramentas[include];
    let encontrada = false;

    for (let include = 0; include < comprar.length; include++) {
      if (ferramenta.nome == comprar[include]) {
        encontrada = true;
        break;
      }
    }

    if (encontrada) {
      total = total + ferramenta.preco;

      if (encontrouAlguma) {
        ferramentasEncontradas += ", ";
      }

      ferramentasEncontradas += ferramenta.nome;
      encontrouAlguma = true;
    }
  }

  if (encontrouAlguma == false) {
    throw new Error("Nenhuma ferramenta desejada encontrada.");
  }
  return `O valor a pagar pelas ferramentas (${ferramentasEncontradas}) é R$ ${total.toFixed(
    2
  )}`;
}

module.exports = {
  calcularTotal,
};
