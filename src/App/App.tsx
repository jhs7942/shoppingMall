import React from "react";
import MainPage from "../Pages/MainPage/MainPage";
import "../styles/common.css";
import Aside from "./modules/Aside/Aside";
import S from "./App.styled";
import Header from "./modules/Header/Header";
import Section from "./modules/Section/Section";
import Content from "./modules/Content/Content";

function App() {
  return (
    <S.Background>
      <Header />
      <Section />
      <Content />
      {/* <MainPage /> */}
      {/* <S.LeftMenu>
        <S.Aside>
          <Aside contents={[{ name: "11" }, { name: "11" }]} />
        </S.Aside>
      </S.LeftMenu> */}
      {/* <S.RightMenu> */}
      {/* </S.RightMenu> */}
    </S.Background>
  );
}

export default App;
