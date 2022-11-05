const txt_num1 = document.getElementById("num1");
const txt_num2 = document.getElementById("num2");
const txt_op = document.getElementById("op");
const btn_resultado = document.getElementById("btn_resultado");
const p_resultado = document.getElementById("resultado");
let resultado_operacion;
let num1;
let num2;
let operacion;
btn_resultado.addEventListener('click',calcular); // si el usuario da click en el boton entonces se ejecuta la funcion calcular
function calcular(){
    num1 = parseInt(txt_num1.value);
    num2 = parseInt(txt_num2.value);
    operacion = txt_op.value;
    
    if((operacion== "+" || operacion=="-" || operacion=="*" || operacion=="/") && (!isNaN(num1) && !isNaN(num2)) ){
        
        switch (operacion){
            case "+":
                resultado_operacion=num1+num2;
                
                break;
            case "-":
                resultado_operacion=num1-num2;
                
                break;
            case "*":
                resultado_operacion=num1*num2;
                
                break;
            case "/":
                if(num2!="0"){
                    resultado_operacion=num1/num2;
                   
                }else{
                    p_resultado.innerText("imposible dividir por:" + num2 )
                }
        } 
        p_resultado.style="color:white";
        p_resultado.innerText = resultado_operacion;
    }else{
        p_resultado.style="color:red";
        p_resultado.innerText="operacion imposible";
    }

}