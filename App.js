const App = new Vue({
    el: '#app',
    data: {
        titulo: 'Lista de Tareas',
        tareas: [],
        nuevaTarea: null,
        mensajeError: null
    },
    created(){
        let datosDB = JSON.parse(localStorage.getItem('tareas-vue'));
        id (datosDB === null){
            this.tareas = [];
        }else {
            this.tareas = datosDB;
        }
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
                localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
            }else{
                this.mensajeError = "Escribe una tarea concreta";   
            }
        },
        modificarTarea(index){
         this.tareas[index].status = !this.tareas[index].status;
         localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
        },
        eliminarTarea(index){
          this.tareas.splice(index, 1);
          localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
        }
    }
});