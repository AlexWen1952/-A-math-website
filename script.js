function addition() 
{
    // Get a number
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Addition caculation
    var sum = num1 + num2;

    // Print the result on the page
    document.getElementById('result').innerHTML = 'Result： ' + sum;
}

function multiplication() 
{
    // Get a number
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Multiplication caculation
    var product = num1 * num2;

    // Print the result on the page
    document.getElementById('result').innerHTML = 'Result： ' + product;
}