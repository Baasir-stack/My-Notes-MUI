import React from 'react'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Avatar, IconButton, Typography } from '@material-ui/core';
import { DeleteOutlineOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles'; 
import { green, yellow } from '@material-ui/core/colors';
import { blue, pink } from '@mui/material/colors';

const useStyles = makeStyles({
  avatar:{
    backgroundColor: (note) =>{
      if(note.category === 'work') return yellow[700];
      if(note.category === 'money') return green[500];
      if(note.category === 'todos') return pink[400];
      return blue[500];

    }
  }

  
})

const NoteCard = ({note, handleDelete}) => {

  const classes = useStyles(note)

  return (
    <Card elevation={3}>
        <CardHeader className={classes.avatar}
        avatar={
          <Avatar>{note.category[0].toUpperCase()}</Avatar>
        }
        action={<IconButton onClick={()=>handleDelete(note.id)}>
            <DeleteOutlineOutlined/>
        </IconButton>}
        title={note.title}
        subheader={note.category}
        />
    <CardContent>
        <Typography variant='body2'>
            {note.details}
        </Typography>
    </CardContent>
  
    </Card>
  )
}

export default NoteCard