let display =document.querySelector('#display')
function agregar(number) {
    if(display.value==0){
        display.value='';
        display.value+=number
    }else{
        display.value+=number
    }
    
}
function eliminar(num) {
    if(num==0){
        display.value=''
    }else if(num==1){
        display.value=display.value.slice(0,display.value.length-1)
    }
}
function result() {
  if (display.value=="") {
    display.value=0;
    
  } else {
    display.value=eval(display.value);
  }
    
}

function cambiarTema() {
  
  document.body.classList.toggle('theme1');
  let btnTheme=document.getElementById('32')
  if (btnTheme.innerHTML=="DARK") {
    btnTheme.innerHTML ="LIGTH"
  } else {
    btnTheme.innerHTML ="DARK"
  }
  
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  
  cambiarTema();
  
} 
function marcar(keyValue) {
  let obj=document.getElementById(`${keyValue}`)
  obj.setAttribute('class', 'click')
  setTimeout(() => {
    obj.setAttribute('class', 'btn')
}, 200)
}
document.addEventListener('keydown', (event) => {
  var keyValue = event.key;
  var codeValue = event.keyCode;
  console.log(keyValue)
  console.log(codeValue)
  if (codeValue==8) {
    eliminar(1)
    marcar(46)
  } else if(codeValue==13) {
    result()
    marcar(codeValue)
  } else if(codeValue==32){
    cambiarTema()
    marcar(codeValue)
    
  }else if(keyValue >=0){
    agregar(keyValue)
  }else if(keyValue=="/"|| keyValue=="*"||keyValue=="+"||keyValue=="-"||keyValue=="." ){
    agregar(keyValue)
  }else if(keyValue===67){
    eliminar(0)
  }
  marcar(keyValue)
}) 
