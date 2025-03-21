var capacidade_revolver=document.getElementById('municoes')
var limite_revolver
let a=Math.floor(Math.random()*6)+1
let v=[]
var balas=[]
v.push(a) // o jogo deve começar com uma bala no tambor
let i
let c=0
let s
var balas_mesa=document.getElementsByClassName('municos')
let s1
let game=`
<form>
<div id="jogodojogo">
<div id="jogo2">
<input type="number" id="colocasao" id="colocasao" placeholder="digite onde está a munição"><br>
<input type="button" value="OK" id="confirmar"  onclick="colocar_municao()">
<div id="reto">
<p id="aviso"></p>
</div>
<div id="reto">
<p>Balas no tambor:</p>
<p id="aviso2"> 1</p>
</div>
</div>
</form>
</div>
`
let game_com_hack=`
<h1>BOLSONARO</h1>
<form>
<div id="jogodojogo">
<div id="jogo2">
<input type="number" id="colocasao" placeholder="digite onde está a munição"><br>
<input type="button" value="OK" id="confirmar"  onclick="colocar_municao()">
<input type="button" value="mostrar" onclick="mostrar()">
<div id="reto">
<p id="aviso"></p>
</div>
<div id="reto">
<p>Balas no tambor:</p>
<p id="aviso2"> 1</p>
</div>
</div>
</form>
</div>
`
let ganhar=`
<div id="fimal">
<h1>VOCE GANHOU</h1>
<img id="imagem" src="img/vitoria.png" width="500" height="300">
<h3>Voce conseguiu vencer a roleta russa do IF</h3>
<h3>As câmaras municiadas foram</h3>
<p id="aviso3"></p>
<h3>Desejas repetir?</h3>
<form>
<input type="button" class="som" value="SIM" id="botaopika" onclick="window.location.reload()">
</form>
</div>
`
let perder=`
<div id="fimal">
<h1>VOCE MORREU</h1>
<img id="imagem" src="img/tiro.png" width="500" height="300">
<h3>Voce perdeu na roleta</h3>
<h3>As câmaras municiadas foram</h3>
<p id="aviso3"></p>
<h3>Desejas repetir?</h3>
<form>
<input type="button" class="som" value="SIM" id="botaopika" onclick="window.location.reload()">
</form>
</div>
`
