//window.addEventListener('load', function () {

let url = new URL(window.location.href);
let identificador = url.searchParams.get("tid");
if (identificador === null) {
  console.log("URL ERROR");
} else {
  //let reference = firebase.database().ref('estudiantes/' + identificador);
  console.log(identificador);
}

let element = document.createElement('h1');
element.innerHTML = identificador;
const bodyTag = document.querySelector("body");
bodyTag.appendChild(element);

const image = document.querySelector('#image');
let pathToImage = "/images/"+identificador+".png";
image.setAttribute("src", pathToImage);

const btn = document.querySelector('#btn');
btn.addEventListener("click",function() {    
    btn.href = '/files/'+identificador+'.pdf';
    btn.target="_blank";
    btn.click();
    //location.href = "/files/"+identificador+".pdf";
});
//});