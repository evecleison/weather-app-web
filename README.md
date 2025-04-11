# weather-web-app
Aplicativo web desenvolvido com HTML, CSS e JavaScript que exibe as condições climáticas de uma cidade e a previsão do tempo para 5 dias, utilizando a API externa da plataforma OpenWeatherMap.

## Descrição
Este é um aplicativo web responsivo que permite ao usuário visualizar informações meteorológicas de qualquer cidade. A atualização dos dados ocorre a cada 3 horas. Ele exibe:

- Clima atual com data e hora local
- Temperatura, umidade, pressão atmosférica e velocidade do vento
- Previsão para 5 dias
- Gráfico de temperatura
- Gráfico de umidade

Todo o conteúdo da página está em **português brasileiro**.

## Demonstração
![Demonstração do App](demo.gif)

## Como usar

1. Clone este repositório:
```bash
git clone https://github.com/evecleison/weather-web-app.git
```

2. Crie uma conta gratuita em [OpenWeatherMap](https://openweathermap.org/api) e obtenha sua chave de API.

3. Substitua `YOUR_API_KEY` no código JavaScript pela sua chave:
```js
const apiKey = 'YOUR_API_KEY';
```

4. Abra o arquivo `index.html` em seu navegador para utilizar o aplicativo.

## Tecnologias utilizadas
- HTML5
- CSS3 (com design responsivo e gradiente de fundo)
- JavaScript (ES6)
- [OpenWeatherMap API](https://openweathermap.org/)
- [Chart.js](https://www.chartjs.org/) para visualização de dados

## Autor
-Evecleison Albuquerque do Nascimento


