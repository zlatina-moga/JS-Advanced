function calc() {
    const firstNum = document.getElementById("num1").value;
    const secondNum = document.getElementById("num2").value;

    const sumNum = Number(firstNum) + Number(secondNum);
    document.getElementById('sum').value = sumNum;
}
