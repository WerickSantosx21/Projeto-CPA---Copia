window.addEventListener("scroll", function(){
    let header = document.querySelector('#cabeçalho') 
    header.classList.toggle('rolagem',this.window.scrollY > 0)
})

/* A class rolagem sera adicionado sempre que a janela tiver uma rolagem no eixo Y e que a posição da rolagem seja maior que 1*/