// JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const noti = document.getElementById("notificacao");
  noti.style.display = "block";
  setTimeout(() => {
    noti.style.display = "none";
  }, 4000);

  // Alternar tema
  window.alternarTema = () => {
    document.body.classList.toggle("dark-theme");
    noti.style.display = "block";
    setTimeout(() => {
      noti.style.display = "none";
    }, 2000);
  };

  // Animação de imagem
  const img = document.getElementById("imgAnimada");
  if (img) {
    img.addEventListener("click", () => {
      img.classList.toggle("expandida");
    });
  }

  // Menu toggle
  const menuBtn = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");
  menuBtn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  // Gráfico Pizza
  const dados = {
    labels: ["Método Tradicional", "Sistema Automatizado"],
    datasets: [{
      label: "Consumo de Água (%)",
      data: [100, 60],
      backgroundColor: [
        "rgba(255, 99, 132, 0.7)",
        "rgba(0, 200, 81, 0.7)"
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(0, 200, 81, 1)"
      ],
      borderWidth: 2
    }]
  };

  const config = {
    type: 'pie',
    data: dados,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: { color: '#000' }
        },
        title: {
          display: true,
          text: 'Redução no Consumo de Água (%)',
          color: '#000',
          font: { size: 18 }
        }
      }
    }
  };

  const ctx = document.getElementById("meuGraficoPizza").getContext("2d");
  new Chart(ctx, config);
});
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});
document.addEventListener("DOMContentLoaded", () => {
  // Notificação responsiva
  const noti = document.getElementById("notificacao");
  if (noti) {
    noti.style.display = "block";
    setTimeout(() => {
      noti.style.display = "none";
    }, 4000);
  }

  // Alternar tema com verificação de preferência do sistema
  window.alternarTema = () => {
    document.body.classList.toggle("dark-theme");
    
    // Salvar preferência no localStorage
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem('darkTheme', isDark);
    
    if (noti) {
      noti.textContent = isDark ? "Tema escuro ativado" : "Tema claro ativado";
      noti.style.display = "block";
      setTimeout(() => {
        noti.style.display = "none";
      }, 2000);
    }
  };

  // Verificar preferência de tema ao carregar
  if (localStorage.getItem('darkTheme') === 'true') {
    document.body.classList.add("dark-theme");
  }

  // Menu hambúrguer melhorado para touch
  const menuBtn = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");
  
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("ativo");
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener("click", () => {
      menu.classList.remove("ativo");
    });
  }

  // Gráficos responsivos
  const criarGraficos = () => {
    const ctxPizza = document.getElementById("meuGraficoPizza");
    if (ctxPizza) {
      new Chart(ctxPizza, {
        type: 'pie',
        data: {
          labels: ["Método Tradicional", "Sistema Automatizado"],
          datasets: [{
            label: "Consumo de Água (%)",
            data: [100, 60],
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(0, 200, 81, 0.7)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(0, 200, 81, 1)"
            ],
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: window.innerWidth < 768 ? 'bottom' : 'top',
              labels: { 
                color: document.body.classList.contains("dark-theme") ? '#fff' : '#000'
              }
            },
            title: {
              display: true,
              text: 'Redução no Consumo de Água (%)',
              color: document.body.classList.contains("dark-theme") ? '#fff' : '#000',
              font: { 
                size: window.innerWidth < 768 ? 14 : 18 
              }
            }
          }
        }
      });
    }
  };

  // Inicializar gráficos
  criarGraficos();

  // Redimensionar gráficos quando a janela for redimensionada
  window.addEventListener('resize', () => {
    // Você pode adicionar lógica para destruir e recriar gráficos se necessário
  });
});