import { styled } from "styled-components";

interface Props {
  SectionContent: any;
  MainText: any;
}

const S: Props = {
  SectionContent: null,
  MainText: null
};

S.SectionContent = styled.div`
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    max-width: 1024px;
`

S.MainText = styled.div`
  font-size: 14px;
  display: inline-block;
  padding: 12px, 0;
`



export default S;
