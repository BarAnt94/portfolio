var n = Number(prompt("Saisir un nombre entier"));
var result = 0;
if(isNaN(n) || n <= 0)
{
    alert("Non identifié, veuillez tapez un nombre entier");
}
else
{
    let output = "";
    for(let j = 1; j <= n; j++)
    {
        result = j*n;
        output += "<h3>Table de " + j + "</h3>";
        output += "<tr><th>Multiplier par</th><th>Nombre</th><th>Résultat</th></tr>";
        for(let i = 1; i<=10;i++)
        {
            result = i*j;
            output+="<tr><td>" + i + "</td><td>" + j + "</td><td>" + result + "</td></tr>";
        }
        output += "</table><br>";
    }
    document.getElementById("monTableau").innerHTML = output;
}
