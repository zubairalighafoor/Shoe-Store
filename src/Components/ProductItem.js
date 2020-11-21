import React from 'react';
import { useParams } from 'react-router-dom';
import ShoesList from './../Data/ShoesList';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    minHeight: '100%',
    height: '100%',
    
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  span : {
    fontSize: 20,
    fontWeight: 600,
    backgroundColor: '#f2743d',
    color: '#ffffff',
    borderRadius: '20px',
    padding: '4px 15px'
  },
  image: {
    margin:0,
    padding:0
  }
}));

export default function ProductItem() {
  const classes = useStyles();
  const { id } = useParams();
  let shoe = ShoesList.filter(x => x.id === Number(id))[0];

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={0}>
            <img className={classes.image} src={shoe.image} style={{ maxWidth: '100%' }} alt="shoe" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper} elevation={0}>
            <h1>{shoe.name}</h1><br/>
            <h2 >Price : <span className={classes.span}>${shoe.price}</span></h2><br/>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="uncontrolled-native">Available Size</InputLabel>
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: 'name',
                    id: 'uncontrolled-native',
                  }}
                >
                  {shoe.sizes.map((val, ind) => {
                    return (
                      <option value={val} key={ind}>{val}</option>
                    )
                  })}
                </NativeSelect>
              </FormControl><br/>
              <h2>Description : </h2>
              <p>{shoe.desc}</p>
              <br/>
              <h3>Reviews <span>({shoe.reviewsCount})</span></h3>
              <Rating name="rating" defaultValue={shoe.rating} readOnly />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
