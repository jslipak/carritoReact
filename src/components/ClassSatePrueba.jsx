import React, { Component } from 'react'
import {Button} from '@material-ui/core'; //Componente de material UI 


class ClassSatePrueba extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Santiago desde propsClass",
            edad: "30"
        };
    }
    handlerValue = (e) => {
        this.setState({

            name: e.target.value,
            edad: '23'
        });
    };
    render() {
        return (
            <div>
                <Button 
                variant="contained" 
                onChange = {() => this.handlerValue()}
                >
                    state desde Class
                </Button>
                 
                {console.log(this.state.name + '\n' + this.state.edad)}
            </div>
        );
    }
}
export default ClassSatePrueba