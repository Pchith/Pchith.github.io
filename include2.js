
  window.addEventListener("DOMContentLoaded",(async()=>{
  let header-top=await (await fetch("/header-top.html")).text();
    let header-top2=document.createElement("header-top");
    header-top2.innerHTML=header-top;
    document.body.appendChild(header-top2)
})())
