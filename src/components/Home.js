import React from 'react';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SocialMedia from './SocialMedia';
import {StaticImage} from 'gatsby-plugin-image';
import '../assets/fonts.css'


const useStyles = makeStyles(()=>({
    section:
    {
        height:"100vh",
    },
    content:{
        height:"100%", 
        zIndex:100,
        position: "relative",
    },
    container:{
        height:"100%", 
    },
    image:{
        height: "100%",
        width: "100%",
        zIndex:1,
    }
}))

function Home() {
    const classes=useStyles();
  return(
        <Paper className={classes.section}>
            <StaticImage
                className={classes.image}
                src="../images/logo2.jpg"
                alt=""
                style={{ position: "absolute" }}
            />
            <Container className={classes.container} maxWidth="md">
                <Grid
                 className={classes.content} 
                 container
                 justifyContent="space-between" 
                 alignItems="center">
                    <Grid item sm={8}>
                        <Typography component="h1" variant="h3" fontFamily='Mulish'>
                            Hi, I'm Enes.
                        </Typography>
                        <Typography variant="h5" fontFamily='Mulish'>
                            I have always been so curious about the whole software development cycle,
                            from just an idea to the journey of bringing it to life. 
                            Therefore I enjoy spending my time improving myself in 
                            full stack development while mostly focusing on the frontend.
                        </Typography>
                        <Typography variant="h4">
                            -------------------------------------------------
                        </Typography>
                        <Typography component="h1" variant="h4" fontFamily='Mulish'>
                            Technology Stack
                        </Typography>
                        <Typography variant="h5" fontFamily='Mulish'>
                            I'm currently focused on JavaScript, Material UI with React on the frontend, 
                            .Net Core on the backend.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <SocialMedia/>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
)
}
export default Home;