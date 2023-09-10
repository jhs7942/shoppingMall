import { styled } from "styled-components";

interface Props {
  Background: any;
  Header: any;
  LeftMenu: any;
  RightMenu: any;
  Aside: any;
  Content: any;
}

const S: Props = {
  Background: null,
  Header: null,
  LeftMenu: null,
  RightMenu: null,
  Aside: null,
  Content: null,
};

S.Background = styled.div`
  position: relative;
  background-color: rgba(251, 251, 253, .8);
  width: 100vw;
  height: 100vh;
`;

S.Header = styled.div`
  position: relative;
  border: 1px solid black;
  width: 100%;
  height: 100px;
`;

S.LeftMenu = styled.div`
  width: 20%;
  height: 100vh;
  border: 1px solid black;
  float: left;
`;

S.RightMenu = styled.div`
  border: 1px solid black;
  width: 79%;
  height: 100vh;
  float: right;
`;

S.Aside = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  width: 100px;
  height: 150px;
  position: sticky;
  animation-duration: 2s;
`;

S.Content = styled.div`
  position: absolute;
`;

export default S;
