// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    var hombre = document.getElementById("radio1");
                    var mujer = document.getElementById("radio2");
                    var none = document.getElementById("radio3");
                    var msjGenero = document.getElementById("Genero");
                    event.preventDefault();
                    // alert("hola");
                    document.getElementById("btnCorreo").addEventListener("click", function () {
                        var fechaNacim = document.getElementById("FechaNacim");
                        var fechaValue = new Date(fechaNacim.value);
                        var fechaActual = new Date();
                        if (fechaValue > fechaActual) {
                            alert("Fecha de nacimiento incorrecta")
                            return;
                        }
                        var age = CalcularEdad(fechaValue.getFullYear(), fechaValue.getMonth(), fechaValue.getDate());
                        document.getElementById("Edad").value = age;

                        if (mujer.checked) {
                            msjGenero.value = "Mujer";
                        } else if (hombre.checked) {
                            msjGenero.value = "Hombre";
                        } else if (none.checked) {
                            msjGenero.value = "-";
                        }

                        const btn = document.getElementById('btnCorreo');
                        document.getElementById('formulario')
                            .addEventListener('submit', function (event) {
                                event.preventDefault();

                                btn.innerHTML = 'Enviando...';

                                const serviceID = 'default_service';
                                const templateID = 'template_aabmomw';

                                emailjs.sendForm(serviceID, templateID, this)
                                    .then(() => {
                                        btn.innerHTML = 'Email enviado';
                                        alert('Sent!');
                                    }, (err) => {
                                        btn.innerHTML = 'Email enviado';
                                        alert(JSON.stringify(err));
                                    });
                            });
                    });
                }
                form.classList.add('was-validated');

            }, false);
        });
    }, false);
})();

function CalcularEdad(anno, mes, dia) {

    var fechaActual = new Date();
    var edad = fechaActual.getFullYear() - anno;

    if (fechaActual.getMonth > mes) {
        edad = edad - 1;
    }
    else {
        if (fechaActual.getMonth == mes && fechaActual.getDate > dia) {
            edad = edad - 1;
        }
    }
    return edad;

}
function Genero() {

}

// function enviarCorreo() {

// };

