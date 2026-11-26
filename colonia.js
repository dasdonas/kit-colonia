// FICHA DA COLÓNIA: Colónia das Donas
// Só precisas de editar este ficheiro. Mantém as aspas e as vírgulas como estão.
// Linhas com "ATUALIZAR" precisam de confirmação antes de publicar.
window.COLONIA = {
  colonia: {
    nome: "Colónia das Donas",
    frase: "Dez gatos à porta e uma Dona Tina que não resiste.",
    apresentacao: "Na Rua das Donas, ao pé dos Arcos, no Monte de Santa Clara, em Vila do Conde, a Dona Tina alimenta, trata e adora uma colónia de gatos. Cada compra enche-lhes o prato."
  },

  historia: {
    titulo: "Tudo começou com um pires.",
    paragrafos_antes: [
      "Um dia, por pena de uns gatinhos, a Dona Tina deixou um pires de comida à porta. As gatas prenhes tomaram nota.",
      "Quando deu por isso, havia gatinhos nos vasos, nos potes, em todo o lado. Pediu ajuda a uma associação e pôs mãos à obra: castrar os adultos, cuidar das crias, encontrar-lhes casa. E continuou a pôr o pires."
    ],
    paragrafos_depois: [
      "Hoje, todas as manhãs, a porta abre-se e entram todos, porque sabem que ela não resiste. Quando a Dona Tina sai, vão atrás, até à praça e rua abaixo, em procissão.",
      "Tem 87 anos e a energia de quem tem muito menos. Não come carne, vê novelas, faz sopas de letras, não perde o Max, o cão polícia, e passeia com a Lara, a vizinha da frente, 40 anos mais nova e a sua melhor amiga."
    ]
  },

  lenda: {
    titulo: "Reza a lenda cá do monte",
    imagem: "imagens/lenda.jpeg",
    descricao_imagem: "Numa manhã de nevoeiro, os gatos descem dos Arcos em procissão e chegam à porta da Dona Tina, que os espera com um pires.",
    paragrafos: [
      "Numa manhã de nevoeiro, os gatos desceram dos Arcos em procissão, passaram pelo Mosteiro de Santa Clara e escolheram uma porta. Dizem que foi destino. A Dona Tina diz que foi o pires."
    ],
    frase: "“Estes gatos fazem cada uma.”"
  },

  animais: {
    titulo: "Os dez da Rua das Donas.",
    progresso_texto: "já esterilizados.", // ATUALIZAR: confirmar quantos estão castrados
    // castrado: true = já foi, false = falta, omitir = não se aplica
    lista: [
      { nome: "O Preto",          estado: "castrado",     castrado: true,  cor: "#2B2F3A" },
      { nome: "A Preta",          estado: "castrada",     castrado: true,  cor: "#3A3340" },
      { nome: "A Tartaruga",      estado: "castrada",     castrado: true,  cor: "#C9772E", cor2: "#2B2F3A" },
      { nome: "O Azul",           estado: "castrado",     castrado: true,  cor: "#7D90AB" },
      { nome: "O Preto e Branco", estado: "por castrar",  castrado: false, cor: "#F2F2F6", cor2: "#2B2F3A" },
      { nome: "A Branca",         estado: "castrada",     castrado: true,  cor: "#F2F2F6" },
      { nome: "Pedres Grande",    estado: "por castrar",  castrado: false, cor: "#9A9484" },
      { nome: "Pedres Pequena",   estado: "castrada",     castrado: true,  cor: "#B4AE9E" },
      { nome: "O Choroso",        estado: "por castrar",  castrado: false, cor: "#A98B6A" },
      { nome: "O Gadelhudo",      estado: "castrado",     castrado: true,  cor: "#8E8573" }
    ],
    nota: "Os desenhos são de exemplo. Os retratos verdadeiros chegam em breve.",
    extra: "Lá dentro, em casa da Dona Tina, moram ainda a Tigre e a Bela, duas crias. A Tigre fica. A Bela vai para a família da Lara, assim que estiver mais sossegada. Do outro lado da rua vivem o Jonny e o Perigo, os dois gatos amarelos que a Lara trouxe de Los Angeles, a prova de que também há gatos que se portam bem."
  },

  // Formas de apoio. tipo: "loja" | "mensal" | "doacao" | "bens" | "evento"
  // Sem "link", o botão aparece como "Em breve". Só se aceitam links que comecem por https://
  apoios: {
    titulo: "Quatro formas de ajudar.",
    intro: "Escolhe a que te der mais jeito. O dinheiro vai para a ração e as vacinas.",
    lista: [
      { tipo: "loja",   titulo: "Chapéus de croché para gatos", descricao: "Feitos à mão, um a um. Cada peça conta que gato a inspirou.", preco: "Preço a definir", imagem_em_falta: "Foto do chapéu em breve" },
      { tipo: "mensal", titulo: "Apadrinha um gato", descricao: "Escolhe um gato da colónia e ajuda a pagar a comida e as vacinas dele, todos os meses.", preco: "Valor a definir" },
      { tipo: "doacao", titulo: "O pires do mês", descricao: "Paga a comida de toda a colónia durante um mês, de uma só vez." },
      { tipo: "bens",   titulo: "Lista de compras", descricao: "Prefere dar em vez de pagar? Estas coisas fazem sempre falta.", itens: ["Ração seca e húmida", "Areia", "Antiparasitários"] }
    ]
  },

  contas: {
    titulo: "Cada euro à vista.",
    vazio: "A loja ainda não abriu. Quando abrir, cada venda e cada despesa (ração, vacinas, veterinário) aparece aqui.",
    linhas: [] // exemplo: { quando: "Dezembro", descricao: "3 sacos de ração", valor: "-45 €" }
  },

  parceiros: {
    // ATUALIZAR: preencher quando houver uma associação que receba os donativos e passe recibo
    associacao: { nome: "", nota: "que passa recibo", link: "" },
    apoio_publico: {
      texto: "As castrações foram pagas pela Câmara Municipal de Vila do Conde. Obrigada à veterinária municipal, que ajuda a manter a colónia em ordem. Os gatos, em troca, mantêm os ratos.",
      falta: "A Câmara castra, mas não dá comida. É aí que entras tu."
    }
  },

  campanha: {
    titulo: "Vila do Conde precisa de um gatil.",
    texto: "A vila tem canil, mas não tem gatil. Os gatos que guardam a cidade dos ratos não têm onde ser tratados nem esperar por uma família.",
    link: "" // ATUALIZAR: link da petição
  },

  imagens: { logo: "imagens/logo.svg" },
  kit: { link: "" }
};
