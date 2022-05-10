let lgpdUrl = "https://jsonplaceholder.typicode.com/posts";
/* site genérico de testes que aceita requisição de sites desconhecidos.
nessa url deverá estar o site do cliente para registrar o ip, horário e browser do visitante */
let lgpdHtml = `
  <footer>
    <div class="wrapper-lgpd">
      <div class="col-b">
        <div class="lgpd">
          <div class="lgpd-left">
            Utilizamos cookies para melhorar o desempenho e a sua experiência ao navegar em nosso site.<br>
            Ao continuar navegando, consideramos que você aceita a utilização. <a href="">Política de Privacidade</a>
          </div>
          <div class="lgpd-right">
            <button class="lgpd-button">Aceitar e fechar</button>
          </div>
        </div>
      </div>
    </div>
  </footer> 
  <link rel="stylesheet" href="./css/style-lgpd.css"></link>
`;

let lsContent = localStorage.getItem("lgpd");
if (!lsContent) {
  document.body.innerHTML += lgpdHtml;

  let lgpdArea = document.querySelector(".wrapper-lgpd");
  let lgpdButton = lgpdArea.querySelector("button");

  lgpdButton.addEventListener("click", async () => {
    lgpdArea.remove();

    let result = await fetch(lgpdUrl);
    let json = await result.json();

    if (json.error != "") {
      let id = "123"; // id setado somente para teste, porque o site utilizado aqui, não retorna
      localStorage.setItem("lgpd", id);
    }
  });
}

/* para remover o localstorage no browser
acessar o console e digitar "localStorage.removeItem('lgpd') */
