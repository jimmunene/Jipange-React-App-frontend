import React from 'react'
import {Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const Homepage = () => {
  return (    
      <Card sx={{display: 'flex', flexWrap: 'wrap', maxWidth: 600, ml: 50, borderColor: "primary.main"}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6"  component="div" >
          “Don't stress about your events.Welcome to Jipange!!.”
          </Typography>          
        </CardContent>
        <CardMedia
          component="img"
          height="400"
          image="https://images.unsplash.com/photo-1620608964186-18a8cfc2ad44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYW5uZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="planner"
        />
      </CardActionArea>
    </Card>    
  )
}

export default Homepage