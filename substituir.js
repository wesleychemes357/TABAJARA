function substituir_banner(){
    if(c>textos.length-1 || c<1){
        alert("LIMITE")
    } else{
document.getElementById('jesse_pinkman').innerHTML=`<img src="img/`+c+`.png">`
document.getElementById('textos_wallpaper').innerHTML=textos[c]
}

}
function contador(valor){
    c+=valor
    substituir_banner()
}//função da pag inicial


document.getElementById("main_cabecalho").innerHTML=cabecalho

document.getElementById("main_rodape").innerHTML=rodape//funções para todas as pags