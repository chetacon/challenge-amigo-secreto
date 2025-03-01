//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let grupoDeAmigos = [];
let sorteador = '';

function apresentar() {
    const titulo = document.getElementById('amigosTitle'); // Atualizado para o novo ID
    const inputSorteador = document.getElementById('sorteador');
    sorteador = inputSorteador.value;

    if (sorteador.trim() === '') {
        alert('Por favor, digite o nome do sorteador.');
        return;
    }

    document.getElementById('sorteadorSection').style.display = 'none';
    document.getElementById('amigosSection').style.display = 'block';

    titulo.textContent = `Agora digite o nome dos seus amigos, ${sorteador}!`;
}

function adicionarAmigo() {

    const titulo = document.querySelector('h2');
    const inputSorteador = document.getElementById('amigosSection');
    let amigo = document.getElementById('amigo').value;
    //Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
    if (amigo.trim('') === '' ) {
        alert('Por favor, insira um nome');
        return;
    } 

    // Verifica se o nome já existe na lista de amigos.
    if (grupoDeAmigos.includes(amigo.trim())) {
        alert("Este nome já foi adicionado. Por favor, insira um nome diferente.");
        return;
    }
    // Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
    grupoDeAmigos.push(amigo.trim());
    console.log(grupoDeAmigos);
    // to be created     atualizarLista(); // Chama a função responsável por atualizar a exibição da lista de amigos na página.
    atualizarListaDeAmigos()
    limparCampo();

}

 // Limpa o campo de entrada após adicionar o nome.
function limparCampo() {
    amigo = document.getElementById('amigo');
    amigo.value = ''

}

// Crie uma função que percorra o array amigos e adicione cada nome como um elemento <li> dentro de uma lista HTML. Use innerHTML para limpar a lista antes de adicionar novos elementos.
function atualizarListaDeAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos'); // criei uma lista para o proposito de atualizar o HTML
    listaAmigosElement.innerHTML = ''; // limpa o campo
    grupoDeAmigos.forEach(amigo => {  // função de callback pra usar o método forEach, pega cada item da lista e itera com as ações abaixo
        const li = document.createElement('li'); // cria um elemento no HTML para a lista ul <li>
        li.textContent = amigo; // preenche essa li com o texto de um dos nomes do grupoDeAmigos
        listaAmigosElement.appendChild(li); // atualiza o HTML com o elemento pronto.
    });

} 

function sortear() {
    if (grupoDeAmigos.length === 0) {
        alert('Por favor, adicione amigos à lista antes de sortear.');
        return;
    }
    let sorteado = grupoDeAmigos[Math.floor(Math.random() * grupoDeAmigos.length)];
    return sorteado;
}

// Função para exibir o resultado do sorteio
function exibirResultadoSorteio(sorteado) {
    limparCampo();
    const resultadoSorteioElement = document.getElementById('resultado');
    resultadoSorteioElement.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `Seu amigo secreto é: ${sorteado}`;
    resultadoSorteioElement.appendChild(li);
}

function sortearAmigo() {

    exibirResultadoSorteio(sortear()); 
    const listaAmigosElement = document.getElementById('listaAmigos'); // criei uma lista para o proposito de atualizar o HTML
    listaAmigosElement.innerHTML = ''; // limpa o campo
    lançarConfetti();
}


function lançarConfetti() {
    confetti({
        particleCount: 500, 
        spread: 160,        
        origin: { x: 0.5, y: 0.5 } 
    });
}

function resetar() {
    grupoDeAmigos = [];
    sorteador = '';
    atualizarListaDeAmigos();
    limparCampo();
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("sorteador").value = "";
    document.getElementById('sorteadorSection').style.display = 'block';
    document.getElementById('amigosSection').style.display = 'none';
    document.getElementById('amigosTitle').textContent = ''; // Limpa o texto do título
}