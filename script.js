/* 
 * VLOG VINTAGE - JAVASCRIPT PRINCIPAL
 * Projeto escolar para curso de Análise e Desenvolvimento de Sistemas
 * Turno: Manhã - 2° ano do ensino médio
 * Criadoras: Davilla e Erica
 */

// Aguarda o carregamento completo da página antes de executar as funções
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa todas as funcionalidades principais do site
    initNavigation();        // Menu de navegação responsivo
    initCurrentDate();       // Data atual no cabeçalho
    initAnimations();        // Animações de scroll e entrada
    initSocialLinks();       // Links para redes sociais
    initScrollEffects();     // Efeitos de paralaxe e scroll
    initTypewriterEffect();  // Efeito de digitação nos títulos
});

/* 
 * FUNÇÃO DE NAVEGAÇÃO
 * Controla o menu responsivo e navegação suave entre seções
 */
function initNavigation() {
    // Seleciona os elementos do menu de navegação
    const navToggle = document.getElementById('nav-toggle');  // Botão hambúrguer (mobile)
    const navMenu = document.getElementById('nav-menu');      // Menu principal
    const navLinks = document.querySelectorAll('.nav-link'); // Links do menu

    // Função para abrir/fechar menu mobile (botão hambúrguer)
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active'); // Adiciona/remove classe 'active'
        
        // Muda o ícone do botão: hambúrguer ↔ X
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'fas fa-times';  // Ícone de X quando menu está aberto
        } else {
            icon.className = 'fas fa-bars';   // Ícone de hambúrguer quando menu está fechado
        }
    });

    // Fecha menu quando clica em um link e faz scroll suave para a seção
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active'); // Fecha o menu mobile
            const icon = navToggle.querySelector('i');
            icon.className = 'fas fa-bars';     // Volta para ícone hambúrguer
            
            // Navegação suave para a seção clicada
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',  // Scroll suave
                        block: 'start'       // Alinha no topo
                    });
                }
            }
        });
    });

    // Fecha menu quando clica fora dele (para melhor experiência do usuário)
    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.className = 'fas fa-bars';
        }
    });
}

/* 
 * FUNÇÃO DE DATA ATUAL
 * Exibe a data atual no formato de jornal brasileiro
 */
function initCurrentDate() {
    // Seleciona o elemento onde a data será exibida
    const dateElement = document.getElementById('current-date');
    const now = new Date(); // Obtém a data atual
    
    // Configurações para formatação da data em português brasileiro
    const options = { 
        weekday: 'long',    // Dia da semana por extenso (ex: segunda-feira)
        year: 'numeric',    // Ano com 4 dígitos (ex: 2024)
        month: 'long',      // Mês por extenso (ex: agosto)
        day: 'numeric'      // Dia do mês (ex: 30)
    };
    
    // Formata a data em português brasileiro e exibe no elemento
    const formattedDate = now.toLocaleDateString('pt-BR', options);
    dateElement.textContent = formattedDate;
}


/* 
 * FUNÇÃO DE ANIMAÇÕES DE SCROLL
 * Detecta quando elementos aparecem na tela e aplica animações
 */
function initAnimations() {
    // Seleciona todos os elementos que devem ser animados
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    
    // Cria um observador para detectar quando elementos entram na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o elemento está visível na tela
            if (entry.isIntersecting) {
                entry.target.classList.add('animated'); // Adiciona classe para ativar animação
                
                // Cria animação escalonada para múltiplos elementos
                const siblings = Array.from(entry.target.parentNode.children);
                const index = siblings.indexOf(entry.target);
                entry.target.style.animationDelay = `${index * 0.1}s`; // Delay progressivo
            }
        });
    }, {
        threshold: 0.1,                    // Ativa quando 10% do elemento está visível
        rootMargin: '0px 0px -50px 0px'    // Margem para ativar um pouco antes
    });
    
    // Observa todos os elementos animados
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/* 
 * FUNÇÃO DOS LINKS SOCIAIS
 * Adiciona efeitos visuais aos botões das redes sociais
 * NOTA: Os links já estão configurados diretamente no HTML
 */
function initSocialLinks() {
    const youtubeBtn = document.getElementById('youtube-btn');
    const instagramBtn = document.getElementById('instagram-btn');
    
    // Adiciona efeito de animação quando clica no botão do YouTube
    youtubeBtn.addEventListener('click', function(e) {
        // Efeito visual de "apertar" o botão
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Adiciona efeito de animação quando clica no botão do Instagram
    instagramBtn.addEventListener('click', function(e) {
        // Efeito visual de "apertar" o botão
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
}


/* 
 * FUNÇÃO DE EFEITOS DE SCROLL
 * Controla comportamentos especiais durante o scroll da página
 */
function initScrollEffects() {
    const nav = document.querySelector('.vintage-nav'); // Menu de navegação
    let lastScrollTop = 0; // Guarda a posição anterior do scroll
    
    // Evento de scroll para esconder/mostrar menu e adicionar efeitos
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Adiciona classe 'scrolled' quando rola mais de 100px (para mudar estilo do menu)
        if (scrollTop > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Esconde menu ao rolar para baixo, mostra ao rolar para cima
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            nav.style.transform = 'translateY(-100%)'; // Esconde menu
        } else {
            nav.style.transform = 'translateY(0)';     // Mostra menu
        }
        
        lastScrollTop = scrollTop; // Atualiza posição anterior
    });
    
    // Efeito parallax para o cabeçalho (movimento sutil ao rolar)
    const header = document.querySelector('.newspaper-header');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        // Move o header mais devagar que o scroll (efeito parallax)
        header.style.transform = `translateY(${scrolled * 0.2}px)`;
    });
}

/* 
 * FUNÇÃO DE EFEITO DE MÁQUINA DE ESCREVER
 * Faz os títulos aparecerem letra por letra como se fossem digitados
 */
function initTypewriterEffect() {
    const headlines = document.querySelectorAll('.headline'); // Seleciona todos os títulos
    
    headlines.forEach((headline, index) => {
        const text = headline.textContent;  // Salva o texto original
        headline.textContent = '';          // Limpa o texto
        headline.style.borderRight = '3px solid var(--primary-color)'; // Adiciona cursor
        
        // Inicia o efeito com delay entre títulos
        setTimeout(() => {
            typeWriter(headline, text, 0);
        }, index * 1000); // 1 segundo de delay entre cada título
    });
}

/* 
 * FUNÇÃO AUXILIAR PARA O EFEITO DE MÁQUINA DE ESCREVER
 * Adiciona uma letra por vez ao elemento
 */
function typeWriter(element, text, i) {
    if (i < text.length) {
        element.textContent += text.charAt(i); // Adiciona próxima letra
        setTimeout(() => typeWriter(element, text, i + 1), 100); // Chama novamente após 100ms
    } else {
        // Remove o cursor quando termina de "digitar"
        setTimeout(() => {
            element.style.borderRight = 'none';
        }, 1000);
    }
}

/* 
 * MELHORIAS INTERATIVAS DOS ELEMENTOS
 * Adiciona efeitos hover e ripple aos elementos da página
 */
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona efeitos hover aos cartões da página
    const cards = document.querySelectorAll('.course-info-card, .sidebar-box, .photo-caption');
    
    cards.forEach(card => {
        // Efeito quando o mouse entra no cartão
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)'; // Eleva e aumenta ligeiramente
            this.style.boxShadow = '0 15px 30px var(--shadow-color)';   // Sombra mais intensa
        });
        
        // Efeito quando o mouse sai do cartão
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';        // Volta ao normal
            this.style.boxShadow = '0 6px 15px var(--shadow-color)'; // Sombra normal
        });
    });
    
    // Adiciona efeito ripple (ondulação) aos botões sociais
    const buttons = document.querySelectorAll('.social-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Cria elemento para o efeito ripple
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect(); // Posição do botão
            const size = Math.max(rect.width, rect.height); // Tamanho do ripple
            
            // Calcula posição do clique para centralizar o ripple
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            // Estilização do efeito ripple
            ripple.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple); // Adiciona o ripple ao botão
            
            // Remove o ripple após a animação
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Adiciona estilos CSS para as animações via JavaScript
    const style = document.createElement('style');
    style.textContent = `
        /* Animação do efeito ripple */
        @keyframes ripple {
            to {
                transform: scale(4);  /* Expande até 4x o tamanho */
                opacity: 0;           /* Fica transparente */
            }
        }
        
        /* Garante que botões sociais sejam relativos para o ripple */
        .social-btn {
            position: relative;
            overflow: hidden;
        }
        
        /* Estilo do menu quando scrolled (com blur) */
        .vintage-nav.scrolled {
            background-color: rgba(139, 69, 19, 0.95);
            backdrop-filter: blur(10px);
        }
    `;
    document.head.appendChild(style); // Adiciona os estilos ao documento
});

/* 
 * FUNÇÕES DE CARREGAMENTO
 * Exibe animação de loading e esconde quando termina
 */
function showLoading(element) {
    // Mostra animação de loading (círculo girando)
    element.innerHTML = '<div class="loading"></div>';
}

function hideLoading(element, content) {
    // Esconde loading e mostra conteúdo após 500ms
    setTimeout(() => {
        element.innerHTML = content;
    }, 500);
}

/* 
 * EASTER EGG - CÓDIGO KONAMI
 * Segredo divertido: digite ↑↑↓↓←→←→BA para ativar
 */
let konamiCode = []; // Array para guardar as teclas digitadas
const correctCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA (códigos das teclas)

// Escuta todas as teclas pressionadas
document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode); // Adiciona a tecla ao array
    
    // Mantém apenas as últimas 10 teclas (tamanho do código)
    if (konamiCode.length > correctCode.length) {
        konamiCode.shift(); // Remove a primeira tecla
    }
    
    // Verifica se o código foi digitado corretamente
    if (konamiCode.length === correctCode.length && 
        konamiCode.every((code, index) => code === correctCode[index])) {
        
        // Ativa animação de pulsação na página
        document.body.style.animation = 'pulse 2s infinite';
        
        // Após 2 segundos, para a animação e mostra mensagem
        setTimeout(() => {
            document.body.style.animation = '';
            alert('🎉 Parabéns! Você encontrou o easter egg! 🎉\n\nFeito com ❤️ pelas alunas de ADS - Turno Manhã');
        }, 2000);
        
        konamiCode = []; // Reseta o array
    }
});

/* 
 * MELHORIAS DE ACESSIBILIDADE
 * Torna o site mais acessível para pessoas com deficiência
 */
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona suporte à navegação por teclado
    const focusableElements = document.querySelectorAll(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        // Destaca elemento quando recebe foco (Tab)
        element.addEventListener('focus', function() {
            this.style.outline = '3px solid var(--accent-color)';  // Borda colorida
            this.style.outlineOffset = '2px';                      // Espaçamento da borda
        });
        
        // Remove destaque quando perde foco
        element.addEventListener('blur', function() {
            this.style.outline = '';       // Remove borda
            this.style.outlineOffset = ''; // Remove espaçamento
        });
    });
    
    // Adiciona rótulos ARIA para leitores de tela
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        // Identifica qual plataforma e adiciona descrição apropriada
        const platform = btn.classList.contains('youtube-btn') ? 'YouTube' : 'Instagram';
        btn.setAttribute('aria-label', `Visitar nosso ${platform}`);
    });
});

/* 
 * OTIMIZAÇÃO DE PERFORMANCE
 * Função debounce para melhorar performance do scroll
 */
function debounce(func, wait) {
    let timeout;
    // Retorna uma função que só executa após parar de ser chamada por 'wait' milissegundos
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args); // Executa a função original
        };
        clearTimeout(timeout);                    // Cancela execução anterior
        timeout = setTimeout(later, wait);        // Agenda nova execução
    };
}

// Handler de scroll otimizado para melhor performance
const debouncedScrollHandler = debounce(function() {
    // Aqui podem ser adicionadas animações extras baseadas em scroll
    console.log('Evento de scroll processado'); // Log para debug
}, 16); // ~60fps (16ms) para scroll suave

// Adiciona o listener de scroll otimizado
window.addEventListener('scroll', debouncedScrollHandler);
