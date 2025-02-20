//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let grupoDeAmigos = []

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    //Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
    if (amigo.trim('') === '' ) {
        alert('Por favor, insira um nome');
        return;
    } 

    // Verifica se o nome já existe na lista de amigos.
    if (grupoDeAmigos.includes(amigo)) {
        alert("Este nome já foi adicionado. Por favor, insira um nome diferente.");
        return;
    }
    // Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
    grupoDeAmigos.push(amigo.trim());
    console.log(grupoDeAmigos);
    // to be created     atualizarLista(); // Chama a função responsável por atualizar a exibição da lista de amigos na página.
    limparCampo();

}

 // Limpa o campo de entrada após adicionar o nome.
function limparCampo() {
    amigo = document.getElementById('amigo');
    amigo.value = ''

}