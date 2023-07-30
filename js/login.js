var botaoLogin = document.querySelector(".btn-login-container");
var botaoCancelar = document.querySelector("#btn-cancelar");
var botaoEntrar = document.querySelector("#form-left")
var telaBloqueio = document.querySelector(".bloqueio");
var telaFormulario = document.querySelector(".formulario-container");
var formulario = document.querySelector("#frmNovo"); 
var mensagemErro = document.querySelector("#msg-erro");

botaoLogin.addEventListener('click', exibirFormulario);
botaoCancelar.addEventListener('click', cancelarLogin);
botaoEntrar.addEventListener('click', validarFormulario);

function exibirFormulario(event)
{
	event.preventDefault()
	telaFormulario.classList.remove("escondido");
	telaBloqueio.classList.remove("escondido");
}


function cancelarLogin(event)
{
	event.preventDefault();
	fecharFormulario();
}

function fecharFormulario()
{
	formulario.txtEmail.value="";
	formulario.txtSenha.value="";
	telaBloqueio.classList.add("escondido");
	telaFormulario.classList.add("escondido");
}


function validarFormulario(event)
{
	event.preventDefault();
	var email = formulario.txtEmail.value;
	var senha = formulario.txtSenha.value;

	if (email == "")
	{
		mensagemErro.textContent = "E-mail requerido";
		return;
	}

	else if (senha == "")
	{
		mensagemErro.textContent = "Senha requerida";
		return;
	}

	fecharFormulario();
}