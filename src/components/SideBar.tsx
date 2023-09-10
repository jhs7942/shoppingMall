import React, { ReactNode } from "react";
import { styled } from "styled-components";

//Main
const SideBarBox = styled.div`
  background-color: white;
  width: 100px;
  height: 150px;
`;

interface SideBarMainProps {
  children?: ReactNode;
}
function SideBarMain({ children }: SideBarMainProps) {
  return <SideBarBox>{children}</SideBarBox>;
}

//Title
interface SideBarTitleProps {
  children?: ReactNode;
}
function SideBarTitle({ children }: SideBarTitleProps) {
  return <div>{children}</div>;
}

//Content
interface SideBarContentProps {
  children?: ReactNode;
}
function SideBarContent({ children }: SideBarContentProps) {
  return <div>{children}</div>;
}

//export
export const SideBar = Object.assign(SideBarMain, {
  Title: SideBarTitle,
  Content: SideBarContent,
});
