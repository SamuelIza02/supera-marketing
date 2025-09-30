// Lightbox seguro - Reemplazo del plugin vulnerable
class SecureLightbox {
    constructor() {
        this.currentIndex = 0;
        this.images = [];
        this.init();
    }

    init() {
        this.createLightboxHTML();
        this.bindEvents();
        this.findImages();
    }

    createLightboxHTML() {
        // Prevenir elementos duplicados
        if (document.getElementById('lightbox')) {
            return;
        }
        
        const lightboxHTML = `
            <div id="lightbox" class="lightbox" style="display: none;">
                <div class="lightbox-content">
                    <span class="lightbox-close">&times;</span>
                    <img class="lightbox-image" src="" alt="">
                    <button class="lightbox-prev">&#10094;</button>
                    <button class="lightbox-next">&#10095;</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    }

    findImages() {
        const links = document.querySelectorAll('a[data-lightbox]');
        links.forEach((link) => {
            const img = link.querySelector('img');
            if (img) {
                const imageIndex = this.images.length; // Usar índice correcto
                this.images.push({
                    src: this.validateURL(link.href),
                    title: this.sanitizeText(link.getAttribute('data-title') || img.alt || '')
                });
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.open(imageIndex);
                });
            }
        });
    }

    validateURL(url) {
        try {
            const urlObj = new URL(url);
            if (urlObj.protocol === 'http:' || urlObj.protocol === 'https:') {
                return url;
            }
            return '#'; // URL segura por defecto
        } catch {
            return '#'; // URL inválida
        }
    }

    sanitizeText(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    open(index) {
        // Validar índice antes de acceder al array
        if (!this.images || index < 0 || index >= this.images.length) {
            return;
        }
        
        this.currentIndex = index;
        const lightbox = document.getElementById('lightbox');
        if (!lightbox) return;
        
        const image = lightbox.querySelector('.lightbox-image');
        if (!image) return;

        image.src = this.images[index].src;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    close() {
        document.getElementById('lightbox').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    next() {
        if (this.images.length === 0) return;
        this.open((this.currentIndex + 1) % this.images.length);
    }

    prev() {
        if (this.images.length === 0) return;
        this.open((this.currentIndex - 1 + this.images.length) % this.images.length);
    }

    bindEvents() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('lightbox-close') || e.target.classList.contains('lightbox')) {
                this.close();
            }
            if (e.target.classList.contains('lightbox-next')) {
                this.next();
            }
            if (e.target.classList.contains('lightbox-prev')) {
                this.prev();
            }
        });

        document.addEventListener('keydown', (e) => {
            const lightbox = document.getElementById('lightbox');
            if (lightbox && lightbox.style.display === 'flex') {
                if (e.key === 'Escape') this.close();
                if (e.key === 'ArrowRight') this.next();
                if (e.key === 'ArrowLeft') this.prev();
            }
        });
    }
}

// CSS para el lightbox seguro
const lightboxCSS = `
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
}

.lightbox-image {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
}

.lightbox-close {
    position: absolute;
    top: -40px;
    right: 0;
    color: white;
    font-size: 30px;
    cursor: pointer;
}

.lightbox-prev, .lightbox-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    color: white;
    border: none;
    font-size: 40px;
    padding: 0;
    cursor: pointer;
}

.lightbox-prev {
    left: 10px;
}

.lightbox-next {
    right: 10px;
}
`;

// Agregar CSS
const style = document.createElement('style');
style.textContent = lightboxCSS;
document.head.appendChild(style);

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new SecureLightbox();
});