import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Container, Grid, Typography,Button } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
  root: {
    Width:  "100vh",
    height: "100vh",
    backgroundColor: theme.palette.grey[200],
    paddingTop:theme.spacing(10),
    
  },
  button:{
    margin: theme.spacing(8),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(5),
    marginTop: theme.spacing(5),
  },
  card: {
    backgroundColor: "primary"
  }

}));

const Homepage = () => {
    const classes = useStyles();
 

  return (
     <div className={classes.root}>
         <Grid container spacing={5}>
             <Grid item sm={4} >
             <Card variant="outlined" >
                 <CardContent className={classes.card}>
                     <Typography variant ="h4">Simple React UI </Typography>
                     <Typography variant ="subtitle">
                     React has been designed from the start for gradual adoption,
                      and you can use as little or as much React as you need. Perhaps you only want to add some “sprinkles of interactivity” to an existing page. 
                     React components are a great way to do that.
                     </Typography>
                 </CardContent>
                 <CardActions>
                     <Button size="small" color="primary">Read More</Button>
                 </CardActions>
             </Card>
             <Button className={classes.button} variant="contained" color="primary">
        Add
      </Button>
             </Grid>
             <Grid item sm={4}>
             <Card>
                 <CardContent>
                     <Typography variant ="h4">Simple React UI </Typography>
                     <Typography variant ="subtitle">
                     React has been designed from the start for gradual adoption,
                      and you can use as little or as much React as you need. Perhaps you only want to add some “sprinkles of interactivity” to an existing page. 
                     React components are a great way to do that.
                     </Typography>
                 </CardContent>
                 <CardActions>
                     <Button size="small" color="primary">Read More</Button>
                 </CardActions>
             </Card>
             <Button className={classes.button} variant="contained" color="primary">
        Add
      </Button>
             </Grid>

             <Grid item sm={4}>
             <Card>
                 <CardContent>
                     <Typography variant ="h4" >Simple React UI </Typography>
                     <Typography variant ="subtitle">
                     React has been designed from the start for gradual adoption,
                      and you can use as little or as much React as you need. Perhaps you only want to add some “sprinkles of interactivity” to an existing page. 
                     React components are a great way to do that.
                     </Typography>
                 </CardContent>

                 <CardActions>
                     <Button size="small" color="primary">Read More</Button>
                 </CardActions>
             </Card>
             <Button className={classes.button} variant="contained" color="primary">
        Add
      </Button>
             </Grid>
         </Grid>
         
     </div>
    )
}

export default Homepage
