function ingresar(){
    var usu=document.getElementById("txtusu").value;
    var con=document.getElementById("txtcon").value;
    
    if(usu == "jhon"){
        if(con == "123"){
            
            window.open("https://www.youtube.com/watch?v=Yxh1b5hAyvc");
        }else{
            alert("contraseña errada");
        }
    }else{
        álert("usuario errado");
    }
    
}

function salir(){
    alert("fin de registro");
    window.close();
}