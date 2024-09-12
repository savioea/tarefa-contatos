const form = document.getElementById('form-contatos');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('add-nome');
    const inputTelefone = document.getElementById('add-telefone');

    console.log(nomes)
    console.log(telefones)

    if (nomes.includes(inputNome.value)) {
        alert(`O nome "${inputNome.value}" já foi inserido.`)
    }
    else {
        if (telefones.includes(parseInt(inputTelefone.value))) {
            alert(`O número: ${inputTelefone.value} já foi inserido.`)
        }
        else {
            nomes.push(inputNome.value);
            telefones.push(parseInt(inputTelefone.value));

            let linha = '<tr>';
            linha += `<td>${inputNome.value}</td>`;
            linha += `<td>${inputTelefone.value}</td>`;
            linha += '<tr>';

            linhas += linha;
        }
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}