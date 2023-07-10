let num=0
let num2=0
let x=0
document.getElementsByClassName("card-body").value=1;
function changeNumAdd(){  
    num+=1
    document.getElementById("num").innerHTML=num;
    x = document.getElementsByClassName("card-body").value;
    num2+=x;
    document.getElementById("num2").innerHTML = num2;
}
function changeNumSub()
{
    if(num>0)
    {
        num-=1
        document.getElementById("num").innerHTML=num;
    }
}