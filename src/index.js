import React, {Suspense, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import routerConfig from "./routerConfig";
import {Provider, useDispatch} from "react-redux";
import store from "./store";
import {setToken} from "./store/slices/authenticationSlice";

const root = ReactDOM.createRoot(document.getElementById('root'));

async function fetchAccessToken() {
    const response = await fetch(
        'https://api.petfinder.com/v2/oauth2/token',
        {
            method: "POST",
            body: new URLSearchParams({
                grant_type: "client_credentials",
                client_id: process.env.REACT_APP_API_KEY,
                client_secret: process.env.REACT_APP_SECRET,
        }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "Connection": "keep-alive"
            },
        }
    );

    const result = await response.json();
    return result.access_token;
}

function ExtendedRouterProvider() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        async function fetchTokenAndStore() {
            const token = await fetchAccessToken();
            dispatch(setToken(token));
        }
        fetchTokenAndStore();
    }, [dispatch]);

    return <RouterProvider router={routerConfig()} />
}
root.render(
  <React.StrictMode>
      <Provider store={store}>
      <Suspense fallback={<div>Loading</div>}>
          <ExtendedRouterProvider />
      </Suspense>
      </Provider>
  </React.StrictMode>
);