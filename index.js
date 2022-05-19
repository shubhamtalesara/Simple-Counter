var inc= document.getElementById('increase')
var dec= document.getElementById('decrease')
var res= document.getElementById('reset')
var swap= document.getElementById('swap')
var count= 0

function onIncrease(){
    count=count+1
    document.getElementById('counter').textContent=count
    if (count>0){
        document.getElementById('counter').style="color: green;"
    }
}
function onDecrease(){
    count=count-1
    document.getElementById('counter').textContent=count
    if (count<0){
        document.getElementById('counter').style="color: red;"
    }
}
function onReset(){
    count=0
    document.getElementById('counter').textContent=count
    if (count==0){
        document.getElementById('counter').style="color: black;"
    }
}


inc.addEventListener('click', onIncrease)
dec.addEventListener('click', onDecrease)
res.addEventListener('click', onReset)