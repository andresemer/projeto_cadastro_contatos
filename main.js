const form = document.getElementById('form-cadastro');
const nomes = [];
const numero = [];

let linhas = ''; 
form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    calculaMediaFinal();
});

function adicionaLinha() {
    const inputNomeCadastro = document.getElementById('nome-cadastro');
    const inputTelefoneCadastro = document.getElementById('telefone-cadastro'); 

    nomes.push(inputNomeCadastro.value);
    numero.push(inputTelefoneCadastro.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeCadastro.value}</td>`;
    linha += `<td>${inputTelefoneCadastro.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeCadastro.value = '';
    inputTelefoneCadastro.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

function calculaMediaFinal() {
    let somaDasNotas = 0;
    for (let i = 0; i < numero.length; i++){
        somaDasNotas += notas[i];
    };
    
    return somaDasNotas/numero.length;
};