// Detectar si estamos en portafolio o en index (sanitizado)
const pathname = window.location.pathname.replace(/[^a-zA-Z0-9\/\-_.]/g, '');
const isPortafolio = pathname.includes('portafolio');
const baseUrl = './';

const headerHTML = `
    <header class="sticky-top bg-white">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="./index.html">
                    <img src="./assets/logo supera letras-azul.svg" alt="Logo Supera" width="200">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="${isPortafolio ? './index.html#inicio' : '#inicio'}">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${isPortafolio ? './index.html#servicios' : '#servicios'}">Servicios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${baseUrl}portafolio.html">Portafolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${isPortafolio ? './index.html#contacto' : '#contacto'}">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
`;

document.body.insertAdjacentHTML('afterbegin', headerHTML);