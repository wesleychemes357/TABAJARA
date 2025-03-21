var express=require('express')
var app=express()

app.get('/', (req,res)=>{
    res.render('index.html')
})
app.listen(3000, () => {// arrow function
    console.log('server está a rodar');
});