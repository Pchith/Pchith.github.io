
  window.addEventListener("DOMContentLoaded",(async()=>{
  let header=await (await fetch("/header.html")).text();
    let header2=document.createElement("header");
    header2.innerHTML=header;
    document.body.appendChild(header2)
})())

  window.addEventListener("DOMContentLoaded",(async()=>{
  let headertop=await (await fetch("/headertop.html")).text();
    let headertop2=document.createElement("headertop");
    headertop2.innerHTML=headertop;
    document.body.insertBefore(headertop2,document.body.firstChild);
})())
