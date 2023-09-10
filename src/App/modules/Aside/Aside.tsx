import { SideBar } from "../../../components/SideBar";
import S from "./Aside.styled";

interface Props {
  contents: contentsProps[];
}

interface contentsProps {
  name: string;
}

function Aside({ contents }: Props) {
  return (
    <div>
      <SideBar>
        <S.Title>
          <SideBar.Title>제목</SideBar.Title>
        </S.Title>
        {contents.map((content) => (
          <S.Content>
            <SideBar.Content>{content.name}</SideBar.Content>
          </S.Content>
        ))}
      </SideBar>
    </div>
  );
}

export default Aside;
