import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter'
import TextConverter from './components/textConverter'

function App() {


  return (
   <React.Fragment>
    <Counter/>
    <TextConverter/>
   </React.Fragment>
  )
}

export default App
