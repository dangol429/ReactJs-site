import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import circleReducer from './components/circleSlice';
import App from './App';
import './index.css';
import Card from './components/task 2(fetch api)/card'
import Card_details from './components/task3/Card_details';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

/* Creating a router for making react multipages */
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/task1",
      element: <App/>,
    },
    {
        path: "/task2",
        element: <Card/>,
      },
      {
        path: "/task3",
        element: <Card_details/>,
      },
  ]);
/* Creating a redux store for storing the data between pages and transfering them */
  const store = configureStore({
    reducer: {
      circle: circleReducer,
    },
  });
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}><RouterProvider router={router} /></Provider>
    </React.StrictMode>
  );
