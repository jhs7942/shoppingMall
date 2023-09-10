import { styled } from "styled-components";

interface Props {
  SectionContent: any;
}

const S: Props = {
  SectionContent: null,
};

S.SectionContent = styled.div`
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    max-width: 1024px;
`



export default S;
