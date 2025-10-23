$(document).ready(function(){

    $(".contenedor-formularios").find("input, textarea").on("keyup blur focus", function (e) {

        var $this = $(this),
          label = $this.prev("label");

        if (e.type === "keyup") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.addClass("active highlight");
            }
        } else if (e.type === "blur") {
            if($this.val() === "") {
                label.removeClass("active highlight");
                } else {
                label.removeClass("highlight");
                }
        } else if (e.type === "focus") {
            if($this.val() === "") {
                label.removeClass("highlight");
            }
            else if($this.val() !== "") {
                label.addClass("highlight");
            }
        }

    });

    $(".tab a").on("click", function (e) {

        e.preventDefault();

        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");

        target = $(this).attr("href");

        $(".contenido-tab > div").not(target).hide();

        $(target).fadeIn(600);

    });

});

$(document).ready(function() {
        // Cuando el usuario haga clic en "Registrarse"
        $("#registrarse form").on("submit", function(e) {
            e.preventDefault();

            // Mostrar la pestaña de "Iniciar Sesión"
            $(".tab-segunda").addClass("active");
            $(".tab-primera").removeClass("active");

            $("#iniciar-sesion").fadeIn(600);
            $("#registrarse").hide();
        });
});

