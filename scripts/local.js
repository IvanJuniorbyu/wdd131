// 1. Obter o ano atual para o span com o id 'currentyear'
const currentYearSpan = document.querySelector("#currentyear");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

// 2. Obter a data e hora da última modificação do documento para o parágrafo com o id 'lastModified'
const lastModifiedParagraph = document.querySelector("#lastModified");

// O documento possui a propriedade nativa document.lastModified
// Você pode formatá-la ou exibi-la diretamente
lastModifiedParagraph.textContent = `Última modificação: ${document.lastModified}`;


// 1. Função que calcula o windchill em Celsius
function calculateWindChill(temp, windSpeed) {
    const calc = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    return calc.toFixed(1); // Arredonda para 1 casa decimal
}

// 2. Valores estáticos de teste (ou obtidos dos elementos da sua página)
// Dica: No futuro, você pode ler esses valores diretamente dos elementos HTML .valor da sua seção de clima
const temperaturaCelsius = 8; // Exemplo: 8°C
const velocidadeVento = 15;   // Exemplo: 15 km/h

// 3. Elemento HTML onde o resultado será exibido
const windchillElement = document.querySelector("#windchill");

// 4. Verificação das condições exigidas pelo projeto (Temperatura <= 10°C e Vento > 4.8 km/h)
if (temperaturaCelsius <= 10 && velocidadeVento > 4.8) {
    const resultado = calculateWindChill(temperaturaCelsius, velocidadeVento);
    windchillElement.textContent = `${resultado} °C`;
} else {
    windchillElement.textContent = "N/A";
}