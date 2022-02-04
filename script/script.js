window.onload = function(){
    const incremento1 = document.getElementById("incremento1");
    const decremento1 = document.getElementById("decremento1");
    const qtd1 = document.getElementById("qtd1");
    const valorTotal1 = document.getElementById("valorTotal1");
    const incremento2 = document.getElementById("incremento2");
    const decremento2 = document.getElementById("decremento2");
    const qtd2 = document.getElementById("qtd2");
    const valorTotal2 = document.getElementById("valorTotal2");
    const incremento3 = document.getElementById("incremento3");
    const decremento3 = document.getElementById("decremento3");
    const qtd3 = document.getElementById("qtd3");
    const valorTotal3 = document.getElementById("valorTotal3");
    const incremento4 = document.getElementById("incremento4");
    const decremento4 = document.getElementById("decremento4");
    const qtd4 = document.getElementById("qtd4");
    const valorTotal4 = document.getElementById("valorTotal4");
    const incremento5 = document.getElementById("incremento5");
    const decremento5 = document.getElementById("decremento5");
    const qtd5 = document.getElementById("qtd5");
    const valorTotal5 = document.getElementById("valorTotal5");
    const incremento6 = document.getElementById("incremento6");
    const decremento6 = document.getElementById("decremento6");
    const qtd6 = document.getElementById("qtd6");
    const valorTotal6 = document.getElementById("valorTotal6");

    var qtdA = 0;
    incremento1.addEventListener('click', function(){
        qtdA++;
        qtd1.value = qtdA;
        resultado = Number(qtd1.value)*Number(29.90);
        valorTotal1.value = resultado.toFixed(2);
    });
    decremento1.addEventListener('click', function(){
        if(qtd1.value>=1){
            qtdA--;
            qtd1.value = qtdA;
            resultado = Number(qtd1.value)*Number(29.90);
            valorTotal1.value = resultado.toFixed(2);
        } else{
            console.log("");
        };
    });

    var qtdB = 0;
    incremento2.addEventListener('click', function(){
        qtdB++;
        qtd2.value = qtdB;
        resultado = Number(qtd2.value)*Number(49.90);
        valorTotal2.value = resultado.toFixed(2);
    });
    decremento2.addEventListener('click', function(){
        if(qtd2.value>=1){
            qtdB--;
            qtd2.value = qtdB;
            resultado = Number(qtd2.value)*Number(49.90);
            valorTotal2.value = resultado.toFixed(2);
        } else{
            console.log("");
        };
    });

    var qtdC = 0;
    incremento3.addEventListener('click', function(){
        qtdC++;
        qtd3.value = qtdC;
        resultado = Number(qtd3.value)*Number(19.90);
        valorTotal3.value = resultado.toFixed(2);
    });
    decremento3.addEventListener('click', function(){
        if(qtd3.value>=1){
            qtdC--;
            qtd3.value = qtdC;
            resultado = Number(qtd3.value)*Number(19.90);
            valorTotal3.value = resultado.toFixed(2);
        } else{
            console.log("");
        };
    });

    var qtdD = 0;
    incremento4.addEventListener('click', function(){
        qtdD++;
        qtd4.value = qtdD;
        resultado = Number(qtd4.value)*Number(189.90);
        valorTotal4.value = resultado.toFixed(2);
    });
    decremento4.addEventListener('click', function(){
        if(qtd4.value>=1){
            qtdD--;
            qtd4.value = qtdD;
            resultado = Number(qtd4.value)*Number(189.90);
            valorTotal4.value = resultado.toFixed(2);
        } else{
            console.log("");
        };
    });

    var qtdE = 0;
    incremento5.addEventListener('click', function(){
        qtdE++;
        qtd5.value = qtdE;
        resultado = Number(qtd5.value)*Number(199.90);
        valorTotal5.value = resultado.toFixed(2);
    });
    decremento5.addEventListener('click', function(){
        if(qtd5.value>=1){
            qtdE--;
            qtd5.value = qtdE;
            resultado = Number(qtd5.value)*Number(199.90);
            valorTotal5.value = resultado.toFixed(2);
        } else{
            console.log("");
        };
    });

    var qtdF = 0;
    incremento6.addEventListener('click', function(){
        qtdF++;
        qtd6.value = qtdF;
        resultado = Number(qtd6.value)*Number(39.90);
        valorTotal6.value = resultado.toFixed(2);
    });
    decremento6.addEventListener('click', function(){
        if(qtd6.value>=1){
            qtdF--;
            qtd6.value = qtdF;
            resultado = Number(qtd6.value)*Number(39.90);
            valorTotal6.value = resultado.toFixed(2);
        } else{
            console.log("");
        };
    });

}