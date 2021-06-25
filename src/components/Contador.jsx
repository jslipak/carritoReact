import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  contador: {
    marginTop: 20,
  },
  btnAddToCar: {
    marginBottom: 20,
  },
});

const Contador = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.contador}>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button onClick={() => props.onAdd('suma')}> + </Button>
          <Button onClick={() => props.onAdd('resta')}> - </Button>
        </ButtonGroup>
        <p>{`Candtidad ${props.clicks}`} </p>
      </Grid>

      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.btnAddToCar}
        >
          Agregar al carrito
        </Button>
        <Typography />
        <Button variant="contained" color="primary">
          {' '}
          Terminar Compra
        </Button>
      </div>
    </>
  );
};

export default Contador;
