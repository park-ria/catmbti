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
    //background: url("../cat/cat_bg.jpg") center/cover no-repeat;
    /* background: url("https://e0.pxfuel.com/wallpapers/320/51/desktop-wallpaper-cats-and-macbook-pc-and-mac.jpg") center/cover no-repeat; */
    background: url("https://img.freepik.com/free-vector/cat-lover-patterned-background-template_53876-100661.jpg?size=626&ext=jpg&ga=GA1.2.559930315.1728006854&semt=ais_hybrid") center/cover no-repeat;
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
