// Cole aqui a URL gerada pelo SheetDB
const SHEETDB_URL = "https://sheetdb.io/api/v1/hwd4ldwfwnxs9";

const usuarioLogado = localStorage.getItem("kaduflix_user");
const path = window.location.pathname;
const isLoginPage = path === "/" || path.endsWith("index.html");

// Se NÃO está logado e tenta abrir o Dashboard -> Manda para o Login
if (!usuarioLogado && !isLoginPage) {
    window.location.href = "index.html";
}

// Se JÁ está logado e tenta abrir o Login -> Manda para o Dashboard
if (usuarioLogado && isLoginPage) {
    window.location.href = "dashboard.html";
}