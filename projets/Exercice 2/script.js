// let test = 7;
// var n = Number(prompt("Saisir un nombre entier "));
// function Factorielle(num)
//{
    // let resultat = 1;
    // let i =1;
    // while(i <= num)
    //{
    //  resultat*=i;
    //}
    // for(let i = 1; i <= num ;i++)
    // {
    //     resultat *= i;
    // }
    // if(num <=1)
    // {
    //     return 1;
    // }
    // else{
    //     return num * Factorielle(num-1);
    // }
//}
function Factorielle()
{
    let i = parseInt(document.getElementById("Input").value);
    let resultat = 1 , j = 1;
    while(j <= i) resultat *= j++;
    document.getElementById("result").innerText = "Résultat : " + resultat;
}
// function SommeFactorielle(num)
// {
//   let resultat = 0;
//   for(let i = 1;i<=num;i++)
//   {
//      resultat += Factorielle(num);
//   }
// }
function SommeFactorielle()
{
    let somme = 0;
    let n = parseInt(document.getElementById("Input").value);
    for(let i = 1; i <= n;i++)
    {
        let fact = 1;
        for(let j = 1; j <= i; j++)
        {
            fact *= j;
        }
        somme += fact;
    }
   document.getElementById("result").innerText = "Résultat : " + somme;
}

// document.getElementById("bouton").addEventListener('click',function(){
//             const inputValue = document.getElementById("Input").value;
//             if (isNaN(inputValue) || inputValue < 0) {
//                 document.getElementById("result").innerHTML = "Veuillez entrer un nombre entier positif.";
//             } else {
//                 // const result = Factorielle(inputValue);
//                 const result = SommeFactorielle(inputValue);
//                 document.getElementById("result").innerHTML = result;
//             }
//         });
// alert("Le résulat factorielle est : " + Factorielle(n));