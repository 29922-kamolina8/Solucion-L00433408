// Obtener los elementos del DOM
const chkProp = document.getElementById('chkPropietario');
const chkTer  = document.getElementById('chkTercero');
const btnEnv  = document.getElementById('btnEnviar');
const boxConf = document.getElementById('boxConfidencial');

// Función para actualizar estado de checkboxes y botones
function actualizar() {
  // Exclusión entre propietario y tercero
  if (this === chkProp && chkProp.checked) chkTer.checked = false;
  if (this === chkTer  && chkTer.checked)  chkProp.checked = false;

  // Mostrar u ocultar sección confidencial
  boxConf.style.display = chkTer.checked ? 'block' : 'none';

  // Habilitar botón enviar solo si es propietario
  btnEnv.disabled = !chkProp.checked;
}

// Escuchar cambios en los checkboxes
chkProp.addEventListener('change', actualizar);
chkTer.addEventListener('change', actualizar);
