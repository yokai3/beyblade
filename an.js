function ad(){
    
    
    let pes = document.getElementById("valor").value;
    let tip= document.getElementById("nome").value;
    let cor = document.getElementById("cor").value;
    let cust = pes * 1.5;
    alert(`O beyblade do tipo `+tip+" e cor "+ cor +", que pesa " +pes+" gramas foi ordenado pelo preço de R$"+cust)

    document.getElementById("valor").value = "";
    document.getElementById("cor").value = "";
    let res = document.getElementById("res");
    res.innerHTML = "";
    document.getElementById("nome").value = "";
    document.getElementById("nome").focus();
}

function so(){
    let res = document.getElementById("res");
    res.innerHTML = "";

    let peso = document.getElementById("valor").value;
    let cust = peso* 1.5;
    res.innerHTML = peso+ " gramas custarão R$"+cust ;


    document.getElementById("nome").focus();
}