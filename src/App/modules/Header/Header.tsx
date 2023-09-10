import S from "./Header.styled";


function Header(){
    return(
        <S.NavContent>
            <S.NavList>
                <S.NavItem>스토어</S.NavItem>
                <S.NavItem>MAC</S.NavItem>
                <S.NavItem>iPad</S.NavItem>
                <S.NavItem>iPhone</S.NavItem>
                <S.NavItem>Watch</S.NavItem>
                <S.NavItem>AirPods</S.NavItem>
                <S.NavItem>TV 및 홈</S.NavItem>
                <S.NavItem>엔터테이먼트</S.NavItem>
                <S.NavItem>액세서리</S.NavItem>
                <S.NavItem>고객지원</S.NavItem>
            </S.NavList>
        </S.NavContent>
    )
}

export default Header;