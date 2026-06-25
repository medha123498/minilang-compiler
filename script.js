function compile(){

let code=document.getElementById("code").value;

if(code.includes("print"))
{
document.getElementById("result").innerHTML=
"✅ Compilation Successful";
}
else
{
document.getElementById("result").innerHTML=
"❌ Syntax Error";
}

}
