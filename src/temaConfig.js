import {createMuiTheme} from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
    palette: {
        primary: {
           main:  purple[900]
    },
    primary: {
        main:  pink[900]
 }
    }
})

export default theme;