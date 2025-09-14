**Projeto de Visualização de Dados da Fórmula 1**

Bem-vindo ao meu projeto da disciplina de FullStack\! Este é um visualizador de dados que conecta você diretamente com o universo da Fórmula 1, consumindo a **API pública** `https://api.jolpi.ca//ergast/f1/` para trazer as informações mais relevantes.

A aplicação foi feita com **React** e **JavaScript**, e eu usei o **React Router DOM** para criar uma experiência de navegação fluida, sem recarregar a página. Em vez de usar vários `useState`, optei pelo **useReducer** para ter um controle mais robusto e organizado do estado da aplicação, especialmente ao lidar com os dados da API.

-----

**🔗 Explore o Projeto ao Vivo**
[Projeto Fórmula 1](https://www.google.com/search?q=https://Projeto-F%C3%B3rmula-1.netlify.app/)

-----

**🔧 Tecnologias Usadas**

  * **React.js**: A base de tudo\!
  * **React Router DOM**: Para a navegação entre as diferentes seções.
  * **useReducer**: Meu "segredo" para um controle de estado mais limpo e eficiente.
  * **HTML5 & CSS3**: Para a estrutura e o estilo.
  * **Create React App (CRA)**: O ponto de partida do projeto, exigido pela disciplina.

-----

**🏎️ O que Você Pode Fazer?**
Ao acessar o site, você pode usar o menu para:

  * Ver a **classificação dos pilotos** e suas posições a cada temporada.
  * Conferir a **pontuação das equipes** (construtores) ano a ano.
  * Conhecer os **circuitos** de cada temporada, com informações detalhadas.

Enquanto os dados são carregados, um **componente de "Loading"** é exibido, garantindo uma experiência de uso mais clara.

-----

**✨ Vantagens de Usar useReducer**
Escolhi o **useReducer** por três motivos principais:

1.  **Controle Aprimorado**: Facilita a gestão de dados complexos que vêm da API.
2.  **Lógica Centralizada**: Toda a lógica de atualização de estado fica em um só lugar, tornando a manutenção e os testes muito mais simples.
3.  **Performance Otimizada**: Ajuda a evitar o "desperdício" de desempenho que pode acontecer com muitos `useState`.
