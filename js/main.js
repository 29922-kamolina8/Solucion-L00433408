$(function () {
  // —— Tabs: cambiar entre Iniciar Sesión / Registrarse ——
  $('#tabs .tab a').on('click', function (e) {
    e.preventDefault();
    const hash = $(this).attr('href'); // #iniciar-sesion o #registrarse

    // activar pestaña
    $(this).parent().addClass('active').siblings().removeClass('active');
    // activar vista
    $('.contenido-tab > div').removeClass('activo').hide();
    $(hash).addClass('activo').fadeIn(300);
  });

  // Mostrar por defecto el login
  $('#iniciar-sesion').addClass('activo').show();

  // —— Registro: usar submit para que required funcione ——
  $('#FormRegistro').on('submit', function (e) {
    e.preventDefault();
    const form = this;

    if (!form.checkValidity()) {
      form.reportValidity(); // marca campos obligatorios
      return;
    }

    alert('¡Registro exitoso! Ahora inicia sesión.');

    // Cambiar a pestaña "Iniciar Sesión"
    $('.tab-segunda').addClass('active').siblings().removeClass('active');
    $('.contenido-tab > div').removeClass('activo').hide();
    $('#iniciar-sesion').addClass('activo').fadeIn(300);
  });

  // (Opcional) si tu botón tiene id="btnRegistrarse", dispara el submit:
  $('#btnRegistrarse').on('click', function () {
    $('#FormRegistro').trigger('submit');
  });
});
