/* eslint-disable */

// App.jsx
import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes ,Route } from 'react-router-dom';
import { Actors, MovieInformation, Movies, Profile, NavBar, useStyles } from './';
// import { StyledRoot, StyledContent, StyledToolbar } from './styles';
// import useStyles from './styles';

const App = ()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <CssBaseline />
      <NavBar className={classes.toolbar}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Routes>
          <Route path="/movie/:id" element={<MovieInformation />} className={classes.content} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/" element={<Movies />} />
        </Routes>
      </main>
    </div>

    
  );
}

export default App;
