import React, { Component } from 'react'

class Reloj extends Component {
    constructor(props) {
        super(props);
    }
    componentWillUnmount(){
        console.log(3,"El coponente ha sido eliminado del DOM")
    }
    render(){
    return<h3>{this.props.hora}</h3>
    }
}

class CicloDeVida extends Component {
    constructor(props){
        super(props);
        console.log(0, "El componente se inicializa, aun no esta en el DOM")
        this.state = {
            hora: new Date().toLocaleTimeString,
            visible: false
        };

        this.temporizador = null;
    }
    //Aca se hacen las peticiones a API
    componentDidMount(){
        console.log(1, "El componente ya se encuentra en el DOM")
    }

    //Puede recibir 2 parametros las props previas y el state previa
    componentDidUpdate(prevProps, prevState){
        console.log(2, "El estado o las props del componente han cambiado")
        console.log(prevProps)
        console.log(prevState)
    }

   

    tictac = () => {
        this.temporizador = setInterval(() =>{
            this.setState({
                hora: new Date().toLocaleTimeString(),
            });
        }, 1000);
    }
    iniciar = () => {
        this.tictac();
        this.setState({
            visible: true,
        })
    }
    detener = () => {
        clearInterval(this.temporizador)
        this.setState({
            visible: false,
        })

    }

    render() {
        console.log(4, "El componente se redibuja por algun cambio en el dom");
        return(
            <><hr/>
            <h2>  Ciclo de vida de los componentes</h2>
            <p>0 es el constructor </p>
            <p>1 ComponentDidMount</p>
            <p>2 ComponentDidUpdate</p>
            <p>3 ComponentWillUnmount</p>
            <p>4  es el Render</p>
            {this.state.visible && <Reloj hora={this.state.hora}/> /*renderizado condicional*/} 
            <button onClick={this.iniciar}>Iniciar</button>
            <button onClick={this.detener}>Detener</button>
            </>
        );
    }

}
export default  CicloDeVida