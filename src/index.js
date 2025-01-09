import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './Redux/Store';
import App from './Redux/App';

// import Increment from './TP_STATE/increment';
// import Pere from './usestate/TP1/pere';
// import App from './usestate/exercice/App';
// import APP from './Api/App';
// import APP from './Revision_2_cc/APP'
// import App from './bootstrap/App';
// import App from './Api/App';
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
  </Provider>,

)
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

