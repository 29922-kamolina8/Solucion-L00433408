function validar() {
  const correo   = document.getElementById('txtEmail').value.trim();
  const telefono = document.getElementById('txtTelefono').value.trim();
  const expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z]{2}$/i;

  if (!expresion.test(correo)) {
    alert("El correo no es válido");
    return false;
  }

  if (!(telefono.length === 10 && !isNaN(telefono))) {
    alert("El teléfono debe tener exactamente 10 dígitos");
    return false;
  }

  return true;
}

function enviar(btn) {
  // valida ANTES de enviar (submit() NO dispara onsubmit)
  if (!validar()) return;

  // deshabilitar y cambiar texto
  btn.disabled = true;
  btn.value = "Enviando datos...";

  // aseguramos que vaya a la pantalla de “enviado” con GET (sin 405)
  btn.form.action = "formContactoEnviado.html";
  btn.form.method = "get";

  // enviar el formulario (como pide el enunciado)
  btn.form.submit();
}
