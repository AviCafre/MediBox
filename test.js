Swal.fire({
    html: 'La siguiente informacion es legal y personal. Por favor lea atentamente nuestros <a href="Terminos y Condiciones.pdf">terminos y condiciones.</a>',
    confirmButtonText: 'Acepto',
    icon: 'info',
    padding: '1rem',
    grow: '1row',
    backdrop: true,
    toast: true,
    position: 'top',
    allowOutsideClick: false,
    allowEscapeKey: false,
    stopKeydownPropagation: false,

    showConfirmButton: true,
    showCloseButton: false,
    showCancelButton: false,
    closeButtonAriaLabel: 'Cerrar esta alerta',

    customClass: {
        content: 'content-class'
    }

  });