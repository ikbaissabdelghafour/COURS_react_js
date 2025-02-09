import React  from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './Revesion_CC3/Redux/Store';

// import { Provider } from 'react-redux';
// import store from './Redux/Store';
// import App from './Redux/App';
// import App from './Tp_de_revision/App';
// import App from './Tp_de_revision/App';
// import Increment from './TP_STATE/increment';
// import App from './useRef/useRef/App';
// import App from './Hook/CustomHooK/App';
// ------------------------------------------------------------------------
// import App from './Redux_Exercices/Counter/App';
// import App from './Redux_Exercices/CRUD/App/App';
// import App from './calculatrice_Redux/App/App';
import App from './Revesion_CC3/App/Client';
// ------------------------------------------------------------------------
// import Pere from './usestate/TP1/pere';
// import App from './usestate/exercice/App';
// import APP from './Api/App';
// import APP from './Revision_2_cc/APP'
// import App from './bootstrap/App';
// import App from './Api/App';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <App/>
  </Provider>

)
 
// -----------------------------
/*
<Provider store={store}>
<App />
</Provider>
*/
// -----------------------------

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

