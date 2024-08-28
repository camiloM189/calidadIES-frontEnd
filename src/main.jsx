import React from 'react'
import ReactDOM from 'react-dom/client'

import './style.css'
import './stylePage.css'
import './newStyle.css'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { PageRoutes } from './page/routes/PageRoutes'






ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
           <PageRoutes/>   
         {/* <AppRoutes/>    */}
        </Provider>
      </BrowserRouter>
  // </React.StrictMode>,
)
