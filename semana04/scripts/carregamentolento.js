const currentYearSpan = document.querySelector("#anoatual");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

// 2. Obter a data e hora da última modificação do documento para o parágrafo com o id 'lastModified'
const lastModifiedParagraph = document.querySelector("#ultimaModificacao");

// O documento possui a propriedade nativa document.lastModified
// Você pode formatá-la ou exibi-la diretamente
lastModifiedParagraph.textContent = `Última modificação: ${document.lastModified}`;