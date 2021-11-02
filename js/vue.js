const app=new Vue({
    el:"#clases",
    data:{
        nombre:'',
        ingredientes:'',
        tamanio:'',
        precio:0,
        vigente:'',
        bebidas:[
        ],
        busqueda:'',
        ordenar:'',
        minimo:50,
    },
    methods:{
  agregar:function(){
    if(this.nombre && this.ingredientes && this.tamanio && this.precio && this.vigente){
    this.bebidas.push({nombreP:this.nombre, ingredientesP:this.ingredientes, tamanioP:this.tamanio ,precioP:this.precio,vigenteP:this.vigente });
    this.nombre='';
    this.ingredientes='';
    this.tamanio='';
    this.precio=0;
    this.vigente='';
    }
},
},
    computed:{
      buscarBebida(){
        return this.bebidas.filter((bebida)=>bebida.nombreP.includes(this.busqueda));
      },
     // ordenar(){
      //  return this.bebidas.filter((bebida)=>bebida.nombreP.includes(this.ordenar));
     // },
      bebidaOrdenar(){
        return this.bebidas.filter((bebida)=>bebida.precioP>=this.minimo);
      },
        
      }

    });