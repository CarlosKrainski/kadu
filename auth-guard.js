// URL do SheetDB
const SHEETDB_URL = "https://sheetdb.io/api/v1/hwd4ldwfnxs9";

const usuarioLogado = localStorage.getItem("kaduflix_user");
const path = window.location.pathname;

// Verifica se o caminho ATUAL é a página de login (trata caminhos como /kadu/, /kadu/index.html ou index.html)
const isLoginPage = path.endsWith("/") || path.endsWith("index.html") || path.endsWith("login.html");

// 1. Se NÃO está logado e tenta acessar qualquer página que NÃO seja a de login -> Manda para o Login
if (!usuarioLogado && !isLoginPage) {
    window.location.href = "index.html";
}

// 2. Se JÁ está logado e tenta abrir o Login -> Manda para o Dashboard
if (usuarioLogado && isLoginPage) {
    window.location.href = "dashboard.html";
}

// 3. Função Global de Logout (disponível para todos os botões "Sair")
function logout() {
    localStorage.removeItem("kaduflix_user");
    localStorage.removeItem("kaduflix_role");
    sessionStorage.clear();
    window.location.href = "index.html";
}
