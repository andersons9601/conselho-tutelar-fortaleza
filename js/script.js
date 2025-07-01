document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    function toggleMenu(open) {
        if (open === undefined) open = !menu.classList.contains('active');
        if (open) {
            menu.classList.add('active');
            // Ajusta max-height para a altura real do conteúdo
            menu.style.maxHeight = menu.scrollHeight + 'px';
        } else {
            // Recolhe suavemente
            menu.style.maxHeight = menu.scrollHeight + 'px';
            setTimeout(() => {
                menu.style.maxHeight = '0';
            }, 10);
            menu.classList.remove('active');
        }
    }

    menuToggle.addEventListener('click', function () {
        toggleMenu();
    });

    document.addEventListener('click', function (e) {
        if (menu.classList.contains('active') && !menu.contains(e.target) && e.target !== menuToggle) {
            toggleMenu(false);
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menu.classList.contains('active')) {
            toggleMenu(false);
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Modo claro/escuro
    const toggleThemeBtn = document.getElementById('toggleTheme');
    function updateThemeIcon() {
        if (document.body.classList.contains('dark-mode')) {
            toggleThemeBtn.innerText = '☀️';
        } else {
            toggleThemeBtn.innerText = '🌙';
        }
    }
    if (toggleThemeBtn) {
        toggleThemeBtn.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
            updateThemeIcon();
        });
        updateThemeIcon();
    }

    // Botão voltar ao topo
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});