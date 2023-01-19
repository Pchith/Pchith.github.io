
  window.addEventListener("DOMContentLoaded",(async()=>{
  let header=await (await fetch("/header.html")).text();
    let header2=document.createElement("header");
    header2.innerHTML=header;
    document.body.appendChild(header2)
})())
