import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Store from "./Components/Pages/Store";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";

const router = createBrowserRouter([
  { path: "/", element: <Store /> },
  { path: "/About", element: <About /> },
  { path: "/Home", element: <Home /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
