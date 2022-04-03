function Factorial()
{
    var N = parseInt(document.getElementById('n').value);
    if (N == null)
    {
        document.getElementById('h2').innerHTML = ("🙏Enter The Value🙏");
    }
    function factorial(x)
    {
        if (x == 0)
            return 1;
        else
            return x * factorial(x - 1);
    }
    document.getElementById('h2').innerHTML = factorial(N);
}