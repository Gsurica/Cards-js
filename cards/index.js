console.log("Ola mundo!");

const cardStyles = () => {
    let cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.style.backgroundColor = "#E1EAD6";
    });
    let cardTitle = document.querySelectorAll('.titulo-card');
    cardTitle.forEach((title) => {
        title.style.fontWeight = "bold";
        title.style.letterSpacing = "4px";
        title.style.marginBottom = "8px";
        title.style.fontSize = "22px";
        title.innerText = "Meu Card";
    });
    let cardDesc = document.querySelectorAll('.descricao-card');
    cardDesc.forEach((desc) => {
        desc.style.fontWeight = "bold";
        desc.style.marginBottom = "10px";
        desc.style.marginTop = "40px";
        desc.innerText = "Descrição modificada pelo javascript";
    });
    let editButton = document.querySelectorAll('.botao-editar');
    editButton.forEach((edit) => {
        edit.style.backgroundColor = "#486781";
        edit.style.padding = "10px";
        edit.style.border = "none";
        edit.style.color = "white";
        edit.style.borderRadius = "8px";
        edit.style.letterSpacing = "2px";
        edit.style.textTransform = "lowercase";
        edit.style.marginTop = "40px";
    });
    let removeButton = document.querySelectorAll('.botao-apagar');
    removeButton.forEach((edit) => {
        edit.style.backgroundColor = "#282A4E";
        edit.style.padding = "10px";
        edit.style.border = "none";
        edit.style.color = "white";
        edit.style.borderRadius = "8px";
        edit.style.letterSpacing = "2px";
        edit.style.textTransform = "lowercase";
    });
};

cardStyles();

const editClick = () => {
    alert("Clicou em editar!");
};

const removeCard = () => {
    let question = confirm("Deseja realmente excluir o card?");
    question ? alert("Confirmado!") : alert("Cancelou!");
};

