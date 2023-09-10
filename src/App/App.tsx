import React from "react";
import MainPage from "../Pages/MainPage/MainPage";
import "../styles/common.css";
import Aside from "./modules/Aside/Aside";
import S from "./App.styled";

function App() {
  return (
    <S.Background>
      <S.Header />
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
