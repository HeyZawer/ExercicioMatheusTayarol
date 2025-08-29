Este projeto é uma aplicação simples em HTML, CSS e JavaScript que implementa um formulário de cadastro de usuários.

O sistema permite a entrada de dados pessoais, validação básica, exibição de mensagens de erro e cálculo automático do Imposto de Renda (IR) a partir do salário e número de dependentes.
- O que foi utilizado?
	O código utiliza de 3 tipos de estruturas para seu desenvolvimento
•	HTML5: Estrutura do formulário e dos elementos da página.
•	CSS3: Estilização da interface (arquivo styles.css).
•	JavaScript (ES6): Validação de campos, manipulação do DOM e lógica de cálculo (arquivo script.js).

  - Funcionalidades
  •	Campos de cadastro:
o	Nome completo
o	CPF (com máscara 000.000.000-00)
o	Login
o	E-mail
o	Senha + Confirmação de senha (com botão para mostrar/ocultar 👁)
o	Salário (R$)
o	Número de dependentes
o	Cálculo automático do IR
  •	Validações:
o	Todos os campos são obrigatórios.
o	Senha deve coincidir com a confirmação.
o	CPF e e-mail seguem formatação válida.
o	Exibição de mensagens de erro em cada campo inválido.
  •	Botões:
o	Cadastrar → Envia os dados e mostra mensagens de validação.
o	Limpar → Reseta o formulário para o estado inicial.

  Como Executar
1.	Clone ou baixe este repositório.
2.	Certifique-se de que os três arquivos estão na mesma pasta:
o	index.html
o	styles.css
o	script.js
3.	Abra o arquivo index.html em qualquer navegador moderno.
Não é necessário servidor — o projeto roda localmente.
