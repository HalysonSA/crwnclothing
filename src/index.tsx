import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalStyle} from './styles/global'
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './context/usercontext';
import {ProductsProvider} from './context/productcontext'
import {CartProvider} from './context/cartcontext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle/>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
              <App/>
          </CartProvider>
            
        </ProductsProvider>
          
      </UserProvider>
      
    </BrowserRouter>
    
  </React.StrictMode>
);

