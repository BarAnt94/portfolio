let flag = 1;
function changer_style()
{
    // document.getElementById("parag1").classList.toggle("active");
    if(flag == 1)
    {
        document.getElementById("parag1").classList.add("active");
        flag = 0;
    }
    else
    {
        document.getElementById("parag1").classList.remove("active");
        flag = 1;
    }
    // Sans propriété.css
    // document.getElementById("parag1").style.color="white";
    // document.getElementById("parag1").style.backgroundColor="black";
    // document.getElementById("parag1").style.border="1px dotted black";
    // document.getElementById("parag1").style.padding="5px";
}