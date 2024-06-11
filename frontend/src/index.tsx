/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Feature from './feature-module/feature';
import 'aos/dist/aos.css';
import '../src/style/icons/fontawesome/css/all.min.css';
import '../src/style/icons/fontawesome/css/fontawesome.min.css'
import { Provider } from 'react-redux';
import store from './core/data/redux/store';
import '../src/style/icons/feather/css/iconfont.css'
import '../src/style/scss/main.scss'
import '../src/style/css/feather.css'
import './../src/index.css'
import { base_path } from "./environment";
import { img_path_api } from "./environment";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
const client = new ApolloClient({
  uri: `${img_path_api}/graphql`,
  cache: new InMemoryCache()
})
import AuthProvider from "./feature-module/authentication/AuthProvider/AuthProvider";

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ApolloProvider client={client}>
    <React.StrictMode>
    <AuthProvider>
      <Provider store={store} >
        <BrowserRouter basename={base_path}>
          <Feature />
        </BrowserRouter>
      </Provider>
    </AuthProvider>
    </React.StrictMode>
    </ApolloProvider>
  );
} else {
  console.error("Element with id 'root' not found.");
}
