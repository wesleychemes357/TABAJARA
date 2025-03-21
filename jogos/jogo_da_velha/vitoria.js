var pontuacao_p1=0
var pontuacao_p2=0
var pontuacoes=document.getElementsByClassName('pontuacao')
function vitoria(){
    if(jogo[0]==1 && jogo[1]==1 && jogo[2]==1) player1_win() //horizontal
        else if(jogo[0]==2 && jogo[1]==2 && jogo[2]==2) player2_win()

    else if(jogo[3]==1 && jogo[4]==1 && jogo[5]==1) player1_win()
        else if(jogo[3]==2 && jogo[4]==2 && jogo[5]==2) player2_win()

    else if(jogo[6]==1 && jogo[7]==1 && jogo[8]==1) player1_win()
        else if(jogo[6]==2 && jogo[7]==2 && jogo[8]==2) player2_win()

    else if(jogo[0]==1 && jogo[4]==1 && jogo[8]==1) player1_win()// diagonal
        else if(jogo[0]==2 && jogo[4]==2 && jogo[8]==2) player2_win()

    else if(jogo[2]==1 && jogo[4]==1 && jogo[6]==1) player1_win()
        else if(jogo[2]==2 && jogo[4]==2 && jogo[6]==2) player2_win()

    else if(jogo[0]==1 && jogo[3]==1 && jogo[6]==1) player1_win()// coluna
        else if(jogo[0]==2 && jogo[3]==2 && jogo[6]==2) player2_win()
            
     else if(jogo[1]==1 && jogo[4]==1 && jogo[7]==1) player1_win()
        else if(jogo[1]==2 && jogo[4]==2 && jogo[7]==2) player2_win()
    
    else if(jogo[2]==1 && jogo[5]==1 && jogo[8]==1) player1_win()
        else if(jogo[2]==2 && jogo[5]==2 && jogo[8]==2) player2_win()

            else console.log("gordo mamon")
}    
function player1_win(){
    console.log("player1 win")
    document.getElementById('substituicao2').classList.remove('sumir')
    document.getElementById('substituicao').classList.add('sumir')
    document.getElementById('texto_vitoria').innerText='player 1 wins'
    pontuacao_p1++
    pontuacoes[0].innerText=pontuacao_p1
}
function player2_win(){
    console.log('player2 win')
    document.getElementById('substituicao2').classList.remove('sumir')
    document.getElementById('substituicao').classList.add('sumir')
    document.getElementById('texto_vitoria').innerText='player 2 wins'
    pontuacao_p2++
    pontuacoes[1].innerText=pontuacao_p2
}
function rejogar(){
    for(c=0;c<9;c++){
        jogo[c]=0
        jogo_end[c].style.backgroundImage=null
        alel[c]=0
    }
    document.getElementById('substituicao').classList.remove('sumir')
}
