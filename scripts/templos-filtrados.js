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

const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005-07-08",
    area: 11500,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888-21-05",
    area: 74792,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015-07-06",
    area: 96630,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020-02-05",
    area: 6861,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974-19-11",
    area: 156558,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986-10-01",
    area: 9600,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983-02-12",
    area: 116642,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manaus, Brasil",
    localizacao: "Manaus, Brasil",
    consagracao: "2010-10-06",
    area: 32032,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/138-Manaus-Brazil-Temple.jpg"
  },
  {
    nomeDoTemplo: "Brasília, Brasil",
    localizacao: "Brasília, Brasil",
    consagracao: "2023-17-09",
    area: 25000,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
  },
  {
    nomeDoTemplo: "Belo Horizonte, Brasil",
    localizacao: "Belo Horizonte, Brasil",
    consagracao: "2026-16-08",
    area: 28686,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/belo-horizonte-brazil-temple/belo-horizonte-brazil-temple-71963-main.jpg"
  },
  {
    nomeDoTemplo: "Okinawa, Japão",
    localizacao: "Okinawa, Japão",
    consagracao: "2023-12-11",
    area: 12437,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/okinawa-japan-temple/okinawa-japan-temple-40845-main.jpg"
  },
  {
    nomeDoTemplo: "Montanha Oquirrh, Utah",
    localizacao: "Utah, Estados Unidos",
    consagracao: "2009-21-08",
    area: 60000,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/oquirrh-mountain-utah-temple/oquirrh-mountain-utah-temple-39513-main.jpg"
  }
  // Adicione mais objetos de templos aqui...
];

//selecionando elementos DOM
const container = document.querySelector(".container");
const linksNavegacao = document.querySelectorAll(".navigation a")
const botaoMenu = document.querySelector("#menu")
const listaNavegacao = document.querySelector(".navigation")

function exibirTemplos(listaDeTemplos) {
  container.innerHTML = "";

  listaDeTemplos.forEach((templo) => {
    const cartao = document.createElement("section");
    cartao.classList.add("temple-card");

    const nome = document.createElement("h3");
    nome.textContent = templo.nomeDoTemplo;

    const local = document.createElement("p");
    local.innerHTML = `<span class="label">Localização:</span> ${templo.localizacao}`;

    const data = document.createElement("p");
    data.innerHTML = `<span class="label">Consagração:</span> ${templo.consagracao}`;

    const areaEmMetros = Math.round(templo.area * 0.092903);
    const tamanho = document.createElement("p");
    tamanho.innerHTML = `<span class="label">Área:</span> ${areaEmMetros.toLocaleString("pt-BR")} m²`;

    const imagem = document.createElement("img");
    imagem.src = templo.urlDaImagem;
    imagem.alt = templo.nomeDoTemplo;
    imagem.loading = "lazy";

    cartao.append(nome, local, data, tamanho, imagem);
    container.appendChild(cartao);
  });
}

linksNavegacao.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const textoFiltro = link.textContent.trim().toLowerCase();

    if (textoFiltro === "página inicial") {
      exibirTemplos(templos);
    } else if (textoFiltro === "antigo") {
      const antigos = templos.filter((templo) => parseInt(templo.consagracao.slice(0, 4), 10) < 1900);
      exibirTemplos(antigos);
    } else if (textoFiltro === "novo") {
      const novos = templos.filter((templo) => parseInt(templo.consagracao.slice(0, 4), 10) > 2000);
      exibirTemplos(novos);
    } else if (textoFiltro === "pequeno") {
      const pequenos = templos.filter((templo) => templo.area < 10000);
      exibirTemplos(pequenos);
    } else if (textoFiltro === "grande") {
      const grandes = templos.filter((templo) => templo.area > 90000);
      exibirTemplos(grandes);
    }

    navigation.classList.remove("open");
    menuButton.textContent = "☰";
  });
});

exibirTemplos(templos);