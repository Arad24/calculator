var n = 1;
var n1 = 0;
var n2 = 0;
var mark = '';

// Numbers
function getN(number)
{
    if (n == 1)
    {
        document.getElementById('board').value += number;
        n1 = parseFloat(document.getElementById('board').value);
    }
    else if (n == 2)
    {
        document.getElementById('board').value += number;
        n2 = parseFloat(document.getElementById('board').value);
    }
}

// Marks
function plus()
{
    document.getElementById('board').value = '';
    mark = '+';
    n = 2;
}

function minus()
{
    document.getElementById('board').value = '';
    mark = '-';
    n = 2;
}

function division()
{
    document.getElementById('board').value = '';
    mark = '÷';
    n = 2;
}

// Equal
function equal()
{
    if (mark == '+')
    {
        n = 3;
        document.getElementById('board').value = n1 + n2;
    }
    else if (mark == '-')
    {
        n = 3;
        document.getElementById('board').value = n1 - n2;
    }
    else if (mark == '÷')
    {
        n = 3;
        document.getElementById('board').value = n1 / n2;
    }
    else if (mark == '')
    {
        n = 3;
    }
}

// Restart
function rest()
{
    document.getElementById('board').value = '';
    n = 1;
    n1 = 0;
    n2 = 0;
    mark = '';
}

