document.getElementById('add').addEventListener('click', function(){
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = n1 + n2;
});

document.getElementById('sub').addEventListener('click', function(){
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = n1 - n2;
});

document.getElementById('mul').addEventListener('click', function(){
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = n1 * n2;
});

document.getElementById('div').addEventListener('click', function(){
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = n1 / n2;
});