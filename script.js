// Alternar visibilidade da senha
function toggleSenha(id) {
  const campo = document.getElementById(id);
  campo.type = campo.type === "password" ? "text" : "password";
}

// Validações com regex
const regex = {
  cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  login: /^[A-Za-z0-9._-]{4,}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  senha: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/
};

function calcularIR(salario, dependentes) {
  let base = salario - (dependentes * 200);
  if (base < 0) base = 0;

  let aliquota = 0;
  if (base <= 2000) aliquota = 0.05;
  else if (base <= 5000) aliquota = 0.15;
  else aliquota = 0.275;

  return (base * aliquota).toFixed(2);
}

// Evento blur no campo dependentes -> calcula IR
document.getElementById("dependentes").addEventListener("blur", () => {
  const salario = parseFloat(document.getElementById("salario").value) || 0;
  const dependentes = parseInt(document.getElementById("dependentes").value) || 0;
  const ir = calcularIR(salario, dependentes);
  document.getElementById("ir").value = ir.replace(".", ",");
});

// Função de validação geral
function validarCampo(id, condicao, msgErro) {
  const campo = document.getElementById(id);
  const erro = campo.nextElementSibling;

  if (condicao) {
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
    erro.textContent = "";
    return true;
  } else {
    campo.classList.remove("is-valid");
    campo.classList.add("is-invalid");
    erro.textContent = msgErro;
    return false;
  }
}

// Evento de envio do formulário
document.getElementById("cadastroForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let valido = true;

  // Nome
  valido &= validarCampo("nome", document.getElementById("nome").value.trim().length >= 3, "Nome deve ter pelo menos 3 caracteres.");

  // CPF
  valido &= validarCampo("cpf", regex.cpf.test(document.getElementById("cpf").value), "CPF inválido. Formato: 000.000.000-00.");

  // Login
  valido &= validarCampo("login", regex.login.test(document.getElementById("login").value), "Login deve ter mínimo 4 caracteres (letras, números, ., _, -).");

  // Email
  valido &= validarCampo("email", regex.email.test(document.getElementById("email").value), "E-mail inválido.");

  // Senha
  valido &= validarCampo("senha", regex.senha.test(document.getElementById("senha").value), "Senha deve ter ao menos 8 caracteres, incluindo letras e números.");

  // Confirmação de senha
  valido &= validarCampo("confirmarSenha", document.getElementById("confirmarSenha").value === document.getElementById("senha").value, "As senhas não coincidem.");

  // Salário
  valido &= validarCampo("salario", parseFloat(document.getElementById("salario").value) > 0, "Informe um salário válido.");

  // Dependentes
  valido &= validarCampo("dependentes", parseInt(document.getElementById("dependentes").value) >= 0, "Número de dependentes deve ser >= 0.");

  if (valido) {
    document.getElementById("mensagem").textContent = "Usuário cadastrado com sucesso!";
    document.getElementById("cadastroForm").reset();

    // Resetar feedback visual e IR
    document.querySelectorAll("input").forEach(inp => inp.classList.remove("is-valid", "is-invalid"));
    document.getElementById("ir").value = "0,00";
  } else {
    document.getElementById("mensagem").textContent = "";
    const primeiroInvalido = document.querySelector(".is-invalid");
    if (primeiroInvalido) primeiroInvalido.focus();
  }
});

// Botão Limpar -> reset total
document.getElementById("limpar").addEventListener("click", () => {
  document.querySelectorAll("input").forEach(inp => inp.classList.remove("is-valid", "is-invalid"));
  document.getElementById("ir").value = "0,00";
  document.getElementById("mensagem").textContent = "";
});
