function run(){
  let htmlcode=document.querySelector(".lunguages #codeHTML").value;
  
  let csscode="<style>"+document.querySelector(".lunguages #codeCSS").value+"</style>";
  let jscode=document.querySelector(".lunguages #codeJS").value;
  let output =document.querySelector(".output #running");

  output.contentDocument.body.innerHTML=htmlcode+csscode;
  output.contentWindow.eval(jscode);

}

document.querySelector(".lunguages #codeHTML").addEventListener("keyup",run);
document.querySelector(".lunguages #codeCSS").addEventListener("keyup",run);
document.querySelector(".lunguages #codeJS").addEventListener("keyup",run);