const form=document.querySelector(".formulario")
const mascara1=document.querySelector (".mascara")

function mostrarform(){
   form.style.left="70%"
   form.style.transform=("-60%")
   mascara1.style.visibility="visible"
}

function esconderform (){
    form.style.left="-445px"
   mascara1.style.visibility="hidden"
}
