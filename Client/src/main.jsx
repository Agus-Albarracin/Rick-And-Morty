import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import styles from './main.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from '../src/redux/store'




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </BrowserRouter>
  </Provider>
)
