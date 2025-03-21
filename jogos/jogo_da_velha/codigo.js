var jogo=[0,0,0,0,0,0,0,0,0]
var jogo_end=document.getElementsByClassName('jogo_velha')
var alel=[]
var permisao_ia=true
var jogador=1
function iniciar_game(condicao_player2, jogo_aparecer){
    if(condicao_player2==false) jogador*=-1
    jogo_aparecer.classList.remove('sumir')
    for(c=0;c<9;c++){
        jogo[c]=0
        jogo_end[c].style.backgroundImage=null
        alel[c]=0
    } 
    permisao_ia=condicao_player2
}
function jogada_ia(){
    let numero_alel=0
    do numero_alel=Math.floor(Math.random()*8)+1
      while (alel.includes(numero_alel)) alel.push(numero_alel)//esquema de sortear numero e nao repetir numero
        if(jogo[alel[alel.length-1]]==0) jogo[alel[alel.length-1]]=2// ele pega o ultimo valor de alel, substitui na posição do jogo, por 2
     else jogada_ia()
    console.log(jogo+'\n'+alel+'\n'+jogador)
    jogada_player(alel[alel.length-1])
    
}
function jogada_player(posicao){
if(jogo[posicao]==0 && jogador==1) {
    jogo_end[posicao].style.backgroundImage="url('img_jogo_da_velha/x.png')"
    jogo_end[posicao].style.backgroundSize= 'cover'    
    jogo[posicao]=1//valor que o jogador é representado por 1
    vitoria()
    if(permisao_ia)jogada_ia()//continuar essa condição
        else jogador*=-1
    //fazer if para para o jogador 2 poder jogar
}
else if(jogo[posicao]==2 || jogador==-1){
    jogo_end[posicao].style.backgroundImage="url('img_jogo_da_velha/o.png')"
    jogo_end[posicao].style.backgroundSize= 'cover' 
    jogo[posicao]=2
    vitoria()
    jogador*=jogador
}

}
console.log("lembra de por um velho atras do jogo da velha'para ter um visual impressionate fera'")
/*
function subsl1c2(x){
    if(jogo[1]==0){
        x.style.backgroundImage="url('img_jogo_da_velha/x.png')"
        x.style.backgroundSize= 'cover'    
        jogo[1]=1
        vitoria()
        jogada_ia()
    }
    if(jogo[1]==2){
        x.style.backgroundImage="url('img_jogo_da_velha/o.png')"
        x.style.backgroundSize= 'cover'  
        jogo[1]=2
    } 
}
function subsl1c3(x){
    if(jogo[2]==0){
        x.style.backgroundImage="url('img_jogo_da_velha/x.png')"
        x.style.backgroundSize= 'cover'    
        jogo[2]=1
        vitoria()
        jogada_ia()
    }
    if(jogo[2]==2){
        x.style.backgroundImage="url('img_jogo_da_velha/o.png')"
        x.style.backgroundSize= 'cover'
        jogo[2]=2
    }
}
function subsl2c1(x){
    if(jogo[3]==0){
        x.style.backgroundImage="url('img_jogo_da_velha/x.png')"
        x.style.backgroundSize= 'cover'    
        jogo[3]=1
        vitoria()
        jogada_ia()
    }
    if(jogo[3]==2){
        x.style.backgroundImage="url('img_jogo_da_velha/o.png')"
        x.style.backgroundSize= 'cover'
        jogo[3]=2
    }
}
function subsl2c2(x){
    if(jogo[4]==0){
        x.style.backgroundImage="url('img_jogo_da_velha/x.png')"
        x.style.backgroundSize= 'cover'    
        jogo[4]=1
        vitoria()
        jogada_ia()
    }
    if(jogo[4]==2){
        x.style.backgroundImage="url('img_jogo_da_velha/o.png')"
        x.style.backgroundSize= 'cover'
        jogo[4]=2
    }
}
function subsl2c3(x){
    if(jogo[5]==0){
        x.style.backgroundImage="url('img_jogo_da_velha/x.png')"
        x.style.backgroundSize= 'cover'    
        jogo[5]=1
        vitoria()
        jogada_ia()
    }
    if(jogo[5]==2){
        x.style.backgroundImage="url('img_jogo_da_velha/o.png')"
        x.style.backgroundSize= 'cover'
        jogo[5]=2
    }
}
function subsl3c1(x){
    if(jogo[6]==0){
        x.style.backgroundImage="url('img_jogo_da_velha/x.png')"
        x.style.backgroundSize= 'cover'    
        jogo[6]=1
        vitoria()
        jogada_ia()
    }
    if(jogo[6]==2){
        x.style.backgroundImage="url('img_jogo_da_velha/o.png')"
        x.style.backgroundSize= 'cover'
        jogo[6]=2
    }
}
function subsl3c2(x){
    if(jogo[7]==0){
        x.style.backgroundImage="url('img_jogo_da_velha/x.png')"
        x.style.backgroundSize= 'cover'    
        jogo[7]=1
        vitoria()
        jogada_ia()
    }
    if(jogo[7]==2){
        x.style.backgroundImage="url('img_jogo_da_velha/o.png')"
        x.style.backgroundSize= 'cover'
        jogo[7]=2
    }
}
function subsl3c3(x){
    if(jogo[8]==0){
        x.style.backgroundImage="url('img_jogo_da_velha/x.png')"
        x.style.backgroundSize= 'cover'    
        jogo[8]=1
        vitoria()
        jogada_ia()
    }
    if(jogo[8]==2){
        x.style.backgroundImage="url('img_jogo_da_velha/o.png')"
        x.style.backgroundSize= 'cover'
        jogo[8]=2
    }
}
if(alel[alel.length-1]==0) subsl1c1(document.getElementById('l1c1'))//executar a função respectiva com o ultimo numero de alel
    else if(alel[alel.length-1]==1) subsl1c2(document.getElementById('l1c2'))
    else if(alel[alel.length-1]==2) subsl1c3(document.getElementById('l1c3'))
    else if(alel[alel.length-1]==3) subsl2c1(document.getElementById('l2c1'))
    else if(alel[alel.length-1]==4) subsl2c2(document.getElementById('l2c2'))
    else if(alel[alel.length-1]==5) subsl2c3(document.getElementById('l2c3'))
    else if(alel[alel.length-1]==6) subsl3c1(document.getElementById('l3c1'))
    else if(alel[alel.length-1]==7) subsl3c2(document.getElementById('l3c2'))
    else if(alel[alel.length-1]==8) subsl3c3(document.getElementById('l3c3'))
    codigo do final da jogada da ia anterior
*/