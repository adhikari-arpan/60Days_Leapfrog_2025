import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const anotherElem = (
  <a href="https://arpanadhikari7.com.np" target='_blank'>Visit My Website</a>
)

const reactElement = React.createElement(
  'a',
  {href:'https://arpanadhikari7.com.np', target: '_blank'},
  'click me to visit my website'
)

createRoot(document.getElementById('root')).render(
  
  // reactElement
  // anotherElem
  
  <App />
  
)