// Obtém o ano atual dinamicamente e insere no span com ID "anoatual"
const anoAtualSpan = document.getElementById("anoatual");
const anoAtual = new Date().getFullYear();
anoAtualSpan.textContent = anoAtual;

// Obtém a data da última modificação do documento e insere no parágrafo com ID "ultimaModificacao"
const ultimaModificacaoP = document.getElementById("ultimaModificacao");
ultimaModificacaoP.textContent = `Última modificação: ${document.lastModified}`;