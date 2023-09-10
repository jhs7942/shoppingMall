import React, { ReactNode } from "react";
import { styled } from "styled-components";

interface Props {
  Title: any;
  Content: any;
}

const S: Props = {
  Title: null,
  Content: null,
};

S.Title = styled.div`
  font-weight: bold;
  text-align: center;
`;

S.Content = styled.div`
  margin: 5px;
  text-align: center;
`;

export default S;
