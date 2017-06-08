import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import store from './store';
import showResults from './showResults';
import SimpleForm from './SimpleForm';

const rootEl = document.getElementById('root');

const objet={ "prenom" : "hafida" , "color" : "00ff00"} ;

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Simple Form</h2>
      <SimpleForm onSubmit={showResults} objet={objet} />
      <Values form="simple" />
    </div>
  </Provider>,
  rootEl,
);
