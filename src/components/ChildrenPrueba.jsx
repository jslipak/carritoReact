import { 
  Component,
  useState,
  React 
  } from "react";


class ChildrenPrueba extends Component {
  constructor(props) {
    super(props);
    this.state = { //inicializamos nuestro estado
      name: "Santiago",
      edad: "30"
    };
  }
  
  handlerValue = (e) =>{
      this.setState({

          name: e.target.value,
          edad: '23'
      });
  }


  render() {
    return (
        <div>
        <input
                placeholder = 'Ingrese su nombre'
                onChange = {() => this.handlerValue()}  
        >

        </input>
        </div>
    );
  }
}


export default ChildrenPrueba