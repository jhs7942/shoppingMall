import { styled } from "styled-components";

interface Props {
  NavItem: any;
  NavList: any;
  NavContent: any;
}

const S: Props = {
    NavList: null,
    NavItem: null,
    NavContent: null,
};

S.NavContent = styled.div`
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    max-width: 1024px;
    background-color: #FAFAFA;
`

S.NavList = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  height: 44px;
  list-style: none;
`;

S.NavItem = styled.div`
  margin: 5px;
  text-align: center;
`;



export default S;
