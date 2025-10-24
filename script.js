document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('open-modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalOverlay = document.getElementById('apresentacao-modal');

    // Função para abrir o modal
    const open_modal = () => {
        if (modalOverlay) {
            modalOverlay.classList.add('show');
            modalOverlay.setAttribute('aria-hidden', 'false');
        }
    };

    // Função para fechar o modal
    const close_modal = () => {
        if (modalOverlay) {
            modalOverlay.classList.remove('show');
            modalOverlay.setAttribute('aria-hidden', 'true');
        }
    };

    if (openModalBtn) {
        openModalBtn.addEventListener('click', open_modal);
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', close_modal);
    }

    // Fechar modal ao clicar fora dele
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                close_modal();
            }
        });
    }

    // Fechar modal com a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('show')) {
            close_modal();
        }
    });
    
    // Efeito de sombra na Navbar ao rolar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});