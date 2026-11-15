// FICHA DA COLÓNIA (em branco)
// 1. Copia este ficheiro para a pasta principal e muda-lhe o nome para colonia.js
// 2. Substitui o que está entre aspas pela tua história. Mantém as aspas e as vírgulas.
// 3. Apaga as secções que não precisas (por exemplo "campanha" ou "lenda").
window.COLONIA = {
  colonia: {
    nome: "Colónia de ...",                 // O nome da marca. Pode ser o da rua ou do bairro.
    frase: "Uma frase curta e com graça.",  // Diz o que é a colónia numa linha.
    apresentacao: "Onde fica, quem cuida e para onde vai o dinheiro, numa ou duas frases."
  },

  historia: {
    titulo: "Como tudo começou.",
    paragrafos_antes: ["Primeiro parágrafo.", "Segundo parágrafo."],
    paragrafos_depois: ["Quem é o cuidador? O que o faz rir? O que os animais fazem todos os dias?"]
  },

  // Opcional: uma pequena lenda ou história mágica do sítio. Apaga se não quiseres.
  lenda: {
    titulo: "Reza a lenda",
    imagem: "",                // ex.: "imagens/lenda.svg"
    descricao_imagem: "",
    paragrafos: ["Uma história curta, mágica ou cómica, ligada ao sítio."],
    frase: "“Uma frase típica do cuidador.”"
  },

  animais: {
    titulo: "Quem vive aqui.",
    progresso_texto: "já esterilizados.",
    // castrado: true = já foi, false = falta. foto: "imagens/nome.jpg" (opcional)
    lista: [
      { nome: "Nome do animal", estado: "castrado", castrado: true, cor: "#2B2F3A" }
    ],
    nota: "",
    extra: ""
  },

  // tipo: "loja" | "mensal" | "doacao" | "bens" | "evento"
  // Sem "link", o botão aparece como "Em breve".
  apoios: {
    titulo: "Como ajudar.",
    intro: "",
    lista: [
      { tipo: "doacao", titulo: "Dar uma ajuda", descricao: "Para a comida e as vacinas.", link: "" }
    ]
  },

  contas: { titulo: "Cada euro à vista.", vazio: "Quando houver vendas e despesas, aparecem aqui.", linhas: [] },

  parceiros: {
    associacao: { nome: "", nota: "que passa recibo", link: "" },
    apoio_publico: { texto: "", falta: "" }   // Ex.: castrações pagas pela Câmara
  },

  campanha: { titulo: "", texto: "", link: "" },  // Opcional: petição ou campanha local

  imagens: { logo: "" },   // ex.: "imagens/logo.svg"
  kit: { link: "" }
};
