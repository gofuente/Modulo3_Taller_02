

const filtrarBoton = document.getElementById("btn_FiltrarMedico");
const debuggerBoton = document.getElementById("btn_Debugger");
const filtrarBotonError = document.getElementById("btn_FiltrarMedicoError");
const medicosLista = document.getElementById("idListaMedicos");

//console.log(filtrarBoton);

const medicos = [
    {
      nombre: "Juan Guzman",
      especialidad: "Medicina Interna",
      antiguedad : 10,
    },
    {
        nombre: "Luis Perez",
        especialidad: "Ginecologia y Obstetricia",
        antiguedad : 20,
      },
      {
        nombre: "Josefina Maturana",
        especialidad: "Psicologia",
        antiguedad : 5,
      },      
      {
        nombre: "Marcela Muñoz",
        especialidad: "Anestesiologa",
        antiguedad : 2,
      },        
  ];


  const idAntiguedadIni = document.getElementById("IdAntiguedad");
  medicosLista.innerHTML = '';
  var antiguedadIni = idAntiguedadIni.options[idAntiguedadIni.selectedIndex].value;
  const medicosFiltradosIni = medicos.filter((medico) => parseInt(medico.antiguedad) >= antiguedadIni);
  if (medicosFiltradosIni.length > 0){

    medicosFiltradosIni.forEach(medico => {
      const li = document.createElement('li');
      li.textContent = medico.nombre; 
      //alert(medico.nombre);
      medicosLista.appendChild(li);
    });      
  }


  filtrarBotonError.addEventListener('click', async () => {
    //alert("filtro error");
    try {
        //arreglo medicosNoExiste
      const medicosFiltrados = medicosNoExiste.filter((medico) => parseInt(medico.antiguedad) >= 20);
    } catch (error){
      alert(error)
    }

  });


  debuggerBoton.addEventListener('click', async () => {
    const idAntiguedad = document.getElementById("IdAntiguedad");
    var antiguedad = idAntiguedad.options[idAntiguedad.selectedIndex].value;
    debugger;
    console.log(antiguedad);

  });



  filtrarBoton.addEventListener('click', async () => {
    const idAntiguedad = document.getElementById("IdAntiguedad");
    //document.getElementById('medicosEncontrados').css("visibility","hidden")
    medicosLista.innerHTML = '';
    var antiguedad = idAntiguedad.options[idAntiguedad.selectedIndex].value;
    //alert(antiguedad);
    const medicosFiltrados = medicos.filter((medico) => parseInt(medico.antiguedad) >= antiguedad);
    if (medicosFiltrados.length > 0){

      //document.getElementById('medicosEncontrados').css("visibility","visible")
      medicosFiltrados.forEach(medico => {
        const li = document.createElement('li');
        li.textContent = medico.nombre; 
        alert(medico.nombre);
        medicosLista.appendChild(li);
      });      
    }
});
