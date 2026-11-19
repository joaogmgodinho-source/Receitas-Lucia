const bancoDeReceitas = {
  "lasanha-bolonhesa": {
    titulo: "Lasanha à Bolonhesa",
    imagem: "img/lasanha.png",
    aluno: "João Silva",
    turma: "3º Ano B",
    ingredientes: "500g de massa de lasanha, 500g de carne moída, 2 sachês de molho de tomate, 300g de queijo mussarela...",
    modoPreparo: "Refogue a carne moída com temperos e adicione o molho. Em uma travessa, intercale camadas de molho, massa e queijo. Leve ao forno por 30 minutos."
  },
  "bolo-cenoura": {
    titulo: "Bolo de cenoura",
    imagem: "img/bolo-de-cenoura.png",
    aluno: "Maria Souza",
    turma: "2º Ano A",
    ingredientes: "3 cenouras médias, 4 ovos, 1 xícara de óleo, 2 xícaras de açúcar, 2 e 1/2 xícaras de farinha de trigo...",
    modoPreparo: "Bata as cenouras, os ovos e o óleo no liquidificador. Misture com os ingredientes secos e asse por 40 minutos a 180°C."
  },
  "sopa-feijao": {
    titulo: "Sopa De Feijão",
    imagem: "img/sopa-feijao.png",
    aluno: "Leandro Carvalho",
    turma: "3º Ano B",
    ingredientes: "3 xícaras de água, 1 batata, 2 tomates picados, sal e pimenta, 3 xícaras de feijão",
    modoPreparo: "Bater o feijão, a água e o tomate no liquidificador. Colocar o feijão batido e a batata em uma panela e cozinhar, até amaciar a batata. Se ficar muito grosso, acrescentar mais água. Provar e acertar o sal, se necessário."
  },
  "cafe-cremoso": {
    titulo: "Café Cremoso",
    imagem: "img/cafe-cremoso.png",
    aluno: "Ceasar Cohen",
    turma: "3º Ano B",
    ingredientes: "1 xícara de água, 2 xícaras de açúcar, 50g de café solúvel",
    modoPreparo: "Junte todos os ingredientes e bata na batedeira durante 15 minutos até ficar um creme. Guarde no congelador e sirva misturado com leite ou café quente."
  },
  "brigadeiro-banana": {
    titulo: "Brigadeiro de Casca de Banana",
    imagem: "img/brigadeiro-banana.png",
    aluno: "Ana Clara",
    turma: "1º Ano C",
    ingredientes: "Cascas de 4 bananas higienizadas, 1 lata de leite condensado, 1 colher de sopa de manteiga, chocolate granulado",
    modoPreparo: "Bata as cascas de banana no liquidificador com um pouco de água até triturar. Em uma panela, junte com o leite condensado e a manteiga, mexendo até soltar do fundo da panela."
  },
  "cha-maca": {
    titulo: "Chá de Casca de Maçã",
    imagem: "img/cha- maca.png",
    aluno: "Beatriz Lima",
    turma: "2º Ano B",
    ingredientes: "Cascas de 3 maçãs, 1 litro de água, canela em pau a gosto, açúcar ou adoçante",
    modoPreparo: "Ferva as cascas de maçã junto com a canela na água por cerca de 10 minutos. Coe, adoce a gosto e sirva quente ou gelado."
  },
  "farofa-legumes": {
    titulo: "Farofa de Casca de Legumes",
    imagem: "img/farofa-legumes.png",
    aluno: "Lucas Gabriel",
    turma: "3º Ano A",
    ingredientes: "Cascas picadas de cenoura e batata, 2 xícaras de farinha de mandioca, alho, cebola, azeite e sal a gosto",
    modoPreparo: "Refogue as cascas bem picadinhas no azeite com alho e cebola até dourarem. Acrescente a farinha de mandioca aos poucos, mexendo bem até tostar levemente."
  },
  "bolo-laranja": {
    titulo: "Bolo de Casca de Laranja",
    imagem: "img/bolo-laranja.png",
    aluno: "Mariana Dias",
    turma: "2º Ano C",
    ingredientes: "Casca de 1 laranja bem lavada (sem a parte branca), 3 ovos, 1 xícara de óleo, 2 xícaras de açúcar, 2 xícaras de farinha de trigo, 1 colher de fermento",
    modoPreparo: "Bata no liquidificador a casca da laranja picada, os ovos e o óleo. Despeje em uma tigela, misture o açúcar, a farinha e por fim o fermento. Asse em forno médio por 40 minutos."
  },
  "suco-detox": {
    titulo: "Suco Detox de Couve e Limão",
    imagem: "img/suco-detox.png",
    aluno: "Matheus Henrique",
    turma: "1º Ano A",
    ingredientes: "2 folhas de couve, suco de 1 limão, 500ml de água gelada, gengibre ralado a gosto, adoçante",
    modoPreparo: "Bata todos os ingredientes no liquidificador. Coe se preferir e sirva imediatamente bem gelado."
  },
  "caldo-verde": {
    titulo: "Caldo Verde Sustentável",
    imagem: "img/caldo-verde.png",
    aluno: "Camila Ribeiro",
    turma: "3º Ano C",
    ingredientes: "4 batatas grandes cozidas e amassadas, talos de couve picados finamente, 200g de linguiça calabresa fatiada, alho, cebola, azeite e sal",
    modoPreparo: "Refogue o alho e a cebola, adicione o purê de batatas com água para dar o caldo. Acrescente a calabresa e deixe ferver. Por fim, adicione os talos de couve picados e cozinhe por mais 3 minutos."
  },
  "geleia-melancia": {
    titulo: "Geleia de Casca de Melancia",
    imagem: "img/geleia-melancia.png",
    aluno: "Juliana Mendes",
    turma: "1º Ano B",
    ingredientes: "Parte branca da casca de melancia ralada, açúcar cristal, cravos da índia e suco de limão",
    modoPreparo: "Cozinhe a parte branca ralada da melancia com o açúcar, o limão e os cravos em fogo baixo até ponto de geleia."
  },
  "chips-batata": {
    titulo: "Chips de Casca de Batata",
    imagem: "img/chips-batata.png",
    aluno: "Rafael Costa",
    turma: "2º Ano A",
    ingredientes: "Cascas de batatas bem lavadas, azeite, sal, páprica e orégano a gosto",
    modoPreparo: "Tempere as cascas com azeite e especiarias. Leve ao forno ou airfryer a 200°C por cerca de 15 minutos até ficarem crocantes."
  }
};

// 2. Preenche a página da receita (só roda se estiver em receita.html)
const tituloEl = document.getElementById("titulo");

if (tituloEl) {
  const parametros = new URLSearchParams(window.location.search);
  const nomeReceitaUrl = parametros.get("receita");
  const receitaAtual = bancoDeReceitas[nomeReceitaUrl];

  if (receitaAtual) {
    tituloEl.textContent = receitaAtual.titulo;
    document.getElementById("receita-img").src = receitaAtual.imagem;
    document.getElementById("aluno").textContent = receitaAtual.aluno;
    document.getElementById("turma").textContent = receitaAtual.turma;
    document.getElementById("Ingredientes").textContent = receitaAtual.ingredientes;
    document.getElementById("modo-preparo").textContent = receitaAtual.modoPreparo;
  } else {
    tituloEl.textContent = "Receita não encontrada!";
  }
}

// ==========================================
// 3. PESQUISA E FILTRO POR CATEGORIA
// ==========================================

// Seleciona os botões de categoria
const botoesCategoria = document.querySelectorAll(".cartao-categoria");

// Seleciona todos os cards de receitas
const cardsReceitas = document.querySelectorAll(".recipe-card");

// Seleciona o campo de pesquisa
const campoPesquisa = document.getElementById("campoPesquisa");

// Guarda a categoria selecionada
let categoriaSelecionada = null;

// Seleciona a área onde ficam os cards
const areaReceitas = document.querySelector(".cards-receitas");

// ==========================================
// 4. MENSAGEM DE NENHUM RESULTADO
// ==========================================

// Verifica se a mensagem já existe
let mensagemSemResultado = document.getElementById("semResultado");

// Se não existir, cria a mensagem
if (areaReceitas && !mensagemSemResultado) {

    mensagemSemResultado = document.createElement("p");

    mensagemSemResultado.id = "semResultado";
    mensagemSemResultado.textContent = "Nenhuma receita encontrada.";

    mensagemSemResultado.style.display = "none";
    mensagemSemResultado.style.textAlign = "center";
    mensagemSemResultado.style.width = "100%";

    // Adiciona a mensagem na área das receitas
    areaReceitas.appendChild(mensagemSemResultado);
}

// ==========================================
// 5. NORMALIZAR TEXTO
// ==========================================

// Deixa tudo minúsculo e remove os acentos
// Exemplo: "Café" vira "cafe"
function normalizarTexto(texto) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

}

// ==========================================
// 6. FUNÇÃO DE PESQUISA
// ==========================================

function pesquisar() {

    // Pega o texto digitado
    const texto = normalizarTexto(campoPesquisa.value.trim());

    // Divide a pesquisa em palavras separadas
    const palavrasPesquisadas = texto
        .split(/\s+/)
        .filter(Boolean);

    // Contador de receitas encontradas
    let quantidadeEncontrada = 0;

    // Percorre todos os cards
    cardsReceitas.forEach(card => {

        // Pega SOMENTE o título da receita
        const titulo = card.querySelector(".recipe-title");

        // Normaliza o título
        const tituloNormalizado = titulo
            ? normalizarTexto(titulo.innerText)
            : "";

        // Divide o título em palavras completas
        const palavrasDoTitulo = tituloNormalizado.split(/\s+/);

        // Verifica se todas as palavras pesquisadas
        // existem separadamente no título
        const encontrouTexto = palavrasPesquisadas.every(palavra =>
            palavrasDoTitulo.includes(palavra)
        );

        // Verifica se pertence à categoria selecionada
        const encontrouCategoria =
            categoriaSelecionada === null ||
            card.dataset.categoria === categoriaSelecionada;

        // Se encontrar o texto e a categoria, mostra o card
        if (encontrouTexto && encontrouCategoria) {

            card.style.display = "flex";

            quantidadeEncontrada++;

        } else {

            // Caso contrário, esconde o card
            card.style.display = "none";

        }

    });

    // Mostra mensagem se não encontrar nenhuma receita
    if (mensagemSemResultado) {

        mensagemSemResultado.style.display =
            quantidadeEncontrada === 0 ? "block" : "none";

    }

}

// ==========================================
// 7. PESQUISA ENQUANTO DIGITA
// ==========================================

if (campoPesquisa) {

    // Pesquisa automaticamente enquanto digita
    campoPesquisa.addEventListener("input", pesquisar);

    // Permite pesquisar apertando ENTER
    campoPesquisa.addEventListener("keydown", function(evento) {

        if (evento.key === "Enter") {

            pesquisar();

        }

    });

}

// ==========================================
// 8. FILTRO DOS BOTÕES DE CATEGORIA
// ==========================================

botoesCategoria.forEach(botao => {

    botao.addEventListener("click", () => {

        // Pega a categoria do botão clicado
        const categoria = botao.dataset.categoria;

        // Verifica se já está selecionado
        const jaEstaAtivo = botao.classList.contains("ativo");

        // Remove o destaque de todos os botões
        botoesCategoria.forEach(b => {

            b.classList.remove("ativo");

        });

        // Se clicar novamente na mesma categoria,
        // remove o filtro
        if (jaEstaAtivo) {

            categoriaSelecionada = null;

        } else {

            // Seleciona a nova categoria
            categoriaSelecionada = categoria;

            // Destaca o botão selecionado
            botao.classList.add("ativo");

        }

        // Atualiza a pesquisa junto com a categoria
        pesquisar();

    });

});
