import styled from 'styled-components'
import Nav from './Nav'

// 함수 선언식
function Header(props) {
    return (
        <Hd>
            header
            <Nav nav={props.nav} />
        </Hd>
    )
}
const Hd = styled.div`
    height: 100px;
    background-color: yellowgreen;
`

export default Header
