// 3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.

(function(){
	// Variables
	let lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");

	// Funciones
	let agregarTarea = function(){
		let tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}

		// Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";

		for (let  i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};
	let comprobarInput = function(){
		tareaInput.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};

	let eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};

	// Eventos

	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);

	// Borrando Elementos de la lista
	for (let i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}
}());