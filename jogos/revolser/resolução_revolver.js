function iniciar(valor_limite){ //botão vermelho
    let n=document.getElementById('jogo')
    n.innerHTML=game

    limite_revolver=valor_limite//altera o var global para o limite escolhido pelo usuario

    for(cont=0;cont<limite_revolver-1;cont++){
        capacidade_revolver.innerHTML+=`<img class="municos" src="img/municao.png" width="15px" height="45px" alt="munição">`
    }
}
function iniciar_hack(){
    let e=document.getElementById('jogo')
    e.innerHTML=game_com_hack	
}
function mostrar(){
g=document.getElementById('aviso')
g.innerHTML=v
}
function colocar_municao(){
    balas_mesa[c].classList.add('sumir')// nova bala inserida na camara
let per=Number(document.getElementById('colocasao').value) // document.getElementById()--faz deixa o input sendo uma string, por isso ele precisa ser convertido com Number()--- o typer="number", só faz com que seja permitido escrever numeros dentro da caixa de texto, mas eles nao recebem o tipo number mas sim string
if (per>limite_revolver || per<=0) { // ve se o usuario digitou um numero fora das munições do revolver
alert("tentou trapaçear")
} else{
checagem_de_bala()
    do { 
a=Math.floor(Math.random()*limite_revolver)+1
} while (v.includes(a)) 
    (v.push(a))
}
if (c==limite_revolver) { // o usuario digitara 5 vezes para a condição ser verdadeira
    ganho()
}
}
function checagem_de_bala(){
        let per=Number(document.getElementById('colocasao').value)
        if (v.includes(per)==true)  perdeu() // aqui em baixo é para facilitar o jogo, dando uma dica do quão proximo da ultima bala vc esteve
        i = v[v.length - 1] //.pop n funciona, porque ele REMOVE o ultimuo valor do vetor, jogando-o fora
        s=i-per
        s1=per-i
        if(s>0) aviso_distancia(s)
            else aviso_distancia(s1)
        c++ 
        eg=document.getElementById('aviso2')
        eg.innerHTML=c // aq e para mostrar o contador
}
function perdeu(){
let jogo2=document.getElementById('jogo2')
    jogo2.innerHTML=perder
    let vetor=document.getElementById('aviso3')
    vetor.innerHTML=v.slice(0,limite_revolver-1)
}
function ganho(){
let jogo2=document.getElementById('jogo2')
    jogo2.innerHTML=ganhar
    let vetor=document.getElementById('aviso3')
    vetor.innerHTML=v.slice(0,limite_revolver-1)
}
function aviso_distancia(distacia){
    let bolsonaro=document.getElementById('aviso')
            switch(distacia){
    case 1: bolsonaro.innerHTML="Essa ultima bala passou raspando" 
        break
    case 2: bolsonaro.innerHTML="Essa ultima bala passou perto" 
        break
    case 3: bolsonaro.innerHTML="Essa ultima bala passou longe" 
        break
    case 4: bolsonaro.innerHTML="Essa ultima bala passou longe demais"   
        break
    default: bolsonaro.innerHTML="Essa ultima bala passou longe demaismais"
}
}
//12/01/25 1.02--mudança no visual