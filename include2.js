
  window.addEventListener("DOMContentLoaded",(async()=>{
  let headertop=await (await fetch("/headertop.html")).text();
    let headertop2=document.createElement("headertop");
    headertop2.innerHTML=header-top;
    document.body.appendChild(headertop2)
})())
