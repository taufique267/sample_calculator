function show(value){
    document.getElementById("output").value += value;
}
function Clear(){
    document.getElementById("output").value = "";
}
function calculate(){
    var p=document.getElementById("output").value;
    var q=eval(p);
    document.getElementById("output").value=q;
}
function remove(){
    var p=document.getElementById("output").value;
    var q=p.slice(0,-1);
    document.getElementById("output").value=q;
}