import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import './components/GithubProfileList.js'
import GithubProfileList from './components/GithubProfileList.js';
import FormItem from './components/FormItem.js';

function App() {
  const [profiles, setProfiles] = useState([])

  const addNewProfile = profileInfo => {
    setProfiles(profiles.concat(profileInfo))
  }
  
  return (
    <div className="App">
      <FormItem onSubmit={addNewProfile}></FormItem>
      <GithubProfileList profiles={profiles}></GithubProfileList>
    </div>
  );
}

export default App;
