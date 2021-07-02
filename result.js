function update(value){
    document.getElementById("result").innerHTML+=value

}
function solve(){
    let exp = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML=eval(exp);
}
function erase(){
    document.getElementById("result").innerHTML="";
}

function reset(){
    let exp = document.getElementById("result").innerHTML;
    let result = exp.substring(0 ,exp.length - 1);
    document.getElementById("result").innerHTML=result;
}