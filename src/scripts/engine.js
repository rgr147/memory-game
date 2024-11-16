// array responsável por armazenar os emojis que serão usados no jogo
const emojis = [
    "👨‍💻",
    "👨‍💻",
    "🤣",
    "🤣",
    "😍",
    "😍",
    "❤️",
    "❤️",
    "😶‍🌫️",
    "😶‍🌫️",
    "🦓",
    "🦓",
    "🦖",
    "🦖",
    "👩‍🚀",
    "👩‍🚀",
];
// array utilizado para guardar até 2 Cards(emojis) selecionados para comparação no jogo
let openCards = [];
// array com utilizando o sort() e função anônima para embaralhar os emojis para posicionar na página do jogo
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

let viewVictoris = 0;
let viewTry = 0;

// loop para desenhar os elementos no html com cada card de emojis
for(let i = 0;i < emojis.length; i++) {
    let box = document.createElement("div");/* cria uma variável para armazenar a criação da Tag div que será adicionada no html via javascript*/
    box.className = "item"; /*adiciona a classe item na Tag Div que foi armazenada na variável box */
    box.innerHTML = shuffleEmojis[i];/*adiciona o valor/emoji dentro da Tag div que foi armazenada na variável box */
    box.onclick = handleClick; /*adicionando ação de click na div de classe item. A ação chamará a afunção handleClick*/
    document.querySelector('.game').appendChild(box);/*insere a div com a configuração feita no elemento de classe .game do html */
}
// função chamada ao clicar em uma das cartinhas de emojis
function handleClick() {
    if(openCards.length < 2){
        //adiciona a classe boxOpen no elemento que disparou o evento de click
        this.classList.add("boxOpen");
        //guardando o elemento que recebeu o click no vetor openCards
        openCards.push(this);
    }
    //criando a condição que verifica se as 2 cartas escolhidas são iguais
    if(openCards.length == 2) {
        setTimeout(checkMatch,500); 
    }
    console.log(openCards)
}
function checkMatch() {
    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        openCards[0].classList.add("notVisible");
        openCards[1].classList.add("notVisible");
        countTry();
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
        countTry();
    }
    openCards = [];

    if(document.querySelectorAll('.boxMatch').length == emojis.length) {
        alert("Você venveu !");
     }
}
function countTry(){
    viewTry++;
    document.getElementById("try").innerText = `Tentativas: ${viewTry}`;
}