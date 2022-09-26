import React, { useState } from 'react'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@material-ui/core'
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core'
import { TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';



const useStyle = makeStyles({
  
  field:{
    display:'block',
    marginTop: 20,
  },
  btn: {
    
    marginTop: 20,
    backgroundColor: 'violet'
  }
})

export default function Create() {

  const classes = useStyle()

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    setTitleError(false)
    setDetailsError(false)

    if (title === '') {
      setTitleError(true)
    }
    if (details === '') {
      setDetailsError(true)
    }

    if (title && details) {
      fetch('http://localhost:8000/notes',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({title, details, category})
      }).then(()=>history.push('/'))
      
    }



  }

  return (
    <Container>
      <Typography
        variant="h4"
        align='center'
        color='secondary'
        gutterBottom

      >
        Create A New Note
      </Typography><br /> <br />


      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField

          onChange={(e) => { setTitle(e.target.value) }}

          color='secondary'
          label='Note Title'
          variant='outlined'
          fullWidth
          required
          error={titleError}
        />

        <TextField
          onChange={(e) => { setDetails(e.target.value) }}
          color='secondary'
          label='Note Title'
          variant='outlined'
          multiline
          rows={4}
          fullWidth
          margin="normal"
          error={detailsError}
          required
        />

        <FormControl className={classes.field}>
        <FormLabel>Note Cateory</FormLabel>
        <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>
        <FormControlLabel value='money' control={<Radio/>} label={'Money'} />
        <FormControlLabel value='todos' control={<Radio/>} label={'Todos'} />
        <FormControlLabel value='reminders' control={<Radio/>} label={'Reminders'} />
        <FormControlLabel value='work' control={<Radio/>} label={'Work'} />
        </RadioGroup>
        </FormControl>

        <Button 
        
          type='submit'
          className={classes.btn}
          color='secondary'
          variant='contained'
          endIcon={<KeyboardArrowRightIcon />}
        >
          SUBMIT
        </Button>

      </form>





    </Container>
  )
}
