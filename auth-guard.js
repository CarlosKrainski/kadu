// URL oficial do SheetDB com a chave corrigida
const SHEETDB_URL = "https://sheetdb.io/api/v1/hwd4ldwfwnxs9";

const usuarioLogado = localStorage.getItem("kaduflix_user");
const path = window.location.pathname;

// Identifica se a página atual é a tela de login (index.html, login.html ou raiz /)
const isLoginPage = path.endsWith("/") || path.endsWith("index.html") || path.endsWith("login.html");

// 1. Se NÃO está logado e tenta acessar qualquer página protegida -> Manda para o Login
if (!usuarioLogado && !isLoginPage) {
    window.location.href = "index.html";
}

// 2. Se JÁ está logado e tenta abrir o Login -> Manda para o Dashboard
if (usuarioLogado && isLoginPage) {
    window.location.href = "dashboard.html";
}

// 3. Função Global de Logout
function logout() {
    localStorage.removeItem("kaduflix_user");
    localStorage.removeItem("kaduflix_role");
    sessionStorage.clear();
    window.location.href = "index.html";
}
