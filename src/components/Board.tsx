import React, { ReactNode } from "react";
import { styled } from "styled-components";

//Main
const BorderBox = styled.div`
  background-color: white;
  width: 100px;
  height: 150px;
`;

interface BorderMainProps {
  children?: ReactNode;
}
function BorderMain({ children }: BorderMainProps) {
  return <BorderBox>{children}</BorderBox>;
}

//Title
interface BorderTitleProps {
  children?: ReactNode;
}
function BorderTitle({ children }: BorderTitleProps) {
  return <div>{children}</div>;
}

//Content
interface BorderContentProps {
  children?: ReactNode;
}
function BorderContent({ children }: BorderContentProps) {
  return { children };
}

//export
export const Border = Object.assign(BorderMain, {
  Title: BorderTitle,
  Content: BorderContent,
});
