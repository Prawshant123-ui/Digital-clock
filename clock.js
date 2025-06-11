setInterval(function(){
    let x = new Date();
    let hours =String(x.getHours()).padStart(2,"0") 
    let minutes =  String(x.getMinutes()).padStart(2,"0") 
    let seconds = String(x.getSeconds()).padStart(2,"0") 
    let time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = time;
}, 1000);