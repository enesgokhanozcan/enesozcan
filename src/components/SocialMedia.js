import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';


const media=[
    {icon:GitHubIcon,url:"https://github.com/Antropozen"},
    {icon:TwitterIcon,url:"https://twitter.com/antropozen"},
    {icon:InstagramIcon,url:"https://www.instagram.com/enesgokhanozcan/"},
    {icon:LinkedInIcon,url:"https://www.linkedin.com/in/enes-gokhan-ozcan/"},

]

function SocialMedia() {
  return (
      <Grid container direction="column" spacing={1}>
          {media.map((x)=>(
              <Grid item>
                  <Link href={x.url}>
                    <IconButton>
                        <x.icon/>
                    </IconButton>
                  </Link>
              </Grid>
          ))}
      </Grid>
  );
}

export default SocialMedia;