function myfunction()
{
    var txt1=parseInt(document.getElementById("txt1").value);
    var txt2=parseInt(document.getElementById("txt2").value);
    sum = txt1 + txt2;
    document.getElementById("txt3").value=sum;
}
function myreset()
{
    document.getElementById("txt3").value="0";
    document.getElementById("txt1").value=" ";
    document.getElementById("txt2").value=" ";
}