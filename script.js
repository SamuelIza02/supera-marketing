// Slider infinito sin cortes
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.logo-slider');
    const track = document.querySelector('.logo-track');

    if (track) {
        let position = 0;
        const speed = 0.5;

        function animate() {
            position -= speed;

            if (Math.abs(position) >= track.scrollWidth / 2) {
                position = 0;
            }

            track.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(animate);
        }
        animate();
    }
});


/* Text Area contacto */
document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('floatingMessage');

    if (textarea) {
        textarea.addEventListener('input', function () {
            this.style.height = '120px'; // Reset a altura mínima de 4 líneas
            this.style.height = Math.max(120, this.scrollHeight) + 'px';
        });
    }
});


// Detectar errores del iframe
document.addEventListener('DOMContentLoaded', function () {
    const iframe = document.querySelector('iframe[name="hidden_iframe"]');
    if (iframe) {
        iframe.addEventListener('load', function () {
            try {
                // Si hay contenido de error en el iframe
                if (this.contentDocument && this.contentDocument.body.innerHTML.includes('error')) {
                    console.warn("Por favor escribe tu consulta");
                }
            } catch (e) {
                // Error de CORS o acceso - formulario probablemente se envió bien
            }
        });
    }
});

function resetearForm() {
    setTimeout(() => {
        const form = document.querySelector('form');
        if (form) {
            form.reset();
        }
    }, 1000);
}

