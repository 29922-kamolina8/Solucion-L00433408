function validar() {
  const correo   = document.getElementById('txtEmail').value.trim();
  const telefono = document.getElementById('txtTelefono').value.trim();
  const expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z]{2}$/i;

  if (!expresion.test(correo)) { alert("El correo no es válido"); return false; }
  if (!(telefono.length === 10 && !isNaN(telefono))) {
    alert("El teléfono debe tener exactamente 10 dígitos"); return false;
  }
  return true;
}

function enviar(btn) {
  if (!validar()) return;                 // no enviar si falla
  btn.disabled = true;                    // deshabilitar
  btn.value = "Enviando datos...";        // cambiar mensaje
  btn.form.action = "formContactoEnviado.html"; // ir a la interfaz “enviado”
  btn.form.method = "post";
  btn.form.submit();                      // enviar con this.form.submit()
}
