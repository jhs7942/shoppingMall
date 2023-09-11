import { styled } from "styled-components";

interface Props {
  MainContent: any;
  SubContent: any;
}

const S: Props = {
  MainContent: null,
  SubContent: null
};

S.MainContent = styled.div`
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    max-width: 1024px;
`

S.SubContent = styled.div`
  font-size: 14px;
  display: inline-block;
  padding: 12px, 0;
`



export default S;
