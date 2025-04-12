# 🌤️ Weather Web App

📌 This project is written in **Portuguese**.  
For the English version, check the file [README-en.md](/README-en.md).

## Descrição do projeto

Aplicativo web desenvolvido com HTML, CSS e JavaScript que exibe o clima atual e a previsão do tempo para 5 dias em qualquer cidade do mundo, utilizando a API da OpenWeatherMap.

## :hammer: Funcionalidades

- **Consulta do tempo atual**: Pesquisa o tempo atual de uma cidade e exibe: data e horário local (considerando o fuso horário), estado do tempo, temperatura, umidade, pressão atmosférica e velocidade do vento.

- **Previsão do tempo para 5 dias**: Visualiza a previsão do tempo para 5 dias da cidade pesquisada, indicando estado do tempo, temperatura e umidade. A atualização dos dados é feita a cada 3 horas (limitado pela API gratuita).

- **Cria gráficos da temperatura e umidade**: Cria dois gráficos, uma para temperatura e outra para umidade, por meio da biblioteca Chart.js com dados extraídos a cada 3 horas em um período de 24 horas.

## 🎥 Demonstração

![Demonstração do App](/images/weather-web-app.gif)

## 🚀 Como executar o projeto

1. Clone este repositório:
    ```bash
    git clone https://github.com/evecleison/weather-web-app.git
    ```

2. Crie uma conta gratuita em [OpenWeatherMap](https://openweathermap.org) e obtenha sua chave de API.

3. Substitua `YOUR_API_KEY` pela sua chave da API, nesta linha de código do arquivo `main.js`:
    ```js
    const apiKey = 'YOUR_API_KEY';
    ```

4. Abra o arquivo `index.html` em seu navegador para utilizar o aplicativo. A aplicação é 100% frontend, sem dependências adicionais.

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- [OpenWeatherMap API](https://openweathermap.org)
- [Chart.js](https://www.chartjs.org) - biblioteca JavaScript

## 👨‍💻 Autor

- Evecleison Albuquerque do Nascimento

## 📄 Licença

Este projeto está licenciado sob a licença MIT.  
Veja o arquivo [LICENSE](https://github.com/evecleison/weather-web-app?tab=MIT-1-ov-file#MIT-1-ov-file)  para mais detalhes.

