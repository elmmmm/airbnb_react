import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from '@/App';

import "normalize.css"
import "@/assets/css/index.less"
import 'antd/dist/antd.min.css';
import { Provider } from 'react-redux';
import store from "@/store/index";
import theme from './assets/theme';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    
      <Provider store={store}>
        <Suspense fallback="loading">
        <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
        </ThemeProvider>
        </Suspense>
      </Provider>
  // </React.StrictMode>
);


