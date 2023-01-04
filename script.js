
window.addEventListener('DOMContentLoaded', function() {
	let code=document.getElementById("console").getElementsByTagName("h4");
for(let i=0;i<code.length;i++){
  var div=document.createElement("div");
  div.style="display: flex;";
    div.innerHTML=`
  <button class="button" onclick="copyScripts(this.parentNode.previousElementSibling);">Copy</button>
  <main style="margin:auto 0 0 0;padding:7px;font-size:15px;opacity:0;transition: opacity 0.2s;">Copied!</main>
  `;
	code[i].after(div);
};
  let bml=document.getElementById("bmlcode").getElementsByTagName("a");
  for(let i=0;i<bml.length;i++){
    bml[i].href='javascript:{let x=document.createElement("script");x.src="'+bml[i].dataset.programSrc+'";document.body.appendChild(x);}'
  }
});
function copyScripts(scripts){
	var element = document.createElement("textarea");
  fetch(scripts.dataset.programSrc)
  .then(response => response.text())
  .then(data => {
	navigator.clipboard.writeText(data);
	scripts.nextElementSibling.children[1].style.opacity="0.7";
	setTimeout(function(){scripts.nextElementSibling.children[1].style.opacity="0"},3000);
})};
