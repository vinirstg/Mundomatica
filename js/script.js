$(document).ready(function()
 {
	$('.mascaraFone').mask('(99) 9 9999-9999');
}
);

function enviar()
{
	var nome = document.getElementById("nome");
	var interesse = document.getElementById("interesse");
	var cidade = document.getElementById("cidade");
	var uf = document.getElementById("uf");
	var email = document.getElementById("email");
	var fone = document.getElementById("fone");

	if (nome.value=="")
	{
		alert("Preencha seu Nome!")
		nome.focus()
		return
	}
	if (interesse.value=="")
	{
		alert("Informe sua área de interesse")
		interesse.focus()
		return
	}
	if (cidade.value=="")
	{
		alert("Informe a Cidade onde você mora")
		cidade.focus()
		return
	}
	if (uf.value=="")
	{
		alert("Informe o Estado onde você mora")
		uf.focus()
		return
	}
	if (email.value=="")
	{
		alert("Informe um e-mail para contato")
		email.focus()
		return
	}
	if (fone.value=="")
	{
		alert("Informe um Telefone para contato")
		fone.focus()
		return
	}
	
	alert("Obrigado por nos enviar seus dados!\n\n Em breve entraremos em contato!")
	window.location.reload();
	

}
