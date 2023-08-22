const buttonTheme = document.getElementById('buttonTheme')
const redondoTheme = document.getElementById('redondoTheme')

/*body*/ 
const body = document.getElementById('body')


/*menu desplegable*/
const menuDesplegable = document.getElementById('menuDesplegable')

/*boton menu*/ 
const buttonMenu = document.getElementById('buttonMenu')


redondoTheme.addEventListener('click',()=>{
    moverFuncion()
})



function moverFuncion(){
     /*TEMA EN NEGRO*/ 
    redondoTheme.style.left= '72%'
    redondoTheme.style.transition= '2s'
    redondoTheme.style.backgroundColor='rgb(146, 146, 146)'

    /*button theme*/
    buttonTheme.style.backgroundColor='black'
   
    /*body*/
    body.style.backgroundColor='#454545' 
    body.style.color='#F9F5F6' 
    body.style.transition= '1s'

  
    

 
   
      menuDesplegable.style.backgroundColor='#272829'

console.log(redondoTheme.offsetLeft)
        /*TEMA EN BLANCO*/ 
    if(redondoTheme.offsetLeft == 194){
        redondoTheme.style.left= '51%'
        redondoTheme.style.backgroundColor='white'

        buttonTheme.style.backgroundColor='rgb(146, 146, 146)'
            /*body*/
        body.style.backgroundColor='#F9F5F6' 
        body.style.transition= '2s'
        body.style.color= 'black'
 
  

      menuDesplegable.style.backgroundColor='rgb(233, 233, 233)'

       }
}


/*boton menu  60px*/ 

let boton = false

buttonMenu.addEventListener('click',()=>{
if(boton==false){
  openMenu()
  boton = true
}
else{
  closeMenu()
  boton = false
}

})


menuDesplegable.style.display='none'

function openMenu(){
  menuDesplegable.style.display='block'
  menuDesplegable.style.left='26%'

}
 
function closeMenu(){

  menuDesplegable.style.display='none'

}



