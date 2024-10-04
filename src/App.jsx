import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: "SimKyungha";
    src: url("fonts/SimKyungha.ttf") format("truetype");
  };

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  ul, li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  body{
    font-family: "SimKyungha";
    /* background: url("https://e0.pxfuel.com/wallpapers/320/51/desktop-wallpaper-cats-and-macbook-pc-and-mac.jpg") center/cover no-repeat; */
    background: url("https://img.freepik.com/free-photo/digital-art-cat-pattern_23-2151520509.jpg?w=826&t=st=1728008983~exp=1728009583~hmac=ba207526b61de9b7b99a22482fd6cd20b29227d0da5bdd0b8cd4a438b4c2437b") center/cover no-repeat;
    height: 100vh;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
