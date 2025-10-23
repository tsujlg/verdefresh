// Elementos do DOM
const hamburger = document.getElementById("hamburger")
const sidebar = document.getElementById("sidebar")
const overlay = document.getElementById("overlay")
const closeBtn = document.getElementById("closeBtn")
const themeToggle = document.getElementById("themeToggle")
const navLinks = document.querySelectorAll(".nav-links a")

// Função para abrir o menu
function openMenu() {
  sidebar.classList.add("active")
  overlay.classList.add("active")
  hamburger.classList.add("active")
  document.body.style.overflow = "hidden"
}

// Função para fechar o menu
function closeMenu() {
  sidebar.classList.remove("active")
  overlay.classList.remove("active")
  hamburger.classList.remove("active")
  document.body.style.overflow = ""
}

// Event listeners para abrir/fechar menu
hamburger.addEventListener("click", () => {
  if (sidebar.classList.contains("active")) {
    closeMenu()
  } else {
    openMenu()
  }
})

closeBtn.addEventListener("click", closeMenu)
overlay.addEventListener("click", closeMenu)

// Fechar menu ao clicar em um link
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href")
    const targetSection = document.querySelector(targetId)

    closeMenu()

    setTimeout(() => {
      targetSection.scrollIntoView({ behavior: "smooth" })
    }, 300)
  })
})

// Toggle de Tema
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme)
  localStorage.setItem("theme", theme)

  const icon = themeToggle.querySelector(".toggle-icon")
  icon.textContent = theme === "dark" ? "☀️" : "🌙"
}

// Carregar tema salvo
const savedTheme = localStorage.getItem("theme") || "light"
setTheme(savedTheme)

// Event listener para alternar tema
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"
  setTheme(newTheme)
})

// Prevenir envio do formulário (para demonstração)
const form = document.querySelector(".contato-form")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  form.reset()
})

// Fechar menu com tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sidebar.classList.contains("active")) {
    closeMenu()
  }
})
