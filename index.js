var datos= []

        

function guardar(){
    
    
    var nombres= document.getElementById("nombres").value
    var apellidos= document.getElementById("apellidos").value
    var direccion= document.getElementById("direccion").value
    var telefono= document.getElementById("telefono").value
    var cedula= document.getElementById("cedula").value
    var correo= document.getElementById("correo").value   
    

    var persona= {
        nombres: nombres,
        apellidos: apellidos,
        direccion: direccion,
        telefono: telefono,
        cedula: cedula,
        correo: correo
    }  
    
    

    var posicion= datos.findIndex((item)=>item.cedula== cedula)
   
        
    if(posicion== -1){
        datos.push(persona)
        Swal.fire({
            icon: "success",
            title: "Que Bien",
            text: "Guardado correctamente",            
          });
    }

    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "La cedula ya existe",            
     });
    } 
    
console.log(datos)
}

function consultar(){   

    var cedulaconsulta= parseInt(document.getElementById("cedulaconsulta").value)
    
    //console.log(typeof(cedulaconsulta))
    
    
    
    
    resultado= datos.filter((item) => item.cedula == cedulaconsulta)
    

    for (let index = 0; index < resultado.length; index++) {

         
        console.log(typeof(parseInt(resultado[index].cedula)))       
       
        if( cedulaconsulta != parseInt(resultado[index].cedula)){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Campos vacios",            
         });
        }

        else{
            document.getElementById("salNombres").innerHTML= JSON.stringify(resultado[index].nombres)
            document.getElementById("salApellidos").innerHTML= JSON.stringify(resultado[index].apellidos)
            document.getElementById("salDireccion").innerHTML= JSON.stringify(resultado[index].direccion)
            document.getElementById("salTelefonos").innerHTML= JSON.stringify(resultado[index].telefono)
            document.getElementById("salCedula").innerHTML= JSON.stringify(resultado[index].cedula)
            document.getElementById("salCorreo").innerHTML= JSON.stringify(resultado[index].correo)
        }
        
    }
   
   
    

   

 

   // document.getElementById("salNombres").innerHTML= 
  /*   document.getElementById("salApellidos").innerHTML= JSON.stringify(resultado[item].apellidos);
    document.getElementById("salCedula").innerHTML= JSON.stringify(resultado[item].cedula); */
   

    


   
}

