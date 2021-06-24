import React, {useContext} from 'react'
import {ThemeContext} from './../components/Listas'



 const Clase10 = () => {

    const darkTheme = useContext(ThemeContext)

    const themeStyle =  {
        background: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <div style={themeStyle}> Use Context
            {console.log(themeStyle)}
        </div>
    )
}
export default Clase10