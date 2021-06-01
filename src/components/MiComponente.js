import React, {Component} from 'react'; //CARGAMOS REACT

//Creamos nuestro componente extendiendo de la clase Component que pertenece a React. 
class MiComponente extends Component {  //Extiendo Componente usando "restructuring" para que mas limpio sino usar "Rect.Component"

    //Metodo render se encarga de mostrar la vista que va a evolver este componente
    render() {

        let receta = {
            nombre: 'pizza',
            ingredientes: ['Harina, ', 'Salsa de tomate y ', 'Muzzarella'],
            precio: 1000
        }

        return ( //El retun puede devolver un solo nodo no mas por eso usamos div o fragment para poner varios nodos. 
            <React.Fragment> 
                
                <h1>Receta desde un objeto</h1>
                <p>{' Producto: ' + receta.nombre}</p>
                <p>{' Ingredientes: ' + receta.ingredientes}</p>
                <p>{' Precio: ' + receta.precio}</p>
                <hr/>
                
                <ol>
                {   //Lista ordenada recorriendo nuestro objeto con map e imprimiendolo por consola 
                    //<li key={i}> Identifica los componentes (si cambiamos un ingrediente se tiene que actualizar en el dom ) 
                    receta.ingredientes.map((ingrediente, i) =>{
                        console.log(ingrediente)
                        return(                   
                              <section>
 
                                    <li key={i}> 
                                    {ingrediente}
                                    </li>
                              </section>
                              )
                    })
                }
                </ol>
                <hr/>

                <h2> Hola, soy el componente llamdo: Mi componente</h2>
                <h2> Segundo nodo todo en un Reac.Fragment</h2> 
                <hr/>
            </React.Fragment>
            
            
        )
        
    }
}

export default MiComponente;

