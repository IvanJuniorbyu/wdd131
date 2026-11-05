const menuButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  menuButton.textContent = menuButton.textContent === '☰' ? 'X' : '☰';
});


const anoAtualSpan = document.getElementById("anoatual");
const anoAtual = new Date().getFullYear();
anoAtualSpan.textContent = anoAtual;
const ultimaModificacaoP = document.getElementById("ultimaModificacao");
ultimaModificacaoP.textContent = `Última modificação: ${document.lastModified}`;