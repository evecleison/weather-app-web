"user strict"

const apiKey = "YOUR_API_KEY"; // Substitua pela sua chave da OpenWeatherMap

// Função assíncrona que espera a resposta da API para exibir os dados metereológicos
async function getWeather() {
    const city = document.getElementById("city-input").value; // Nome da cidade

    // Requisita os dados metereológicos da cidade - última atualização
    const currentRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`);
    const currentData = await currentRes.json();

    // Requisita os dados da previsão do tempo
    const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`);
    const forecastData = await forecastRes.json();

    // Execução das funções definidas neste código-fonte
    displayCurrentWeather(currentData);
    displayForecast(forecastData);
    drawCharts(forecastData);
}

// Adicionando o evento de clique ao botão de pesquisa
document.getElementById("search-button").addEventListener("click", getWeather);

// Função que exibe os dados metereológicos no horário local - última atualização
function displayCurrentWeather(data) {
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`; // Ícone do tempo

    // Cria uma data ajustada para o horário local
    const localTime = new Date((data.dt + data.timezone) * 1000);

    // Data e horário no formato brasileiro
    const brDate = localTime.toLocaleDateString("pt-BR", {weekday: "long", day: "2-digit", month: "2-digit", year: "numeric"});
    const brTime = localTime.toLocaleTimeString("pt-BR", {hour: "2-digit", minute: "2-digit"});

    // Adiciona o conteúdo HTML interno da div que exibe os dados metereológicos na hora local
    document.getElementById("current-weather").innerHTML = `
        <h3>${data.name}</h3>
        <p><strong>${brDate} - ${brTime} (horário local - última atualização)</strong></p>
        <p><img class="icon" src="${icon}" alt="Ícone metereológico">${data.weather[0].description}</p>
        <p>Temperatura: ${data.main.temp}°C</p>
        <p>Umidade: ${data.main.humidity}%</p>
        <p>Pressão: ${data.main.pressure} hPa</p>
        <p>Vento: ${data.wind.speed} m/s</p>
    `;
}

// Função que exibe a previsão do tempo para 5 dias
function displayForecast(data) {
    const days = {};
    let aux = " ";
    
    // Adiciona o subtítulo h3 à div que exibe a previsão do tempo
    const forecast = document.getElementById("forecast");
    forecast.innerHTML = "<h3>Previsão do tempo para 5 dias</h3>";

    // Adiciona uma previsão para cada um dos 5 dias na variável "days"
    data.list.forEach(item => {
        const date = item.dt_txt.split(" ")[0];

        if (aux === " ") {
          aux = date;
        }

        if (aux != date && !days[date] && Object.keys(days).length < 5) {
            days[date] = item;
        }
    });

    // Para a previsão do tempo de cada dia, cria-se uma div informando os dados metereológicos
    Object.keys(days).forEach(date => {
      const item = days[date];
      const icon = `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`; // Ícone do tempo

      // Data no formato brasileiro
      const brDate = new Date(date).toLocaleDateString('pt-BR', {weekday: 'long', day: '2-digit', month: '2-digit' });

      // Adiciona uma div contendo a previsão do tempo para o dia correspondente
      forecast.innerHTML += `
        <div class="forecast-item">
          <p><strong>${brDate}</strong></p>
          <p><img class="icon" src="${icon}" alt="Ícone metereológico"> ${item.weather[0].description}</p>
          <p>Temperatura: ${item.main.temp}°C</p>
          <p>Umidade: ${item.main.humidity}%</p>
        </div>
      `;
    });
}

// Função que cria os gráficos de temperatura e umidade
function drawCharts(data) {
  const temps = [];
  const humidities = [];
  const hours = [];

  let firstDate;
  let lastDate;
  let aux = 0;

  // Criando o elemento e o conteúdo do <h3>
  const subtitle = document.createElement("h3");
  subtitle.textContent = "Previsão da temperatura e da umidade";

  // Colocando o <h3> no topo da div
  const graphics = document.getElementById("graphics");
  if(graphics.querySelector("h3") == null){
    graphics.insertBefore(subtitle, graphics.firstChild);
  }  

  // Adquire os dados de temperatura e umidade a cada 3 horas em um período de 24 horas
  data.list.slice(1, 10).forEach(item => {
    const date = new Date(item.dt_txt);
    const label = `${date.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit' })}`;

    // Atribui a hora, temperatura e umidade
    hours.push(label);
    temps.push(item.main.temp);
    humidities.push(item.main.humidity);

    // Armazena a primeira data e a última data
    if (aux == 0) {
      firstDate = date.toLocaleDateString('pt-BR');
    } else if (aux == 8){
      lastDate = date.toLocaleDateString('pt-BR');
    }

    aux++;
  });

  // Criação do gráfico de temperatura no elemento <canvas> com id "temp-chart"
  const tempChart = new Chart(document.getElementById("temp-chart"), {
    type: "line",
    data: {
      labels: hours,
      datasets: [{
        label: `Temperatura (°C) - ${firstDate} à ${lastDate}`,
        data: temps,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true
      }]
    }
  });

  // Criação do gráfico de umidade no elemento <canvas> com id "humidity-chart"
  const humidityChart = new Chart(document.getElementById("humidity-chart"), {
    type: "line",
    data: {
      labels: hours,
      datasets: [{
        label: `Umidade (%) - ${firstDate} à ${lastDate}`,
        data: humidities,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true
      }]
    }
  });
}