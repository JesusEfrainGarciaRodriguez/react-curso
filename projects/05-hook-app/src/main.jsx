import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
/* import HooksApp from './HooksApp' */
/* import CounterApp from './01-useState/CounterApp' */
/* import CounterWuthCustomHook from './01-useState/CounterWuthCustomHook' */
/* import SimpleForm from './02-useEffect/SimpleForm' */
/* import FormWithCustomHook from './02-useEffect/FormWithCustomHook' */
import MultipleCustomHook from './03-examples/MultipleCustomHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWuthCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    <MultipleCustomHook />
  </React.StrictMode>,
)
