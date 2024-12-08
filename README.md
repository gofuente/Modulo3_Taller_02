#### Preparacion previa
Se necesita instalar bootstrap utilizando : npm install bootstrap desde la raiz del proyecto.
Se necesita instalar express : npm install express

### Visualizar el proyecto.
Se necesita ejecutar node server.js y seguir las indicaciones sobre que puerto ejecutar.

### Scope.
Para la explicacion de scope se utilizará el archivo app.js
Por ejemplo : 
La variable hacerReservaBoton tiene un scope mientras se este en la pagina index.html (linea 1)
La variable nombre, email, telefono, hay error tiene como scope solo dentro del addEventListener asociado a hacerReservaBoton (linea 6)

### Operadores.
Para determinar si se muestra un mensaje se uso el operador ===  (linea 53)


###Ciclo e iteraciones.
Para implementar un tema dinámico se utilizo la pagina Buscar Medico.
Se utilizo como condicional de busqueda la antiguedad del medico (seleccionando una lista).

### Debugger.
Se utilizo para ello un boton llamado Debugger dentro de la opción de menu Buscar Medico.
El debugger permite establecer un punto de quiebre, a partir del cual se puede evaluar variables y hacer un paso a paso por el programa.


### Try/Catch.
Se utilizo para ello un boton llamado Error dentro de la opción de menu Buscar Medico.
En este caso se intenta utilizar un arreglo de medicos que no existe. 


### Event Loop.
Event Loop es un mecanismo que añade un navegador cuando se ejecuta un archivo de javascript, permitiendo que la aplicación no se
bloquee al esperar la respuesta.
Utiliza para ello : una task queue que es una cola de tareas.
El call stack es un mecanimo que permite establece el orden de ejecución en función de si es una microtarea o macrotarea.
Queda en un estado de espera esperando si hay nuevas tareas que ejecutar.