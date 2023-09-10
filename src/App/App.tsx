import React from "react";
import MainPage from "../Pages/MainPage/MainPage";
import "../styles/common.css";
import Aside from "./modules/Aside/Aside";
import S from "./App.styled";
import Header from "./modules/Header/Header";
import Section from "./modules/Section/Section";

function App() {
  return (
    <S.Background>
      <Header />
      <Section />
      <S.LeftMenu>
        <S.Aside>
          <Aside contents={[{ name: "11" }, { name: "11" }]} />
        </S.Aside>
      </S.LeftMenu>
      <S.RightMenu>
        <MainPage />
      </S.RightMenu>
    </S.Background>
  );
}

export default App;
