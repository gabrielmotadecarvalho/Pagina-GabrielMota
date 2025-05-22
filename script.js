function mostrarContatos() {
    const contatos = document.getElementById('contatos');
    contatos.classList.toggle('mostrar');
}

function mostrarHobbie(hobbie) {
    const imagemDiv = document.getElementById('imagemHobbie');
    let imgSrc = '';

    if (hobbie === 'motocross') {
        imgSrc = 'imagem/Motocross.jpeg';
    } else if (hobbie === 'manutencao') {
        imgSrc = 'imagem/Manutencao.jpeg';
    } else if (hobbie === 'esporte') {
        imgSrc = 'imagem/Esporte.jpeg';
    }

    imagemDiv.innerHTML = `<img src="${imgSrc}" alt="${hobbie}">`;
}