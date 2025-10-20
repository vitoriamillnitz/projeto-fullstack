# 🏁 F1 Data Tracker - Single Page Application (SPA)

Este projeto é o desenvolvimento da camada Frontend de uma aplicação web em **React.js e AJAX**, seguindo o conceito de **SPA - Single Page Application**. A aplicação permite que o usuário consulte resultados históricos das temporadas de Fórmula 1, utilizando APIs JSON abertas.

Desenvolvido para a disciplina **ES47B-ES71 - Programação Web Fullstack**  - UTFPR Campus Cornélio Procópio.

## ⚙️ Tecnologias e Critérios Atendidos

O projeto foi construído para atender a todos os critérios da Proposta do Projeto 1, utilizando as seguintes especificações:

| Categoria | Especificação | Critério Atendido |
| :--- | :--- | :--- |
| **Estrutura** | React.js (Vite) e AJAX (Fetch API) | Desenvolvimento da camada Frontend, Estrutura do projeto. |
| **API JSON** | `https://api.jolpi.ca//ergast/f1/` (API de Resultados Históricos) | Consumo de API JSON. |
| **React Hook** | **`useReducer`** | Implementação da funcionalidade/hook selecionado. |
| **Biblioteca Externa** | **React Router (`react-router-dom`)** | Uso de biblioteca externa para navegação SPA. |
| **Design/UX** | **Material UI (MUI)** | Atendimento às diretrizes de desenvolvimento web. 

## ✨ Funcionalidades

1.  **Busca Parametrizada:** Permite a busca por ano da temporada (Ex: `2023`), enviando o parâmetro para a API.
2.  **Validação de Formulário:** Realiza a verificação de preenchimento obrigatório e formato do ano antes de enviar a requisição.
3.  **Gestão de Estado:** Utiliza o `useReducer` em conjunto com a Context API para gerenciar o estado da aplicação (Loading, Dados, Erro).
4.  **Tratamento de Erros:** Apresenta mensagens de erro específicas tanto para a validação local (antes do envio) quanto para falhas de requisição ou API (depois do envio).
5.  **SPA:** Implementado com React Router para garantir que a navegação entre rotas (`/`, `/sobre`) ocorra sem recarregar a página HTML.

## 🚀 Como Rodar o Projeto Localmente

Certifique-se de ter o Node.js e o npm instalados.

1.  **Clone o Repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd f1-project
    ```
2.  **Instale as Dependências:**
    ```bash
    npm install
    ```
3.  **Inicie o Servidor de Desenvolvimento (Vite):**
    ```bash
    npm run dev
    ```
    A aplicação estará acessível em `http://localhost:5174/` (ou outra porta disponível).

## 📦 Deployment (Entrega)

O pacote de *deployment* foi gerado utilizando o comando `npm run build`. A pasta **`dist/`** contém os arquivos estáticos prontos para serem disponibilizados em um servidor web (como Vercel ou Netlify).

---
*Desenvolvido por Vitória Millnitz - UTFPR.*
