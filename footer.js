document.addEventListener('DOMContentLoaded', function() {
    // Detectar si estamos en portafolio o en index
    const isPortafolio = window.location.pathname.includes('portafolio');
    
    const footerHTML = `
        <footer class="footer">
            <ul class="social-icon">
                <li class="icon-elem">
                    <a href="https://www.facebook.com/profile.php?id=61570868399782" target="_blank" rel="noopener noreferrer" class="icon">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </li>
                <li class="icon-elem">
                    <a href="https://www.instagram.com/supera.md/" target="_blank" rel="noopener noreferrer" class="icon">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </li>
                <li class="icon-elem">
                    <a href="https://wa.me/528119815965?text=Hola,%20quiero%20más%20información" target="_blank" rel="noopener noreferrer" class="icon">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                    </a>
                </li>
            </ul>
            <ul class="menu">
                <li class="menu-elem">
                    <a href="${isPortafolio ? './index.html#inicio' : '#inicio'}" class="menu-icon"> Inicio </a>
                </li>
                <li class="menu-elem">
                    <a href="${isPortafolio ? './index.html#servicios' : '#servicios'}" class="menu-icon"> Servicios </a>
                </li>
                <li class="menu-elem">
                    <a href="./portafolio.html" class="menu-icon"> Portafolio </a>
                </li>
                <li class="menu-elem">
                    <a href="${isPortafolio ? './index.html#contacto' : '#contacto'}" class="menu-icon"> Contacto </a>
                </li>
            </ul>
            <p class="text">©${new Date().getFullYear()} Supera | Todos los derechos reservados</p>
        </footer>
    `;
    
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});