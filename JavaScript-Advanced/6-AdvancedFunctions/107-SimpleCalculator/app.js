function calculator() {
    let a;
    let b;
    let result;

    function init(selectorOne, selectorTwo, resultSelector) {
        a = document.querySelector(selectorOne);
        b = document.querySelector(selectorTwo);
        result = document.querySelector(resultSelector);
        console.log(a,b,result);
        
    }

    function add() {
     return result.value = Number(a.value) + Number(b.value);
    }

    function subtract() {
       return result.value = Number(a.value) - Number(b.value);
    }

    return {
        init,
        add,
        subtract,    
    }
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');