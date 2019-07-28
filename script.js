var i;

function calculateIQ()
{
    let score=0;

    //document.getElementById("quizSection").style.display= "none";
    document.getElementById("resultDiv").style.display= "block";
    document.getElementById("footer").style.position= "fixed";
    document.getElementById("footer").style.width= "100%";
    document.getElementById("footer").style.bottom= "0";
    document.getElementById("mainPage").style.display= "block";
    document.getElementById("mainPage").style.color= "blue";
   // document.getElementById("answer").style.color= "green";



    //Loop for Right answer and +10
    for(i=1; i<=6; i++)
    {
        if(document.getElementById(i).checked)
        {
            score= score +10;
        }
    }

    //Loop for wrong answer -5
    for(i=1; i<=6; i++)
    {
        for(j=1; j<=3; j++)
        {
            if(document.getElementById(i+ `${j}`).checked)
            {
                score= score- 5;
            }
        }
    }
    
    
    document.getElementById("result").innerHTML= score +" Out of 60";

    score=0;
}

   window.scrollBy(100, 0);