// 1. Obter o ano atual para o span com o id 'currentyear'
const currentYearSpan = document.querySelector("#currentyear");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

// 2. Obter a data e hora da última modificação do documento para o parágrafo com o id 'lastModified'
const lastModifiedParagraph = document.querySelector("#lastModified");

// O documento possui a propriedade nativa document.lastModified
// Você pode formatá-la ou exibi-la diretamente
lastModifiedParagraph.textContent = `Última modificação: ${document.lastModified}`;




// 1. Captura os valores diretamente do HTML
const tempElement = document.querySelector("#temp");
const windElement = document.querySelector("#vento");

// 2. Converte o texto extraído para número usando parseFloat
const temperatura = parseFloat(tempElement.textContent);
const velocidadeVento = parseFloat(windElement.textContent);

// 3. Função de cálculo do Windchill (Celsius)
function calculateWindChill(temp, windSpeed) {
    const calc = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    return calc.toFixed(1); // Arredonda para 1 casa decimal
}

// 4. Seleciona o elemento onde o resultado será inserido
const windchillElement = document.querySelector("#windchill");

// 5. Aplica a condição exigida pelo projeto (Temp <= 10°C e Vento > 4.8 km/h)
if (temperatura <= 10 && velocidadeVento > 4.8) {
    const resultado = calculateWindChill(temperatura, velocidadeVento);
    windchillElement.textContent = `${resultado} °C`;
} else {
    windchillElement.textContent = "N/A";
}