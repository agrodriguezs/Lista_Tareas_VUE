const App = new Vue({
    el: '#app',
    data: {
        titulo: 'Lista de Tareas',
        tareas: [],
        nuevaTarea: null,
        mensajeError: null
    },
    methods:{
        adicionarTarea(){
            if (this.nuevaTarea && this.nuevaTarea.length >2){
                this.mensajeError = null;
                this.tareas.push({
                    contenido: this.nuevaTarea,
                    status: false
                });
                this.nuevaTarea = '';
            }else{
                this.mensajeError = "Escribe una tarea concreta";   
            }
          
        },
        modificarTarea(index){
         this.tareas[index].status = !this.tareas[index].status;
        },
        eliminarTarea(index){

          this.tareas.splice(index, 1);
        }
    }
});