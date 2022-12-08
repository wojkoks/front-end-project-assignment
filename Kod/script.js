//let specbutton = document.getElementById('specbutton');
let specbutton = document.getElementsByClassName('specbutton');
for (let i = 0;i<specbutton.length;i++)
{
    specbutton[i].addEventListener("click",()=>{
        alert("gitara siema");
    })
}
let rezbutton = document.getElementsByClassName('rezbutton');
for (let i = 0;i<rezbutton.length;i++)
{
    rezbutton[i].addEventListener("click",()=>{
        alert("URRRRA");
    })
}