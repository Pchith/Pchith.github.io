const sha256 = async (text) => {
    const uint8  = new TextEncoder().encode(text)
    const digest = await crypto.subtle.digest('SHA-256', uint8)
    return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2,'0')).join('')
}
function getCookieValue(key) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        var cookiesArray = cookie.split('='); 
        if (cookiesArray[0].trim() == key.trim()) { 
            return cookiesArray[1];
        }
    }
    return '';
}
let archive=document.body.innerHTML;
document.body.innerHTML="このサイトのパスワードを入力(悪用防止)<br>";
let input=document.createElement("input");
input.type="text";
input.id="password";
document.body.appendChild(input);
let button=document.createElement("button");
button.innerHTML="OK"
button.onclick=async function(){
  if(await sha256(document.getElementById("password").value)=="92f1d3fbc0823fd59d8e774427379745dbf25824d7402e20387630ef3b4940e3"){
    document.body.innerHTML=archive;
    document.cookie="patiban=ok;path=/;domain=ptbnth.github.io;max-age=2147483647";
    location.reload();
  }else{
    alert("パスワードが違います。")
  }
}
document.body.appendChild(button);
if(getCookieValue("patiban")=="ok"){
  document.body.innerHTML=archive;
}

