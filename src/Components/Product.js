import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ShoesList from '../Data/ShoesList';

const useStyles = makeStyles({
  root: {
    flexGrow:1,
  },
  card: {
    maxWidth: 345,
    margin: 10,
    padding: 10,
    "&:hover": {
      backgroundColor: '#ffffff',
      boxShadow: '0px 3px 3px -2px #f2743d, 0px 3px 4px 0px #f2743d, 0px 1px 8px 0px #f2743d'
    },
  },
  productName: {
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: 18,
    margin: '5px 0 10px 0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  media: {
    height: 300,
    position: 'relative'
  },
  priceTag: {
      position: 'absolute',
      top: '15px',
      right: '15px',        
      fontSize: 20,
      fontWeight: 600,
      backgroundColor: '#f2743d',
      color: '#ffffff',
      borderRadius: '20px',
      padding: '4px 15px'
  }
});
function Product() {
  const classes = useStyles();
  return (
    <div >
      <Grid container justify="center" spacing={3}>
      { 
        ShoesList.map((val,ind)=>{
          return (
            <Grid item md={4}>
              <Link to={"/product/"+val.id}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={val.image}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="h3" className={classes.productName}>
                        {val.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        <span className={classes.priceTag}>${val.price}</span>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          )
        })
      }
      </Grid>
    </div>
  );
}

export default Product;